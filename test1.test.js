const apiTests = require('./controllers');

const apiCreat = new apiTests();


test('Create user', async() => {
    await apiCreat.creatUser();
})


// test('Login user', async() => {
//     try {
//         const response = await axios.get('https://reqres.in/api/login', {
//           email: 'eve.holt@reqres.in',
//           password: 'pistol'          
//         });
//         console.log('Registration successful:', response);
//       } catch (error) {
//         if (error.response) {
//           console.log('Error:', error.response.data); // Подробнее о причине ошибки
//         } else {
//           console.log('Error:', error.message);
//         }
//       }
// })
// test('Login user', async() => {
//   const res = await axios.get('https://httpbin.org/get', { params: { answer: 42 } });

//   console.log(res.data.args);
//   console.log(res.data instanceof Object);
// })