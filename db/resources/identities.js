import bcryptjs from 'bcryptjs';

export default () => {
  return [
    {
      email: 'michael@email.com',
      name: 'Michael Scott',
      role: 'admin',
      password: bcryptjs.hashSync('supersecretpassword'),
      active: true,
      confirmed: true,
    },
    {
      email: 'jim@email.com',
      name: 'Jim Halpert',
      role: 'client',
      password: bcryptjs.hashSync('supersecretpassword'),
      active: false,
      confirmed: true,
    },
    {
      email: 'pam@email.com',
      name: 'Pam Beesly',
      role: 'client',
      password: bcryptjs.hashSync('supersecretpassword'),
      active: true,
      confirmed: false,
    },
  ];
};
