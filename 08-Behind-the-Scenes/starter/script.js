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

// var x = 2;
// let y = 3;
// const z = 4;

// console.log(x === window.x);  // true
// console.log(y === window.y);  // false
// console.log(z === window.z);  // false

// console.log(this);

// const calcAge = function (birthYear) {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAge(1991);

// const calcAgeArrow = birthYear => {
//     console.log(2037 - birthYear);
//     console.log(this);
// };
// calcAgeArrow(1980);

// const jonas = {
//     year: 1991,
//     calcAge: function () {
//         console.log(this);
//         console.log(2037 - this.year);
//     }
// }
// jonas.calcAge();

// const matilda = {
//     year: 2017,
// };

// matilda.calcAge = jonas.calcAge;
// matilda.calcAge();

// var firstName = 'Matilda';

// const jonas = {
//     firstName: 'Jonas',
//     year: 1991,
//     calcAge: function () {
//         // console.log(this);
//         // console.log(2037 - this.year);

//         const isMillenial = () => {
//             // console.log(this.year >= 1981 && this.year <= 1996);
//             console.log(this);
//         }
//         isMillenial()
//     },


//     // greet: () => console.log(`Hey ${this.firstName}`),

// };

// // jonas.greet();
// jonas.calcAge();

// const addExpr = function (a, b) {
//     return a + b;
// }

// console.log(addExpr(2, 5, 6, 8));

// Primitive types
// let lastName = 'Williams';
// let oldLastName = lastName;
// lastName = 'Davis';

// console.log(lastName);
// console.log(oldLastName);

// // Reference types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
// }

// const marriedJessica = jessica;

// marriedJessica.lastName = 'Davis';

// console.log(jessica);
// console.log(marriedJessica);

// Copying types
// const jessica = {
//     firstName: 'Jessica',
//     lastName: 'Williams',
//     age: 27,
//     family: ['Alice', 'Bob'],
// }

// const jessicaCopy = Object.assign({}, jessica);

// jessicaCopy.lastName = 'Davis';

// jessicaCopy.family.push('Mary');
// jessicaCopy.family.push('John');

// console.log(jessica);
// console.log(jessicaCopy);

// THE END //