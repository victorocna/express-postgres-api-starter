const { error } = require('../../functions');

module.exports = async (req, res) => {
  const { id } = req.params;
  const { secret } = req.user;
  if (!id || !secret) {
    throw error(404, 'Missing required params');
  }

  return res.status(204).json({ message: 'Coming soon' });
};
