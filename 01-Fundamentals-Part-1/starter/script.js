/*
let js = "amazing";
console.log(40 + 8 + 23 - 10);

console.log("Jonas");
console.log(23);

let firstName = "Matilda";

console.log(firstName);
console.log(firstName);
console.log(firstName);

// Varible names conventions
let jonas_matilda = "JM";
let $function = 27;

let person = "jonas";
let PI = 3.1415;  // Use upper case for constants that never changes

let myFirstJob = "Coder";
let myCurrentJob = "Teacher";

let job1 = "Programmer";  //Do not use varibles name like that
let job2 = "Teacher";

console.log(myFirstJob);


let javaScriptIsFun = true;
console.log(javaScriptIsFun);

console.log(typeof true);
console.log(typeof javaScriptIsFun);
console.log(typeof 23);
console.log(typeof 'Jonas');

let year;

console.log(year);
console.log(typeof year);

year = 1991;
console.log(typeof year);

console.log(typeof null);

let age = 30;
age = 31;

const birthYear = 1991;
// birthYear = 1990  // It will return an error - redeclaring a const varible
// const job; // Const cannot be set undefined. It will return an error

var job = 'programmer';
job = 'teacher';  // Var works some way like Let. It can be redeclared

lastName = 'Domingues'; // Declaring a varible is not mandatory, but never do that.
console.log(lastName);
console.log(typeof lastName);

// ##### 14. BASIC OPERATORS #####

// ***** Math operators *****
const now = 2037;
const ageJonas = now - 1991;
const ageSarah = now - 2020;
console.log(ageJonas, ageSarah);

console.log(ageJonas * 2, ageJonas / 2, 2 ** 3);

const firstName = 'Bruno';
const lastName = 'Domingues';
console.log(firstName + ' ' + lastName);

// ***** assignment operators *****
let x = 10 + 5;
x += 10;
x *= 4;
x++;
x--;
x--;
console.log(x);

// ***** Comparison operators *****
console.log(ageJonas > ageSarah);  // Return true or false
console.log(ageSarah >= 18);
*/

// ########## Coding Challenge #1 ##########
/*
// Data 01
const markMass = 78;
const markHeight = 1.69;
const johnMass = 92;
const johnHeight = 1.95;

const markBMI = markMass / markHeight ** 2;
const johnBMI = johnMass / johnHeight ** 2;

const markHigherBMI = markBMI > johnBMI;

console.log(markBMI);
console.log(johnBMI);
console.log(markHigherBMI);

// Data 02
const markMass2 = 95;
const markHeight2 = 1.88;
const johnMass2 = 85;
const johnHeight2 = 1.76;

const markBMI2 = markMass2 / markHeight2 ** 2;
const johnBMI2 = johnMass2 / johnHeight2 ** 2;

const markHigherBMI2 = markBMI2 > johnBMI2;

console.log(markBMI2);
console.log(johnBMI2);
console.log(markHigherBMI2);
*/
//###############################################

// ##### 17. String Template Literals #####
/*
const firstName = 'Jonas';
const job = 'teacher';
const birthYear = 1991;
const year = 2037;

const jonasNew = `I'm ${firstName}, a ${year - birthYear} years old ${job}!`;
console.log(jonasNew);

// Strings with multple lines
// old way
console.log('String with \n\
multiple \n\
lines');
// new way
console.log(`String with
multiple
line`);

// ##### 18. Taking Decisions #####

const age = 15;

if (age >= 18) {
    console.log('Sarah can start driving license 🚗')
} else {
    const yearsLeft = 18 - age;
    console.log(`Sarah is too young. Wait another ${yearsLeft} years 😉`);
}

const birthYear = 2002;
let century;

if (birthYear <= 2000) {
    century = 20;
} else {
    century = 21;
}
console.log(century);
*/

// ########## CODING CHALLENGE #2 ##########

// const markMass = 78;
// const markHeight = 1.69;
// const johnMass = 92;
// const johnHeight = 1.95;

// const markMass = 95;
// const markHeight = 1.88;
// const johnMass = 85;
// const johnHeight = 1.76;

// const markBMI = markMass / markHeight ** 2;
// const johnBMI = johnMass / johnHeight ** 2;

// if (markBMI > johnBMI) {
//     console.log(`Mark's BMI (${markBMI}) is higher than John's (${johnBMI})!`);
// } else {
//     console.log(`John's BMI (${johnBMI}) is higher than Mark's (${markBMI})!`);
// }
// ###############################################################################
/*
// ##### 20. Type Conversion and Coersion #####

// Type conversion
const inputYear = '1991';
console.log(Number(inputYear), inputYear);  //Need to start with a capital letter
console.log(inputYear + 18);
console.log(Number(inputYear) + 18);

console.log(Number('Jonas'));  //Returns NaN
console.log(typeof NaN);  // NaN is a kind of number, but an invalid one

console.log(String(23), 23);

// Type coercion
console.log('I am ' + 23 + ' years old');  // Plus sign changes numbers into a string
console.log('23' - '10' - 3);
console.log('23' + '10' + 3);
console.log('23' * '2');
console.log('23' / '2');

let n = '1' + 1;
n = n - 1;
console.log(n);
*/

// ##### 21. Truthy and Falsy Values

// console.log(Boolean(0));
// console.log(Boolean(undefined));
// console.log(Boolean('Jonas'));
// console.log(Boolean({}));
// console.log(Boolean(''));

// // Testing

// const money = 1  // Zero is falsy
// if (money) {
//     console.log('Do not spend it all ;)');
// } else {
//     console.log('You nedd to get a job!');
// }

// let heigt;
// if (heigt) {
//     console.log('YAY! Height is defined!');
// } else {
//     console.log('Height is not defined');
// }

// ##### 22. Equality operators: == vs === #####

// const age = '18';
// if (age === 18) console.log('You just became an adult :D (Strict)');
// if (age == 18) console.log('You just became an adult :D (Loose)');

// const favourite = prompt('What is your favourite number?');
// console.log(favourite);

// if (favourite != 23) {
//     console.log('Seu número não é 23!');
// } else {
//     console.log('Seu número é 23!');
// }

// ##### 23. Boolean Logic #####

// Nothing to do here.

// ##### 24. Logical Operators #####

