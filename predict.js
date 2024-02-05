//I worked with Austin, Billiant, Hakeem, Johnny
//-----------out put 1--------------------
// const cars = ['Tesla', 'Mercedes', 'Honda']
// const [ randomCar ] = cars
// const [ ,otherRandomCar ] = cars
// const [ , , thirdCar ] = cars //logs Honda the third index
// //Predict the output
// console.log(randomCar)// Tesla
// console.log(otherRandomCar)//Mercedes
// console.log(thirdCar)//logs Honda the third index


//--------out put 2----------------
// const employee = {
//     employeeName: 'Elon',
//     age: 47,
//     company: 'Tesla'
// }
// const { employeeName: otherName, employeeName } = employee;
// //Predict the output
// console.log(otherName); //Elon
// console.log(employeeName); //error


// //------------output put 3-----------------
// const person = {
//     name: 'Phil Smith',
//     age: 47,
//     height: '6 feet'
// }
// const password = '12345';
// const { password: hashedPassword } = person;  
// //Predict the output
// console.log(password);// 12345
// console.log(hashedPassword);// undefined



// //-------------out put 4-------------------
// const numbers = [8, 2, 3, 5, 6, 1, 67, 12, 2];
// const [,first] = numbers;
// const [,,,second] = numbers;
// const [,,,,,,,,third] = numbers;
// //Predict the output
// console.log(first === second);//false
// console.log(first === third);//true


// //----------------out put 5-------------
// const lastTest = {
//     key: 'value',
//     secondKey: [1, 5, 1, 8, 3, 3]
// }
// const { key } = lastTest;
// const { secondKey } = lastTest;
// const [ ,willThisWork] = secondKey;
// //Predict the output
// console.log(key); //value
// console.log(secondKey);//1,5,1,8,3,3
// console.log(secondKey[0]);//1
// console.log(willThisWork);//5 


//---------------output 6-------------
// var beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (var index = 0; index < names.length; index++) {
//       var name = names[index];
//       console.log(name + ' was found at index ' + index);//paul was found at index 0 and so on through the array
//     }
//     console.log('name and index after loop is ' + name + ':' + index);//name and index after loop is Ringo : 4
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);//nothing

//---------------output 7-------------
// function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//       let name = names[index];
//       console.log(name + ' was found at index ' + index);//error
//     }
//     console.log('name and index after loop is ' + name + ':' + index);//error
//   }     
  //no fuction call

//---------------output 8------------------------

// const beatles = ['Paul', 'George', 'John', 'Ringo'];
// function printNames(names) {
//   function actuallyPrintingNames() {
//     for (let index = 0; index < names.length; index++) {
//       const name = names[index];
//       console.log(name + ' was found at index ' + index);//Paul was found at index 0 and so on through the array
//     }
//   }
//   actuallyPrintingNames();
// }
// printNames(beatles);

//---------------output 9------------------------
// const planet = {
// 	name:"Jupiter",
// 	milesFromSun: 49849,
// 	mass: 393983,
//             composition: ["gas", "liquid", "oxygen"]
// }
// const planetCopy = {...planet}
// console.log(planet.composition[0] === planetCopy.composition[0]) //true
// console.log(planet === planetCopy)//false

