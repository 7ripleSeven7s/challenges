/* 
    Arrays in ES5
*/

const numbers = [10, 20, 30, 40, 50];
const iterable = numbers[Symbol.iterator]();

console.log(iterable);        // Object [Array Iterator] {}
console.log(iterable.next()); // { value: 10, done: false } 

// accessing a value in an array using for-in loop requires 'dereferencing' using arrayName[index]
for (const index in numbers) {
  console.log(index); // 0 1 2 3 4
  console.log(numbers[index]); // 10 20 30 40 50
}

console.log(30 in numbers); // false, refers to index
console.log(2 in numbers);  // true


// for-of loop (ES6)

for (const val of numbers) {
  //console.log(val); // 10 20 30 40 50
}

for (const val of numbers) {
  console.log(val);
  if (val > 20) {
    break;    // 10 20
  }
}
