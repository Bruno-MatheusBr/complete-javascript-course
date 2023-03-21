'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],

  openingHours: {
    thu: {
      open: 12,
      close: 22,
    },
    fri: {
      open: 11,
      close: 23,
    },
    sat: {
      open: 0, // Open 24 hours
      close: 24,
    },
  },

  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  }
};
/*
// /////////// 103. DESTRUCTURING ARRAYS (AND OBJECTS AND FUNCTIONS) /////////////
console.log('------ Destructuring From Functions ------');
const [pratoDeEntrada, pratoPrincipal] = restaurant.order(0, 2);  // Just calling the function, it would return an Array with the two elements
console.log(pratoDeEntrada, pratoPrincipal);  // Using the Destructuring Assignment it returns the elements in separate variables


console.log('----- Destructuring Arrays -----');
const arr = [2, 3, 4];
// Destructuring using the hard way
const a = arr[0];
const b = arr[1];
const c = arr[2];

// Destructuring using Destructuring Assignment
const [x, y, z] = arr;  // Despite the squared braces, it is not an array. It is individual variables

console.log(a, b, c);
console.log(x, y, z);
console.log(arr);  // Despite the array was destructured, it was not affected

console.log('------ Destructuring Objects ------');
const [first, second] = restaurant.categories;
console.log(second, first);

let [main, , secondary] = restaurant.categories;  // Skipping elements using  space between comas , ,
console.log(main, secondary);

console.log('------ Inverting Elements Using Destructuring ------');
[main, secondary] = [secondary, main];
console.log(main, secondary);

console.log('------ Destructuring Nested Arrays ------');
const nested = [2, 4, [5, 6]];
//  The variable 'j' will return the array [5, 6]
const [i, , j] = nested;  // Jumped the '4'
console.log(i, j);
// The method below will not return an array. It will return each variable individualy
const [l, , [m, n]] = nested;  // Jumped the '4'
console.log(l, m, n);

console.log('------ Setting Default Values ------');
// Setting default values in case the number of variables be bigger than the intens in an array

// Without default values
const [o, p, q] = [8, 9];  // 'q' will return 'undefined'
console.log(o, p, q);
// Winth default values
const [r = 1, s = 1, t = 1] = [8, 9];  // 't' will return the default value '1'
console.log(r, s, t);
// /////////////////// END OF THE CLASS 104. DESTRUCTURING ARRAYS /////////////////
*/
