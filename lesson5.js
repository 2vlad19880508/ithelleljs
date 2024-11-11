// let a = 1;
// console.log(typeof a);

// let y = 5;
// let x = 5;
// let c = 100;
// let b = 1000;

// // if (x > 5 && c === 100) {
// //     y = 'string'
// //     console.log(typeof y);
// // } else {
// //     console.log(typeof y);
// // }


// if (x > 5 && c === 100) {
//     console.log(`y = ${y}`)
//   } else if (b === 1000) {
//     console.log(`b = ${b}`)
//   } else {
//     console.log(`x = ${x}`)
//   }


// let a = 5;
// let message = a >= 10 ? true : false;
// console.log(message);

// if (a >= 10) {
//         console.log(`a = ${a}`);
//     } else {
//         console.log(`a != 10`);
//     }
// const age = 20;

// switch (true) {
//   case age > 18:
//     console.log('Особа повнолітня');
//     break;
//   case age > 14:
//     console.log('Особа неповнолітня');
//     break;
//   default:
//    console.log('Особа малолітня');
// }


// if (age > 18) {
//   console.log('Особа повнолітня');
// } else if (age > 14) {
//   console.log('Особа неповнолітня');
// } else {
//   console.log('Особа малолітня');
// }

// console.log('for'); 

// for (let i = 0; i < 3; ++i) {
//     console.log(i)
//   }

// console.log('i++'); 
//   let a = 0;
//   for (let i = 0; i < 3; ++i) {
//     a = i++;
//     console.log(a);
//   }

//   console.log('++i'); 
//   for (let i = 0; i < 3; i++) {
//     a = ++i;
//     console.log(a);
//   }

// console.log('while'); 
// let i = 0;
// while (i < 3) {
//     i++;
//     console.log(i); // Виведе числа 0, 1, 2
// }

// console.log('do while'); 
// let count = 0;
// do {
//     console.log(count); // Виведе числа 0, 1, 2
//     count++;
// } while (count < 3);


// function divideNumbers(a, b) {
//     if (b === 0) {
//       throw new Error("Ділення на нуль недопустиме!");
//     }
//     return a / b;
//   }
  
//   try {
//     const result = divideNumbers(10, 10);
//     console.log(result);  // Цей рядок не буде виконано через throw вище
//   } catch (error) {
//     console.error("Сталася помилка:", error.message);
//   }

  let arr = [10, 11, 12];
  // for(let value of arr) {
  //   if (value === 11) {
  //     value++;
  //     console.log(value);
  //     arr.push(value);
  //   }
  // }
  // let value = 100;
  // arr.push(value);
  // console.log(arr)

  arr.forEach((value, index) => {
    arr[index] = 0;
    console.log(value);
  })
  console.log(arr)
  // console.log(arr);
  // let obj = {
  //   a: 10,
  //   b: 11,
  //   c: 12
  // }

  // for(let key in obj) {
  //   console.log(key)
  //   console.log(obj[key])
  // }

