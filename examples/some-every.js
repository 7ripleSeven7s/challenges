"use strict";

const numbers = [10, -20, 30, -40, 50];

// includes() returns true if the element is in the array
// includes() is quite fast
console.log(numbers.includes(30)); // true

// some() returns true if at least one element satisfies the condition
console.log(numbers.some(number => number < 0)); // true

// every() returns true if all elements satisfy the condition
console.log(numbers.every(number => number < 0)); // false
console.log(numbers.every(number => number > 0)); // false

// some() and every() are slower than includes() because they are optimized for callback functions
// includes() is the fastest way to check if an element is in an array
// some() and every() are useful for checking if at least one or all elements satisfy a condition

