'use strict';

// function calcAge(birthYear) {
//     const age = 2037 - birthYear;
//     function printAge() {
//         let output = `${firstName}, you are ${age}, born in ${birthYear}`;
//         console.log(output);

//         if (birthYear >= 1981 && birthYear <= 1996) {
//             var millenial = true;
//             const firstName = 'Steven';
//             const str = `Oh, you are a millenial, ${firstName}!`;
//             console.log(str);

//             function add(a, b) {
//                 return a + b;
//             }
//             output = 'New output';
//         }
//         console.log(millenial);
//         // console.log(add(2, 3));
//         console.log(output);
//     }
//     printAge();
//     return age;
// }

// const firstName = 'Bruno Matheus';
// calcAge(1991);

// console.log(me);
// console.log(job);
// console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1991;

// //Functions
// console.log(addDecl(2, 3));
// console.log(addExpre(2, 3));
// console.log(addArrow(2, 3));

// function addDecl(a, b) {
//     return a + b;
// }

// const addExpre = function (a, b) {
//     return a + b;
// }

// const addArrow = (a, b) => a + b;


// Exemple

// var numProducts = 10;
// if (!numProducts) deleteShoppingCart();

// var numProducts = 10;

// function deleteShoppingCart() {
//     console.log('All products deleted!');
// }

var x = 2;
let y = 3;
const z = 4;

console.log(x === window.x);  // true
console.log(y === window.y);  // false
console.log(z === window.z);  // false