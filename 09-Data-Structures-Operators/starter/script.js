'use strict';

// Data needed for a later exercise
const flights =
  '_Delayed_Departure;fao93766109;txl2133758440;11:25+_Arrival;bru0943384722;fao93766109;11:45+_Delayed_Arrival;hel7439299980;fao93766109;12:05+_Departure;fao93766109;lis2323639855;12:30';

// Data needed for first part of the section

const weekdays = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];
const openingHours = {
  [weekdays[3]]: {
    open: 12,
    close: 22,
  },
  fri: {
    open: 11,
    close: 23,
  },
  sat: {
    open: 0, // Open 24 hours
    close: 12 + 12,
  },
};
console.log(openingHours);
const restaurant = {
  name: 'Classico Italiano',
  location: 'Via Angelo Tavanti 23, Firenze, Italy',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  starterMenu: ['Focaccia', 'Bruschetta', 'Garlic Bread', 'Caprese Salad'],
  mainMenu: ['Pizza', 'Pasta', 'Risotto'],
  openingHours,

  // Destructuring Arrays Real Wolrd Exemples
  order(starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]]
  },
  // Destructuring Objects Real World Exemple
  orderDelivery({ address, time, starterIndex, mainIndex }) {
    console.log(`Order: ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]}. Address ${address} at ${time}.`);
  },
  // Using Spread Operator in Real World Exemple
  orderPasta: function ([ing1, ing2, ing3]) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },
  orderPizza: function (mainIng, ...otherIng) {
    console.log(mainIng);
    console.log(otherIng);
  },
};
// /////////////// 114. LOOPING OBJECTS ///////////////




// /////////////// END OF THE CLASS 114. LOOPING OBJECTS ///////////////



/*
// /////////////// 113. OPTIONAL CHAINING (?.) ///////////////
console.log(restaurant.openingHours.mon?.open);
console.log(restaurant.openingHours?.mon?.open);

const days = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

// Example
for (const day of days) {
  const open = restaurant.openingHours[day]?.open ?? 'closed';
  console.log(`On ${day}, we open at ${open}`);
};

console.log('|====== With Methods ======|');
console.log(restaurant.order?.(0, 1) ?? 'Method does not exist');
console.log(restaurant.order2?.(0, 1) ?? 'Method does not exist');

console.log('|====== With Arrays ======|');

const users = [{ name: 'Jonas', email: 'hello@jonas.com' }];
console.log(users[0]?.name ?? 'User empty');
// /////////////// END OF THE CLASS 113. OPTIONAL CHAINING (?.) ///////////////
*/


// /////////////// 112. Enhanced Object Literals ///////////////
// Class writen at the begining of the sheet

/*
// /////////////// 111. lOOPING ARRAYS: THE FOR-OF LOOP ///////////////
// const array1 = ['a', 'b', 'c'];

// for (const element of array1) {
//   console.log(element);
// }

const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

for (const item of menu) {
  console.log(item);
};

for (const item of menu.entries()) {
  console.log(`${item[0] + 1} - ${item[1]}`); // Old school
}
for (const [index, element] of menu.entries()) {
  console.log(`${index + 1} = ${element}.`); // New way
};

// /////////////// END OF THE CLASS 111. lOOPING ARRAYS: THE FOR-OF LOOP ///////////////
*/


/*
// /////////////// 110. CODING CHALLLENGE 01 ///////////////

const game = {
  team1: 'Bayern Munich',
  team2: 'Borrussia Dortmund',
  players: [
    [
      'Neuer',
      'Pavard',
      'Martinez',
      'Alaba',
      'Davies',
      'Kimmich',
      'Goretzka',
      'Coman',
      'Muller',
      'Gnarby',
      'Lewandowski',
    ],
    [
      'Burki',
      'Schulz',
      'Hummels',
      'Akanji',
      'Hakimi',
      'Weigl',
      'Witsel',
      'Hazard',
      'Brandt',
      'Sancho',
      'Gotze',
    ],
  ],
  score: '4:0',
  scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
    'Hummels'],
  date: 'Nov 9th, 2037',
  odds: {
    team1: 11.33,
    x: 3.25,
    team2: 6.5,
  },
};
// 1.
const [players1, players2] = game.players;
console.log(players1);
console.log(players2);

// 2. 
const [gk, ...fieldPlayers] = game.players[0];
console.log(gk);
console.log(fieldPlayers);

// 3.
const allPlayers = [...game.players[0], ...game.players[1]];
console.log(allPlayers);

// 4.
const players1Final = ['Thiago', 'Coutinho', 'Perisic', ...game.players[0]];
console.log(players1Final);

// 5.
const { team1, x: draw, team2 } = game.odds;
console.log(team1);
console.log(draw);
console.log(team2);

// 6.
const printGoals = function (...player) {
  console.log(player);
  console.log(`${player.length} goals was scored.`);
};

printGoals('Davies', 'Muller', 'Lewandowski', 'Kimmich');
printGoals(...game.scored);

// 7. 
team1 < team2 && console.log('Team 1 is more likely to win');
team1 > team2 && console.log('Team 2 is more likely to win');
*/


/*
// /////////////// 109. LOGICAL ASSIGNMENT OPERATORS ///////////////

const rest1 = {
  name: 'Capri',
  numGuests: 0,
};

const rest2 = {
  name: 'La Piazza',
  owner: 'Giovanni Rossi',
};

// rest1.numGuests = rest1.numGuests || 10;
// rest2.numGuests = rest2.numGuests || 10;

rest1.numGuests ??= 10;
rest2.numGuests ??= 10;

// Setting owner as anonymous
rest1.owner &&= '<Anonymous>'; // It will display nothing because there is no owner object
rest2.owner &&= '<Anonymous>';

console.log(rest1);
console.log(rest2);

// /////////////// END OF THE CLASS 109. LOGICAL ASSIGNMENT OPERATORS ///////////////
*/


/*
// /////////////// 108. THE NULISH COALESCING OPERATOR (??) ///////////////

// Do not work in this exemple because work with falsy values and 0 is a falsy one
restaurant.numGeusts = 0;
const guests = restaurant.numGeusts || 10;  // It won't work properlly because it will 0 is a valid number
console.log(guests);

// It works because Nullish works only with null and undefined
const correctGuests = restaurant.numGeusts ?? 10;
console.log(correctGuests);
// /////////////// END OF TH CLASS 108. THE NULISH COALESCING OPERATOR (??) ///////////////
*/


/*
// //////////// 107. SHORT CIRCUITING (&& and ||) ////////////
// Use ANY data type, return ANY data type, short-circuiting

console.log('|------ OR Short Cicuit ------|');
console.log(3 || 'Jonas');
console.log('' || 'Jonas');
console.log(true || 0);
console.log(undefined || null);

console.log(undefined || 0 || '' || 'Hello' || 23 || null);

// Pratical exemple

// restaurant.numGuests = 23;
const guests = restaurant.numGuests || 10;  // numGuests do not exist originally
console.log(guests);

console.log('|------ AND Short Cicuit ------|');
// Show the first falsy value.
// If all values are true, than it is shown the last value
console.log(0 && 'Jonas');
console.log(23 && 'Jonas');
console.log(0 && undefined);
// Pratical exemple
// if way
if (restaurant.orderPizza) {
  restaurant.orderPizza('Presunto', 'Bacon');
};
// short-cutting way
restaurant.orderPizza && restaurant.orderPizza('Presunto', 'Bacon');
// //////////// AND OF THE CLASS 107. SHORT CIRCUITING (&& and ||) ////////////
*/


/*
// /////////////// 106. REST PATTERNS AND PARAMETERS ///////////////
restaurant.orderPizza("frango", "azeitona", "bacon", 'Creme de Leite');
restaurant.orderPizza("Presunto");

// DESTRUCTURING
// SPREAD, because on RIGHT fide of =
const arr = [1, 2, ...[3, 4]];

// REST, because on LEFT side of =
const [a, b, ...others] = [1, 2, 3, 4, 5];
console.log(others);

const [pizza, , ...otherFoods] = [...restaurant.mainMenu, ...restaurant.starterMenu];
console.log(otherFoods);

console.log('|====== Rest Pattern With Objects ======|');

const { sat, ...weekDays } = restaurant.openingHours;
console.log(weekDays);

// FUNCTION

const add = function (...numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  console.log(sum);
};

add(2, 3, 4);
add(5, 6, 7);
add(3, 4, 5, 6, 7);

const x = [23, 5, 7];
add(...x);
// /////////////// AND OF THE CLASS 106. REST PATTERNS AND PARAMETERS ///////////////
*/


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
