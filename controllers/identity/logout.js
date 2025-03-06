const { removeRefreshTokenCookie } = require('../../functions');

module.exports = async (req, res) => {
  removeRefreshTokenCookie(res);

  return res.json({ message: 'Logout successful' });
};
