const axios = require('axios');
const {faker} = require('@faker-js/faker')

module.exports = class APItests {
    async creatUser(url = 'https://demoqa.com/Account/v1/User') {
        try {
            const response = await axios.post(url, {
              userName: faker.internet.userName(), 
              password: 'pistol9D@'          
            });
            console.log('Registration successful:', response.data);
            console.log(response.data.userID);
            return response.userID
          } catch (error) {
            if (error.response) {
              console.log(faker.internet.userName())
              console.log('Error:', error.response.data); 
            } else {
              console.log('Error:', error.message);
            }
          }
    }
}