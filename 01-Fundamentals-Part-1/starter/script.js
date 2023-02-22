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
