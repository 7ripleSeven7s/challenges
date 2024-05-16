"use strict";

const numbers = [10, 20, 30, 40, 50];

const [first, second, third /*, fourth, fifth */, ...rest] = numbers;
console.log(first, second, third); // 10 20 30
console.log(rest); // [40, 50]


