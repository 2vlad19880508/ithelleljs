// class NewClass {
//     #add(a, b) {
//         return a + b
//     }
//     start(){
//         return this.#add(2, 3)
//     }
// }



// //console.log(NewClass.add(5, 3));

// // class SecondClass extends NewClass {

// // }

// const therdClass = new NewClass();

// console.log(therdClass.start(5, 3))


// class Book {
//     constructor(title, author, year){
//         this.title = title;
//         this.author = author;
//         this.year = year;
//     }
    
//     get yearTest(){
//         return this.year;
//     }

//     set yearTest(year) {
//         if (typeof year === 'number' && year > 0) {
//             this.year = year
//         } else {
//             console.log(`Wrong ${year}`)
//         }
//     }
// }


// const newBook = new Book('Test Book', 'Author', 1990)

// newBook.yearTest = 1999

// console.log(newBook.yearTest)

// console.log('Start')


//  async function getData() {
//     console.log('Start')
//     setTimeout(() => console.log('Wait 1'), 2000)
//     setTimeout(() => console.log('Wait 2'), 1000)
//     console.log('end')
//   }


  
//   getData();


// fetchData()
// console.log('Wait')
// console.log('end')


// // Callback
// asyncFunction(a, b, result => {
// 	console.log(result);
// });

// // Promise
// asyncFunction(a, b)
// 	.then(result => {
// 		console.log(result);
// 	});


new Promise(function(resolve, reject) { 
        fetch('https://swapi.dev/api/people/1/')
        .then(response => {
            if (response.status == 200) {
                resolve('success'); // success
            } else {
                reject('failure'); // failure
            }
        })
        .catch(console.error)
  })
  .then(console.log)
  .catch(console.error)

var tet = 111




async function fetchData() {
    try {
        const response = await fetch('https://swapi.dev/api/peopl9e/1/')
        if (response.status == 200) {
            console.log('success')
        } else {
            console.log('fail'+response.status)
        }
    } catch (error) {
        console.log('error')
    }
  }

  fetchData()


//   function fetchData2() {
//     return fetch('https://swapi.dev/api/people/1/')
//     .then(response => console.log(response.status))
//   }

//   fetchData2()
