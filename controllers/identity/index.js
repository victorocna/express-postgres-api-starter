const confirm = require('./confirm');
const forgot = require('./forgot');
const login = require('./login');
const logout = require('./logout');
const profile = require('./profile');
const refreshToken = require('./refresh-token');
const reset = require('./reset');
const changePassword = require('./change-password');

module.exports = {
  changePassword,
  confirm,
  forgot,
  login,
  logout,
  profile,
  refreshToken,
  reset,
};
