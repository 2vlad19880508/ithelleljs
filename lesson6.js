// function newFunction(number) {
//     let a = 10;
//     let b = 10;
//     let c = a + b;
//     number++;
//     number++;
//     console.log(number);
// }
  
//   console.log(newFunction(2));

//   newFunction(20);


// let pow = function (number) {
//     number = number * 10;
//     return number;
//   }
  
// //   pow(2);
// //   pow(20);
//   let pow1
//   console.log(pow1 = pow(2));
//   let pow2 = pow1 

//   console.log(pow2)

// const pow = (number, val) => {
//     return number + val
// }

// console.log(pow(2, 3))
// function sum(numbers, test) {
//     console.log('arg 2')
// 	return numbers + test;
// }


// console.log(sum(1, 2))
// const pow = (...numbers) => {
//     let sum = 0;  

// 	for (let num of numbers){
// 		sum += num;
// 	}

// 	return sum;
// }

// console.log(pow(1,2,3))

//    let sum = 0; 
//   function f(a, b, ...theArgs) { // помилки не буде
//         let sum = 0;  
//         let c = a+b;

//         for (let num of theArgs){
//             sum += num;
//         }

//         let result = (sum-c)*b
//         return result;
//   }


//   console.log(f(1,2,10,10,10))
  
//   function myFun(a, b, ...manyMoreArgs) {
//     console.log("a - ", a);
//     console.log("b - ", b);
//     console.log("manyMoreArgs - ", manyMoreArgs);
//   }
  
//   myFun("one", "two", "three", "four", "five", "six");

// let userName = 'Anna';

// function showMessage() {
//     userName = 'Test'
// 	console.log(`Hello ${userName}`); // використовується зовнішня змінна  - userName
// }

// showMessage(); 


// console.log(userName);

let a = "test";
console.log(a.length)

