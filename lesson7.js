// const isOdd = (n) => {
//     return n % 2 !== 0;
//   }

//   let printMsg = (shouldBeFunction, num) => {
//     const isNumOdd = shouldBeFunction(num);
//     console.log(`The number ${num} is an odd number: ${isNumOdd}.`)
//   }

//   // Pass in isEven as the callback function
//   printMsg(isOdd, 5);
//   // Prints: The number 4 is an even number: True.

// // let num = 5;
// //   isOdd(5);
// //   isOdd(num);


// function fetchData(url, callback) {
//     fetch(url)
//       .then(response => response.json())
//       .then(data => callback(data))
//       .catch(error => console.log(error));
//   }

//   fetchData('https://jsonplaceholder.typicode.com/todos/1', function(data) {
//     console.log(data)
// });
// let name = '22222'
// const greet = function() {
//     console.log(`Hello, ${this.name}!`);
//   }


// const person = {
//     name: 'Test',
//     secondName : 'Test',
//     greet: function() {
//       console.log(`Hello, ${this.name}!`);
//     }
//   };

//   person.greet(); // Виведе "Hello, Alice!"


//   class Test {
//     method1(){

//     }
//   }

// function Person(name) {
//     this.name = name;
//     this.secondName = 'TEst2';
//     this.greet = function() {
//       console.log(`Hello, ${this.name}!`);
//     };
//   }

//   const alice = new Person('Alice');
//   console.log(alice.secondName);
//   console.log(alice.name);
//   alice.greet(); // Виведе "Hello, Alice!"

//   const test = new Person('Second');
//   console.log(test.secondName)


const numbers = [1, 2, 3, 4, 5];

// const squaredNumbers = numbers.map(num => console.log(num * num));

// numbers.forEach(num => console.log(num));

// const evenNumbers = numbers.filter(num => console.log(num % 2 === 0));

// (function() {
//     console.log('test');
// })((function() {
//     console.log('222');
// }));

// const test = function(x, y) {
//     return console.log(x + y);
// };

// (10, 10);


// function greet() {
//     console.log(`Hello, ${this.name}!`);
//   }

//   const person = { name: 'Alice' };
//   const person2 = { name: 'Alice' };
//   greet.call(person); // Виведе: Hello, Alice!
//   greet.call(person2); // Виведе: Hello, Alice!


// function counter() {
//     let count = 0;

//     return function() {
//         return ++count;
//     };
// }

// let increment = counter();
// console.log(increment()); // Виведе 1
// console.log(increment()); // Виведе 2
// console.log(increment()); // Виведе 2


// // function multiplier(factor) {
// //     return function(x) {
// //         return x * factor;
// //     };
// // }

// // let double = multiplier(2);
// // console.log(double(5)); // Виведе 10
// // console.log(double(5)); // Виведе 10



// function factorial(n) {
//     // Базовий випадок: факторіал 0 або 1 = 1
//     if (n === 0 || n === 1) {
//       return 1;
//     } else {
//       // Рекурсивний випадок: факторіал числа n = n * факторіал (n - 1)
//       console.log(n)
//       return n * factorial(n - 1);
//     }
//   }
  
//   // Приклад виклику рекурсивної функції для обчислення факторіалу 5
//   const result = factorial(5);
//   console.log(result); // Виведе 120



// const add = (a, b) => a + (b + 7);


// const add2 = a => {
// 	return b => {
//         b = b + 7
// 		return a + b;
// 	};
// };
// console.log(add(3, 4));
// console.log(add2(3)(4));

// const range = (a, b) => a > b ? [] : [a, ...range(a+1, b)];

// console.log(range(1, 2));


function iterator (array) {
    let nextIndex = 0
    return {
      next: function () {
        if (nextIndex < array.length) {
          return {
            value: array[nextIndex++],
            done: false
          }
        }
        return {
          value: undefined,
          done: true
        }
      }
    }
  }
  
  const array = ['banana', 'apple', 'orange', 'kiwi', 'cherry']
  const arrayIterator = iterator(array)
  
  console.log(arrayIterator.next()) // { value: 'banana', done: false }
  console.log(arrayIterator.next()) // { value: 'apple', done: false }
  console.log(arrayIterator.next()) // { value: 'orange', done: false }
  console.log(arrayIterator.next()) // { value: 'kiwi', done: false }
  console.log(arrayIterator.next()) // { value: 'cherry', done: false }
  console.log(arrayIterator.next()) // { value: undefined, done: true }
  console.log(arrayIterator.next()) // { value: undefined, done: true }