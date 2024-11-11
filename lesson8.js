// const fruits = ['apple', 'banana', 'orange'];
// const numbers = new Array(1, 2, 3, 4, 5);


// // const numbers = [1, 2, 3, 4, 5];
// for (let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]); // Виведе всі числа з масиву
// }


// const colors = ['red', 'green', 'blue', 'yellow'];

// for (const value of colors) {
//     console.log(value);
// }


// const numbers = [1, 2, 3, 4, 5];
// const doubledNumbers = [];

// for (let i = 0; i < numbers.length; i++) {
//   doubledNumbers.push(numbers[i] * 2);
// }

// console.log(doubledNumbers); // [2, 4, 6, 8, 10]



// function doubleNumbers(nums) {
// 	return nums.map((num) => num * 2);
// }

// const doubledNumbers = doubleNumbers(numbers);
// // console.log(doubledNumbers); // [2, 4, 6, 8, 10]

// const sentence = "Це речення має кілька слів";
// console.log(sentence[0]);
// const words = sentence.split(" ");
// console.log(words[0]); // ["Це", "речення", "має", "кілька", "слів"]

// const fruits = ["яблуко", "банан", "полуниця"];
// const fruitString = fruits.join(", ");
// console.log(typeof fruitString); // "яблуко, банан, полуниця"

// const numbers = [10, 20, 30, 40, 50];
// const index = numbers.indexOf(40);
// console.log(index); // 2

// const colors = ["червоний", "зелений", "синій"];
// const hasGreen = colors.includes("зелений");
// console.log(hasGreen); // true

// const stack = [1, 2];
// stack.push(3, 4, 5, 6);
// console.log(stack); // [1, 2, 3, 4]

// const stack = [1, 2, 3, 4];
// const poppedValue = stack.pop();
// console.log(poppedValue); // 4
// console.log(stack); // [1, 2, 3]


// const queue = ["A", "B", "C"];
// const shiftedValue = queue.shift();
// console.log(shiftedValue); // "A"
// console.log(queue); // ["B", "C"]


// const queue = ["B", "C"];
// queue.unshift("A");
// // console.log(queue); // ["A", "B", "C"]

// const colors = ["червоний", "зелений", "синій"];
// colors.splice(2, 1, "жовтий", "оранжевий");
// // console.log(colors); // ["червоний", "жовтий", "оранжевий", "зелений", "синій"]


// const array1 = [1, 2];
// const array2 = [3, 4];
// const concatenatedArray = array2.concat(array1);
// console.log(concatenatedArray); // [1, 2, 3, 4]

// const numbers = [1, 2, 3, 4, 5];
// numbers.forEach((number) => {
//   console.log(number * 2);
// });

// console.log(numbers)

// const numbers = [1, 2, 3, 4, 5];
// const evenNumbers = numbers.filter((number) => number % 2 === 0);

// console.log(evenNumbers);

// const numbers2 = [1, 2, 3, 4, 5];
// const doubledNumbers = numbers2.map((number) => number * 2);

// console.log(numbers2)
// console.log(doubledNumbers)


// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumber = numbers.find((number) => number % 2 === 0);

// console.log(firstEvenNumber)

// const numbers = [1, 2, 3, 4, 5];
// const firstEvenNumberIndex = numbers.findIndex((number) => number % 2 === 0);


// console.log(firstEvenNumberIndex)


// const nestedArray = [[1, 2], [3, 4, [3, 5]], [5, 6]];
// const flatArray = nestedArray.flat(); // [1, 2, 3, 4, 5, 6]

// console.log(flatArray.flat())


// const numbers = [1, 2, 3];
// const doubledAndFlattened = numbers.flatMap((number) => [number * 2, number * 3]); // [2, 3, 4, 6, 6, 9]


// console.log(doubledAndFlattened)
// let a = {
//     test: 2
// }
// console.log(a.test)


// (function() {
//     // Оголошення та використання анонімної функції
// })();

// const add = function(x, y) {
//     return x + y;
// };



// (function() {
//     // Оголошення та виклик IIFE
// })();
// (function() {
//     const message = "Це локальна змінна";
//     console.log(message);
// })();


// import { chromium } from '@playwright/test';

// (async () => {
//     // Make sure to run headed.
//     const browser = await chromium.launch({ headless: false });

//     // Setup context however you like.
//     const context = await browser.newContext();
//     await context.route('**/*', route => route.continue());

//     // Pause the page, and start recording manually.
//     const page = await context.newPage();
//     await page.pause();
// })();

// function callback1(a) {
//     const test = 1;
//     console.log(a)
// }

// let b = 3;

// function testCallBack(callback) {
//     const test = 2;
//     return callback(test);
// }


// testCallBack(callback1)


// const testF = () => {
//     console.log(arguments);
// }

// function testF2() {
//     console.log("Function2 = " + JSON.stringify(arguments));
// }

// const testF5 = new testF2();

// testF2();
// // testF2();

// const newF = (a, b) => a + b

// const newFF = new newF();
   

// const newF2 = (a, b) => {
//     if (a > b) {
//         a + b
//     } else {

//     }
// }





// new(10, 20)

// function handleNum (number, callbackForEven, callbackForOdd){
//     if (isNaN(number)) {
//       console.log(`It is not a number. Enter a number, please.`);
//       return;
//     }  
//     if (!Number.isInteger(number)) {
//       console.log(`It is not an integer. Enter an integer, please.`);
//       return;
//     }
//     if(number%2 === 0){
//       callbackForEven(number);
//       return;
//     }
//     if(number%2 !== 0){
//       callbackForOdd(number);
//       return;
//     }
//   }



// function f4() {
//     console.log(a);
// }

// function closeF() {
//     let a = 1;

//    function secondF() {
//         console.log(a);
//     }

//     return secondF
// } 

// const test = closeF();
// test();


// function add(a) {
//     return function(b) {
//         return a + b;
//     }
// }

// const test = add(5);
// const test2 = add(100);
// console.log(test2(2));
// console.log(test(10));
// console.log(add(5)(10));



// const test = (a, b) => (x) => a + b + x;

// const test2 = test(1,2);

// console.log(test2(3))


// const arr = "Test";

// const iterator = arr[Symbol.iterator]();

// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());
// console.log(iterator.next());


function* test() {
    let a = 1;
    while (true) {
        yield a++;
    }
}


const testF = test();
console.log(testF.next());
console.log(testF.next());
console.log(testF.next());
console.log(testF.next());

console.log(testF.next());
console.log(testF.next());

console.log(testF.next());
console.log(testF.next());

console.log(testF.next());
console.log(testF.next());


