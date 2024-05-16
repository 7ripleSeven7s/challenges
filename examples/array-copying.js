"use strict";


const numbers = [10, 20, 30, 40, 50];

// The spread operator can be used to copy an array.
const copyOfNumbers = [...numbers]; // [10, 20, 30, 40, 50]

copyOfNumbers[0] = 100;
console.log(numbers, copyOfNumbers); // [10, 20, 30, 40, 50]
  


// problems using spread operator to copy an array of objects
const people = [{ name: "John", age: 30 },{ name: "Jane", age: 25 }];
// using spread to copy an array of objects
const copyOfPeople = [...people];
// log results
console.log(people, copyOfPeople,"\n"); // [{ name: "John", age: 30 },{ name: "Jane", age: 25 }]

// changing the name of the first person in the copy
copyOfPeople[0].name = "Mike";
console.log(people, copyOfPeople); // [{ name: "Mike", age: 30 },{ name: "Jane", age: 25 }]


// array scalars vs references

// scalars are: number string boolean undefined null

// recommended:
// use lodash _.cloneDeep() to copy an array of objects