// const user = {
//     name: 'Alice',
//     age: 30,
//     location: 'Kyiv'
// };

// let { name = 'Test', age, location} = user;


// console.log(name);


// const numbers = [10, 20, 30];

// const [first] = numbers;
// const elemet3 = numbers[2]

// console.log(first)
// console.log(elemet3)


// const arr = [1, 2, ...[3, 4, ...[10, 20, ...[88]]]]; // [1, 2, 3, 4]

// console.log(arr)

// const obj = { a: 1, ...{ b: 2, ...{c: 2} } }; // { a: 1, b: 2 }

// console.log(obj)

// function add(...numbers) {}


// const originalObject = { name: 'John', age: 30 };


// const newObj = originalObject
// const copiedObject = { ...originalObject };

// originalObject.test = 'test1'

// console.log(originalObject)
// console.log(newObj)
// console.log(copiedObject)
// let arr = [1, 2]

// const myMap = new Map();
// myMap.set(true, 'value1');

// console.log(myMap.get(true))


// class NewClass {
//     constructor(name = 'Test') {
//         this._name = name
//     }
//     _newF() {
//         console.log('222')
//     }
// }

// const test = new NewClass('111')
// test._newF()

//test.newF();


// class Animal {
//     makeSound() {
      
//     }
//   }
  
//   class Dog extends Animal {
//     makeSound() {
//       console.log("Woof woof!");
//     }
//   }
  
//   class Cat extends Animal {
//     makeSound() {
//       console.log("Meow!");
//     }
//   }
  
//   function animalSound(animal) {
//     animal.makeSound();
//   }
  
//   const dog = new Dog();
//   const cat = new Cat();
  
//   animalSound(dog); // Woof woof!
//   animalSound(cat); // Meow!




class Car {
    constructor(make, model) {
      this.make = make;
      this.model = model;
    }
    drive() {
      console.log(`${this.make} ${this.model} is driving.`);
    }
  }
  
  const myCar = new Car("Toyota", "Camry");
  myCar.drive(); // Toyota Camry is driving.


