const { program } = require('commander');
const axios = require('axios');

program
  .description('This program will get profile user by email')
  .requiredOption('-e, --email <email>', 'Ex: email@mail.com')
  .hook('preAction', () => {
    console.log('Pre Action');
  });

program.parse();

const options = program.opts();

if (options.email) {
  console.log(`Email detected : ${options.email}`)
  axios.get(`http://localhost:5000/api/v1/users/${options.email}`)
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err.response.data.message);
    })
} else {
  console.log('Email not detected')
};