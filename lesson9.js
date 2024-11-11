// const months = ["Dec", "Feb", "Jan", "March"];
// months.sort();
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]


// const fruits = [10, 2, 30, 21];
// fruits.sort((a, b) => a - b); // ['apple', 'banana', 'grape', 'orange']


// console.log(fruits)

// const months = ["Dec", "Jan", "Feb", "March"];
// months.sort((a, b) => a.localeCompare(b));
// console.log(months); //  ["Dec", "Feb", "Jan", "March"]



// const numbers = [1, 2, 3, 4, 5];
// numbers.reverse(); // [5, 4, 3, 2, 1]
// console.log(numbers);

// const numbers = [1, 2, 3, 4, 5];
// const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0); // 15

// console.log(sum)

// const numbers = [1, 2, 3, 4, 5];
// const hasThree = numbers.includes(3); // true

// console.log(hasThree)

// const numbers = [1, 2, 3, 4, 5];
// const hasEvenNumber = numbers.some((number) => number % 2 === 0); // true

// console.log(hasEvenNumber)


// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = originalArray.slice(2, 50);
// // copiedArray[2] = "1111"
// // copiedArray[5] = "22222"
// // originalArray[5][1] = 'test'

// console.log(copiedArray)
// console.log(originalArray)

// const originalArray = [1, 2, 3, 4, 5];
// const copiedArray = Array.from(originalArray);

// console.log(copiedArray)

// const person = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 30,
//     isStudent: false,
//     testData: {
//         second: "test"
//     },
//     funcF: function() {
//         console.log('Hello')
//     }
//   };

// person.funcF()


//   person.age = 40
//   person.testData.newFild = 'new'
//   console.log(person)

//   delete  person.testData.newFild 
//   console.log(person)

// //   const arr = [];
// //   const arr2 = new Array();

// //   const obj = {};

// //   function Person(name, age) {
// //     this.name = name;
// //     this.age = age;
// //   }

// //   const obj3 = new Object();
// //   obj3.name = 'Test';
  
// // // //   const john = new Person("John", 30);
// // //   const john = new Person('test');

// //   console.log(obj3)



// const person = {
//     name: "John",
//     greet: function() {
//         console.log(`Hello, my name is ${this.name}`);
//     },
//     friends: [],
//     addFriend: function (friendName){
//         this.friends.push(friendName)
//     }
// };

// person.greet(); // "Hello, my name is John"
// console.log(person.friends) // []
// person.addFriend(Stanislav);
// person.addFriend(Stanislav);
// console.log(person.friends) // [ 'Stanislav' ]
// console.log(person)



//   function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.funcF = function(test) {
//         console.log(test)
//       }
//   }

//   const obj3 = new Person('Test', 30);
//   console.log(obj3)
//   obj3.funcF('888')

//   console.log(obj3)

//   obj3.funcF()


// const user = {
//     name: "John",
//     address: {
//         city: "New York",
//         zipcode: "10001"
//     }
// };

// // Без оператора опціонального доступу
// const city = user && user.address && user.address.city;

// // З оператором опціонального доступу
// const cityOptional = user?.address?.city;

// console.log(city); // "New York"
// console.log(cityOptional); // "New York"

// // А тепер спробуємо звернутися до неіснуючої властивості
// //console.log(user.phones.mobile); // Помилка : TypeError: Cannot read properties of undefined (reading 'mobile')
// console.log(user?.phones?.mobile); // undefined


// const user = {
// 	email: 'useremailrandom@emal.com',
// 	gender: null,
//     name: [1213123]
// };

// const userEmail = user.email ?? 'default@email.com';
// const userName = user.name ?? 100;
// const userGender = user.gender ?? 'Невідомо';

// console.log(userEmail); // "useremailrandom@emal.com"
// console.log(userName); // "Гість"
// console.log(userGender); // "Невідомо"


// const person = {
//     name: 'John',
//     age: 30,
//     city: 'New York'
//   };
  
//   for (let key in person) {
//     console.log(key + ': ' + person[key]);
//   }


// const person = {
//     name: "John",
//     age: 30,
//     isStudent: false
//   };
  
//   const keys = Object.entries(person);
//   console.log(keys); // ["name", "age", "isStudent"]

function test() {
  return function() {
       console.log('test')
  }
}

test()()