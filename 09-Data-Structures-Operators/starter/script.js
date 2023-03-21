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
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },

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

  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(`Order received! ${this.starterMenu[starterIndex]} and ${this.mainMenu[mainIndex]} will be delievered to ${address} at ${time}.`);

  },
  orderPasta: function (ing1, ing2, ing3) {
    console.log(`Here is your delicious pasta with ${ing1}, ${ing2} and ${ing3}`);
  },

  orderPizza: function (mainIngredient, ...othersIngredients) {
    console.log(mainIngredient);
    console.log(othersIngredients);
  }
};




//  ///////////////// OR /////////////////
// console.log(undefined || 3);

// restaurant.numGuest = 0;
// // const guest1 = restaurant.numGuest ? restaurant.numGuest : 10;
// // console.log(guest1);

// const guest2 = restaurant.numGuest || 10;
// console.log(guest2);

// // Nullish: null and undefined (NOT 0 or '')
// const guestCorrect = restaurant.numGuest ?? 10;
// console.log(guestCorrect);

//  ///////////////// --- AND --- ////////////////

// console.log('Hello' && 23 && undefined && 'Jonas');

// ///////////////////

// restaurant.orderPizza('cheese', 'chicken', 'onions', 'catupiry');
// restaurant.orderPizza('cheese')

// 1) Destructuring
// const arr = [1, 2, ...[3, 4]];
// const [a, b, ...others] = [1, 2, 3, 4, 5];

// // console.log(arr);
// // console.log(others);
// // console.log(a);
// // console.log(b);

// const [pizza, , risoto, ...otherFood] = [...restaurant.mainMenu, ...restaurant.starterMenu];
// console.log(otherFood);
// console.log(risoto, pizza);

// // Objects
// const { sat, ...weekDays } = { ...restaurant.openingHours };
// console.log(weekDays);
// console.log(sat);

// // 2) Functions
// const add = function (...numbers) {
//   // console.log(numbers);
//   let sum = 0;
//   for (let i = 0; i < numbers.length; i++) {
//     sum += numbers[i];
//   }
//   console.log(sum);

// };

// add(2, 3);
// add(5, 3, 7, 2);
// add(8, 2, 5, 3, 2, 1, 4);

// const x = [23, 5, 7];
// add(...x);


// ############ 105. The Spread Operator (...) ############

// Objects
// const newRestaurant = { foudedIn: 1998, ...restaurant, founder: 'Giuseppe' };
// console.log(newRestaurant);

// const restaurantCopy = { ...restaurant };
// restaurantCopy.name = 'Ristorante Roma';
// console.log(restaurant.name);
// console.log(restaurantCopy.name);

// Real world exemple
// const ingredients = [prompt("Ing 1"), prompt('Ing 2'), prompt('Ing 3')];
// restaurant.orderPasta(...ingredients);

// const novaArray = ['a', 'b', 'c'];
// console.log(...novaArray);


// const arr = [7, 8, 9];

// const newArr = [1, 2, ...arr]
// console.log(newArr);

// console.log(...newArr);

// const newMenu = [...restaurant.mainMenu, 'Gnocci'];
// console.log(newMenu);

// // Copy array
// const mainMenuCopy = [...restaurant.mainMenu];

// // Join 2 arrays
// const menu = [...restaurant.starterMenu, ...restaurant.mainMenu];

// console.log(menu);

// // Iterables: arrays, strings, maps, sets. But not objects
// const str = 'Jonas';
// const letters = [...str, 'S.'];
// console.log(letters);

// restaurant.orderDelivery({
//   time: '22:30',
//   address: 'Via del Sole, 21',
//   mainIndex: 2,
//   starterIndex: 2,
// })

// const { name, openingHours, categories } = restaurant;
// console.log(openingHours);
// console.log(name);
// console.log(categories);

// const { name: restaurantName, openingHours: opening, categories: tags } = restaurant;
// console.log(restaurantName);
// console.log(opening);

// const { menu = [], starterMenu: startes = [] } = restaurant;

// console.log(menu, startes);

// // Mutating variables
// let a = 111;
// let b = 999;
// const obj = { a: 23, b: 7, c: 14 };
// ({ a, b } = obj);
// console.log(a, b);

// // Nested objects
// const { fri: { open: o, close: c } } = openingHours;
// console.log(o, c);

// ############ 103. Destructuring Arrays #############
// const arr = [2, 3, 4];
// const a = arr[0];
// const b = arr[1];
// const c = arr[2];

// const [x, y, z] = arr;
// // console.log(x, y, z);
// console.log(arr);
// console.log(y);

// let [main, , secondary] = restaurant.categories;
// console.log(main, secondary);

// const temp = main;
// main = secondary;
// secondary = temp;
// console.log(main, secondary);

// [main, secondary] = [secondary, main];
// console.log(main, secondary);

// const [starter, main] = restaurant.order(2, 0);
// console.log(`Starter = ${starter}`);
// console.log(`Main = ${main}`);

// // Nested destructuring
// const nested = [2, 4, [5, 6]];
// // const [i, , j] = nested;
// const [i, , [j, k]] = nested;
// console.log(i, j, k);

// // Default values
// const [p = 1, q = 1, r = 1] = [8, 9];
// console.log(p, q, r);

