"use strict";

// map() is a method that creates a new array with the results of calling a provided function on every element in the calling array.

const numbers = [10, 20, 30, 40, 50];

const tenX = numbers.map((number) => {
  return number * 10;
});
console.log(tenX); // [100, 200, 300, 400, 500]


// map() can return a new array with different data types.
const obj = numbers.map( (num) => {
  
  return { 
    //index: i++, // this works if i is passed as an argument
    index: numbers.indexOf(num), // buggy, if array has duplicate values
    value: num 
  }
});

console.log(obj); // returns array of objects
/* 
    [
      { index: 0, value: 10 },
      { index: 1, value: 20 },
      { index: 2, value: 30 },
      { index: 3, value: 40 },
      { index: 4, value: 50 }
    ]
*/

// Combining map() and filter()
const negatives = [10, -20, 30, -40, 50];
const add10 = negatives
  .filter( num => num < 0)
  .map( num => num + 10);

//console.log(add10); // [20, 40, 60]   (val > 0)
console.log(add10); // [-10, -30]   (val < 0)


// mapping objects
const people = [
  { name: 'John', age: 20, address: '123 Main St'},
  { name: 'Jane', age: 25, address: '456 Elm St'},
  { name: 'Jim', age: 30, address: '789 Broadway'}
];

const names = people.map( (p) => ({
  ...p,
  fullName: `${p.name} @ ${p.address}`
}));

console.log(names);
/*
[
  {
    name: 'John',
    age: 20,
    address: '123 Main St',
    fullName: 'John @ 123 Main St'
  },
  {
    name: 'Jane',
    age: 25,
    address: '456 Elm St',
    fullName: 'Jane @ 456 Elm St'
  },
  {
    name: 'Jim',
    age: 30,
    address: '789 Broadway',
    fullName: 'Jim @ 789 Broadway'
  }
]
*/


/* 
const names = people.map( (p) => ({
  fullName: `${p.name} @ ${p.address}`
}));

console.log(names);
[
  { fullName: 'John @ 123 Main St' },
  { fullName: 'Jane @ 456 Elm St' },
  { fullName: 'Jim @ 789 Broadway' }
]
*/