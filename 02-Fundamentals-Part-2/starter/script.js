'use strict';

// ###### 32. Using Strict Mode ######

// let hasDriversLicense = false;
// const passTest = true;

// if (passTest) hasDriversLicense = true;
// if (hasDriversLicense) console.log('I can drive! :D');

// const interface = 'Audio'; // Strict mode don't allow reserved words from JS
// const private = 543;

//  ###### 33. Functions ######

function logger() {
    console.log('My name is Bruno!');
}

// calling / running / invoking the function
logger();
logger();
logger();

function fruitProcessor(apples, oranges) {
    // console.log(apples,oranges);
    const juice = `Juice with ${apples} apples and ${oranges} oranges.`;
    return juice;
}

const appleJuice = fruitProcessor(5, 0); // To get the function return, it needs to storage the parameters in a varible
console.log(appleJuice); // Than call the varible to get the function return
console.log(fruitProcessor(5, 0)); // Or just use console.log without storage in a varible

const appleOrangeJuice = fruitProcessor(2, 4);
console.log(appleOrangeJuice);