const { hashSync } = require('bcryptjs');
const { v4: uuidv4 } = require('uuid');

module.exports = [
  {
    id: uuidv4(),
    email: 'michael@email.com',
    name: 'Michael Scott',
    password: hashSync('supersecretpassword'),
    active: true,
    confirmed: true,
  },
  {
    id: uuidv4(),
    email: 'jim@email.com',
    name: 'Jim Halpert',
    password: hashSync('supersecretpassword'),
    active: false,
    confirmed: true,
  },
  {
    id: uuidv4(),
    email: 'pam@email.com',
    name: 'Pam Beesly',
    password: hashSync('supersecretpassword'),
    active: true,
    confirmed: false,
  },
];
