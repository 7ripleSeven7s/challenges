/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let called = false;
    let result;
    return function(...args){
        if (!called) {
          result = fn(...args);
          called = true;
          return result;
        } else {
          return undefined;
        }
    }
};

let fn = (a,b,c) => (a + b + c);
let onceFn = once(fn);

console.log(onceFn(1,2,3)); // 6
console.log(onceFn(2,3,6)); // undefined
console.log(onceFn(2,3,6)); // undefined
/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 * 
 * 
 * Approach
    To solve this problem, we can return a new function that keeps track of whether it has been called before. 
    We can do this by using a closure to store a boolean flag that is initially set to false. 
    The first time the new function is called, we call the original function and set the flag to true. 
    We also store the result of the original function. Subsequent calls to the new function simply return undefined 
    without calling the original function again.
 */
