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

