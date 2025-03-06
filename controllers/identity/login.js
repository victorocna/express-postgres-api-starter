const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { error } = require('../../functions');
const { knex } = require('../../db');

module.exports = async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    throw error(400, 'Missing required params');
  }

  const identity = await knex('identities').first('*').where('email', '=', email);
  if (!identity) {
    throw error(400, 'Your email or password are invalid');
  }

  // Block logins for accounts with too many login attempts
  if (identity?.loginAttempts >= 5) {
    await identity.updateOne({ active: false });
    throw error(400, 'Your account has been locked for security reasons');
  }

  const { id, name, active, confirmed, role, password: passwordFromDb } = identity;
  if (!active || !confirmed) {
    throw error(400, 'Your account is not active, yet');
  }

  const passwordsMatch = await bcrypt.compare(password, passwordFromDb);
  if (!passwordsMatch) {
    throw error(400, 'Your username or password are invalid');
  }

  // the JWT public data payload
  const payload = { name, email, role, me: id };

  const token = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '15m',
    algorithm: 'HS256',
  });

  const refreshToken = jwt.sign(payload, process.env.JWT_SECRET, {
    expiresIn: '12h',
    algorithm: 'HS256',
  });

  // set refresk token as cookie
  const oneDay = 24 * 3600 * 1000;
  res.cookie(process.env.JWT_TOKEN_NAME, refreshToken, {
    secure: true,
    maxAge: oneDay,
    signed: true,
    httpOnly: true,
    sameSite: 'lax',
  });

  return res.status(200).json({ token, message: 'Authentication successful' });
};
