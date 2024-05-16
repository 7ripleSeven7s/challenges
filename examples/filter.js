"use strict";

const numbers = [10, -20, 30, -40, 50];

// filter() returns a new array with elements that satisfy the condition
console.log(numbers.filter(number => number < 0)); // [-20, -40]
console.log(numbers.filter(number => number > 0)); // [10, 30, 50]

// filter() is slower than includes() because it is optimized for callback functions
// filter() is useful for selecting elements that satisfy a condition
// includes() is useful for checking if an element is in an array
// some() and every() are useful for checking if at least one or all elements satisfy a condition



