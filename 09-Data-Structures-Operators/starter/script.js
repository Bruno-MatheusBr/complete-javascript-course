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
  // Destructuring Arrays Real Wolrd Exemples
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  // Destructuring Objects Real World Exemple
  orderDelivery: function ({ address, time, starterIndex, mainIndex }) {
    console.log(`Order: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Address ${address} at ${time}.`);
  },
  // Using Spread Operator in Real World Exemple
  orderPasta: function ([ing1, ing2, ing3]) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

};

const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

/*
// /////////////// 105. THE SPREAD OPERATOR ///////////////

// The Spread Operator works with all iterables. (iterables = arrays, strings, maps, sets. NOT objects)
console.log('|====== Real World Exemple Using Spread Operator ======|');

// const ingredients = [prompt('ingredient 1'), prompt('ingredient 2'), prompt('ingredient 3')];
// console.log(ingredients); // Just to remember that the prompts will be stored in an array

// restaurant.orderPasta([...ingredients]); // The magic happens here

console.log('|====== Spread Operator with Objects ======|');

const newRestaurant = { foundedIn: 1998, ...restaurant, founder: 'Giuseppe' }; // Copying and adding new elements at the same time
console.log(newRestaurant);

const restaurantCopy = { ...restaurant }; // Just making a copy
console.log(restaurantCopy);
restaurantCopy.name = "Ristorante Rome"; // Making changes in restaurantCopy
console.log(restaurant.name, restaurantCopy.name);

console.log('|====== Changing the Letters of a String into an Array');
const str = 'Jonas';
const letters = [...str];
console.log(letters);

console.log('|====== Merging Two Arrays Using Spread Operator ======|');
const arr = [7, 8, 9];
const newArray = [1, 2, ...arr];
console.log(newArray);  // Will return an Array
console.log(...newArray); // Will return the elements individually
// Second possibility
const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];
console.log(menu);

console.log('|====== Adding Elements in an Array inside an Object ======|');
// That will not affect the original object.
const newMenu = [...restaurant.mainMenu, 'Gnocchi'];
console.log(newMenu);

console.log('|====== Copying an Array ======|');
const mainMenuCopy = [...restaurant.mainMenu];
console.log(mainMenuCopy);
// /////////////// END OF THE CLASS 105. THE SPREAD OPERATOR ///////////////
*/

/*
// /////////////// 104. DESTRUCTURING OBJECTS ///////////////
console.log('|------ Real World Exemple ------|');

restaurant.orderDelivery({
  time: '20:30',
  address: 'Via del Sole, 21',
  starterIndex: 1,
  mainIndex: 2,
});

console.log('|------ Destructuring Objects ------|');

console.log('*** Keeping the original names of the properties ***');
const { name, categories, openingHours } = restaurant;  // Will return variables with their original values (str, arrays, objects, etc...)
console.log(categories, name, openingHours);

console.log('*** Changing the original names of the properties ***');
const { name: restaurantName, openingHours: opening, categories: tags } = restaurant;
console.log(tags, restaurantName, opening);

console.log('|------ Setting Default Values ------|');
// When some element is not in an object, it will return 'undefined'
// Setting defaults values avoid that
const { country = [], name: newName = [], starterMenu = [] } = restaurant;  // Was assigned a new name to avoid conflit with the variable "name" above
console.log(newName, starterMenu);  // Country will not return 'undefined'

console.log('|------ Mutating Variables While Desxtructuring objects ------|');

let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };

// Making the Destructuring
({ a, b } = obj);  // It has to use parenthesis to make it to work
console.log(a, b); // Now a=23 and b=7

console.log('|------ Nested Objects ------|');

const { fri: { open, close } } = openingHours;  // Using original names as variables
console.log(open, close);

const { fri: { open: o, close: c } } = openingHours;  // Assigning new names as variables
console.log(o, c);
// /////////////// END OF THE CLASS 104. DESTRUCTURING OBJECTS ///////////////
*/

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

console.log('------ Destructuring Arrays in Objects ------');
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
