'use strict';

// ###### 32. Using Strict Mode ######

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive! :D');

// const interface = 'Audio'; // Strict mode don't allow reserved words from JS
// const private = 543;

//  ###### 33. Functions ######

// function logger() {
//     console.log('My name is Bruno!');
// }

// // calling / running / invoking the function
// logger();
// logger();
// logger();

// function fruitProcessor(apples, oranges) {
//     // console.log(apples,oranges);
//     const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
//     return juice;
// }

// const appleJuice = fruitProcessor(5, 0); // To get the function return, it needs to storage the parameters in a varible
// console.log(appleJuice); // Than call the varible to get the function return
// console.log(fruitProcessor(5, 0)); // Or just use console.log without storage in a varible

// const appleOrangeJuice = fruitProcessor(2, 4);
// console.log(appleOrangeJuice);

// ###### 34. Function Declaration vs Expressions ######

// function calcAge(birthyear) {
//     return 2023 - birthyear;
// }
// const age1 = calcAge(Number(prompt('Type your birth year!')));
// console.log(`You are ${age1} year old 😊`);


// const calcAge2 = function(birthyear) {
//     return 2023 - birthyear;
// }
// const age2 = calcAge2(1991);
// console.log(age2);

// ###### 35. Arrow Functions ######

// const calcAge3 = birthYear => 2023 - birthYear;
// const age3 = calcAge3(Number(prompt('Type your birth year:')));
// console.log(age3);

// function calcAge4(birthYear) {
//     return 2023 - birthYear;
// }

// const age4 = calcAge4(Number(prompt('Type your birth year:')));
// console.log(age4)

// RETIREMENT FUNCTION - PERSONAL ######################################
// function retirementCalc(birthYear) {
//     const age = 2023 - birthYear;
//     const retirement = 65 - age;
//     return `You are ${age} years old and you have ${retirement} years left for your retirement.`;
// }
// const userRetirement = retirementCalc(Number(prompt('Type your birth year for the retirement calc:')))

// console.log(userRetirement);
// #######################################

// RETIREMENT WITH ARROW FUNCTION 

// const yearsToRetirement = (birthyear, firstname) => {
//     const age5 = 2023 - birthyear;
//     const retirement = 65 - age5;
//     return `Mr. ${firstname} there are ${retirement} years to your retirement!`
// }

// console.log(yearsToRetirement(1985, 'Bruno'));  

// ###### 36. Functions Calling others Functions ######

// function cutFruitPieces(fruit) {
//     return fruit * 3;
// }

// function fruitProcessor(apples, oranges) {
//     const applePieces = cutFruitPieces(apples);
//     const orangepieces = cutFruitPieces(oranges);
//     return `A juice with ${applePieces} pieces of apple and ${orangepieces} pieces of orange.`
// }

// const juice = fruitProcessor(2,3);
// console.log(juice);

// ###### 37. Reviewing Functions ######

// function calcAge(birthYear) {
//     return 2023 - birthYear;
// }

// function yearsUntilRetirement(birthYear, firstName) {
//     const age = calcAge(birthYear);
//     const retirement = 65 - age;

//     if (retirement > 0) {
//         return `${firstName} there are ${retirement} years left for your retirement.`;
//     } else {
//         const alreadyRetired = retirement * -1
//         return `${firstName}, you have been retired for ${alreadyRetired} years.`;
//     }
// }

// console.log(yearsUntilRetirement(1985, "Bruno"));
// console.log(yearsUntilRetirement(1950, "Gustavo"));

// ########## 38. CODING CHALLENGE #1 ##########

// function calcAverage(score1, score2, score3) {
//     const average = (score1 + score2 + score3) / 3;
//     return average;
// }

// const scoreDolphins = calcAverage(85, 54, 41);
// const scoregeKoalas = calcAverage(23, 34, 27);
// // console.log(averaDolphins, averageKoalas);

// function checkWinner(averaDolphins, averageKoalas) {
//     if (averaDolphins >= averageKoalas * 2 ) {
//         return `Dolphins wins!`;
//     } else if (averageKoalas >= averaDolphins * 2) {
//         return `Koalas wins!`;
//     } else {
//         return `No one wins!`
//     }
// }

// console.log(checkWinner(scoreDolphins, scoregeKoalas));

// ###### 39. Introduction to Arrays ######

// const friends = ['Michael', 'Steven', 'Peter', 'Bruno'];
// console.log(friends);

// const years = new Array(1985, 1991, 1984, 2008, 2020);
// console.log(years);

// console.log(friends[0]);
// console.log(friends[2]);

// console.log(friends.length);
// console.log(friends[friends.length - 1]);

// friends[2] = "Pedro";
// console.log(friends);
// // friends = ['Bob', 'Alice']  // That is not alowed

// const firstname = 'Bruno';
// const bruno = [firstname, 'Matheus', 2023-1985, 'Penal Police', friends];
// console.log(bruno);
// console.log(bruno.length);

// //  Exercise

// function calcAge(birthYear) {
//     return 2023 - birthYear;
// }

// const age1 = calcAge(years[0]);
// const age2 = calcAge(years[1]);
// const age3 = calcAge(years[years.length - 1]);

// console.log(age1, age2, age3);

// const ages = [calcAge(years[0]), calcAge(years[1]), calcAge(years[years.length - 1])];
// console.log(ages);

// ###### 40. Basic Arrays Operations (Methods) ######

// const friends = ['Michael', 'Steven', 'Peter'];

// // Add elements
// const newLength = friends.push('Jay'); // Push add element at the end
// console.log(friends);
// console.log(newLength); // Return the new length

// friends.unshift('John'); // Add element at the begining
// console.log(friends);

// // Remove elements
// friends.pop(); // Remove last
// console.log(friends);

// const popped = friends.pop();
// console.log(popped);// Return the element popped
// console.log(friends);

// friends.shift(); // Remove first
// console.log(friends);

// // Returning the index of a element

// console.log(friends.indexOf('Steven'));
// console.log(friends.indexOf('Bob')); // Returns -1 when the element does not exist

// // Show if an element exists in the array
// console.log(friends.includes('Steven')); // Returns true
// console.log(friends.includes('Bob')); // Returns false

// friends.push(23);
// console.log(friends.includes('23')); // Returns false because there is no conversion
// console.log(friends);

// // Testing includes method
// friends.unshift('Peter');
// if (friends.includes('Peter')) {
//     console.log('You have a friend named Peter.')
// } else {
//     console.log("You don't have a friend named Peter")
// }


// ############ 41. CODING CHALLENGE 02 ############

// function calcTip(bill) {
//     const tip = bill > 50 && bill < 300 ? bill * 0.15 : bill * 0.2;
//     return tip;
// }

// const bills = [125, 555, 44];
// const tips = [];

// tips.push(calcTip(bills[0]), calcTip(bills[1]), calcTip(bills[2]));
// console.log(tips);

// const total = [];
// total.push(bills[0] + tips[0], bills[1] + tips[1], bills[2] + tips[2]);
// console.log(total);

// ########## 42. Introduction to Objects ##########

// const brunoArray = [
//     'Bruno',
//     'Domingues',
//     2023 - 1985,
//     'Developer',
//     ['Michael', 'Peter', 'Steven']
// ];

// const bruno = {
//     firstName: 'Bruno',
//     lastName: 'Domingues',
//     age: 2023 - 1985,
//     job: 'Developer',
//     friends: ['Michael', 'Peter', 'Steven']
// };

// // ############ 43. Dot Vs Bracket Notation ############

// console.log(bruno);

// console.log(bruno.lastName);
// console.log(bruno['lastName']);

// const nameKey = 'Name';
// console.log(bruno['first' + nameKey]);
// console.log(bruno['last' + nameKey]);

// // const interestedIn = prompt("What do you want to know about Bruno? Choose between firstNmae, lastName, age, job or friends:");
// // console.log(bruno[interestedIn]);

// bruno.location = "Brazil";
// bruno.Instagram = '@brunomtheus';
// console.log(bruno);

// console.log(`${bruno.firstName} has ${bruno.friends.length} friends, and his best friend is ${bruno.friends[0]}.`);

// ############ 44. Objects Methods ############

// const bruno = {
//     firstName: 'Bruno',
//     lastName: 'Domingues',
//     birthYear: 1985,
//     job: 'Developer',
//     friends: ['Michael', 'Peter', 'Steven'],
//     hasDriverLicense: false,
//     calcAge: function () {
//         this.age = 2023 - this.birthYear;
//         return this.age;
//     },

//     // calcAge: function (birthYear) {
//     //     return 2023 - birthYear;
//     // }

//     // calcAge: function () {
//     //     return 2023 - this.birthYear;
//     // }

//     getSumary: function () {
//         return `${this.firstName} is a ${this.calcAge()}-year old ${this.job}, and he has ${this.hasDriverLicense ? 'a' : 'no'} driver license.`;
//     }
// };

// console.log(bruno.getSumary());
// console.log(bruno.calcAge());
// console.log(bruno['calcAge']());
// console.log(bruno.age);

// ############ 45. CODING CHALLENGE 3 ############

// const mark = {
//     fullName: 'Mark',
//     mass: 56,
//     height: 1.69,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi;
//     }
// }

// // console.log(mark.bmi);

// const john = {
//     fullName: 'John',
//     mass: 92,
//     height: 1.95,
//     calcBMI: function () {
//         this.bmi = this.mass / this.height ** 2;
//         return this.bmi
//     }
// }

// mark.calcBMI();
// john.calcBMI();

// if (mark.bmi > john.bmi) {
//     console.log(`${mark.fullName}'s BMI (${mark.bmi}) is higher than ${john.fullName}'s BMI (${john.bmi})`);
// } else {
//     console.log(`${john.fullName}'s BMI (${john.bmi}) is higher than ${mark.fullName}'s BMI (${mark.bmi})`);
// };

// ############ 46. Interation: The For Loop ############

// for (let rep = 1; rep <=10; rep++) {
//     console.log(`Lifting weights repetition ${rep} 🏋🏻‍♂️`);
// };

// ############ 47. Looping Arrays, Breaking and Continuing ############

// const bruno = [
//     'Bruno',
//     'Domingues',
//     2023 - 1985,
//     'Developer',
//     ['Michael', 'Peter', 'Steven'],
//     true
// ];

// const types = [];

// for (let i = 0; i < bruno.length; i++) {
//     // console.log(bruno[i]);

//     // types[i] = typeof bruno[i];
//     types.push(typeof bruno[i]);
// }

// console.log(types);

// const years = [1981, 1983, 1985, 1990];
// const ages = [];

// for (let i = 0; i < years.length; i++) {
//     ages.push(2023 - years[i]);
// }
// console.log(ages);

// // Continue and Break
// console.log('--- Only Strings ---');

// for (let i = 0; i < bruno.length; i++) {
//     if (typeof bruno[i] !== 'string') continue;  // Continue means to jump
//     console.log(bruno[i], typeof bruno[i]);
// }

// console.log('--- Break on Number ---');

// for (let i = 0; i < bruno.length; i++) {
//     if (typeof bruno[i] === 'number') break;
//     console.log(bruno[i], typeof bruno[i]);
// }

// ############ 48. Looping Backwards and Loops in Loops ############

