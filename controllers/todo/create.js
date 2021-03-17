const { error } = require('../../functions');

module.exports = async (req, res) => {
  const { secret } = req.user;
  if (!secret) {
    throw error(404, 'Missing required params');
  }

  return res.status(204).json({ message: 'Coming soon' });
};
