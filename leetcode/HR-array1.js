"use strict";

const b = [];
const arr = [1, 2, 3, 4];

/* console.log(a.length);
console.log(b.length);
console.log(b); */
reverseArray(arr);

/**
 * @param {number[]} a
 * @return {number[]}
 */
function reverseArray(a) {
  let bs = [];
  for (let n of a) {
    b.unshift(n);
  }
  return bs;
}

// console.log(b.join(" "));
// 4
// 1 4 3 2
