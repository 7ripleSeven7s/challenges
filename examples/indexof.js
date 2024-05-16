"use strict"

const names = ['Alice', 'Bob', 'Charlie', 'David', 'Alice'];

// indexOf() returns the first index of the element in the array
console.log(names.indexOf('Charlie')); // 2 
console.log(names.indexOf('Sally ')); // -1

// lastIndexOf() returns the last index of the element in the array
console.log(names.lastIndexOf('Alice')); // 4


// findIndex() returns the index of the first element that satisfies the condition
console.log(names.findIndex(name => name === 'David')); // 3


// indexOf() and lastIndexOf() are much faster than findIndex() because 
//   they are optimized for scalar values

// find() returns the first element that satisfies the condition
console.log(names.find(name => name === 'Charlie')); // Charlie


const people = [{ name: "John", age: 30 },{ name: "Jane", age: 25 }];
const person = people.find(person => person.name === 'Jane'); 
console.log(person); // { name: "Jane", age: 25 }

// NOTE person is not a copy of the object in the array. It is a reference to the object in the array.
// be careful of mutation.