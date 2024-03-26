/* 
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.

*/

/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    let lastValue = 1;
    let result = 0;
    return function(...args) {
      if (lastValue !== result) {
        result = fn(...args);
        lastValue = result;
        return result;
      } else {
        return lastValue;
      }
    }
}

/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */

/* 
Approach
To memoize a function, we can create a cache object that stores the results of previous function calls. 
Whenever the function is called, we check if the cache already has a result for the given input parameters. 
If it does, we return the cached result. Otherwise, we compute the result and store it in the cache for future use.

To implement memoization in JavaScript/TypeScript, we can create a higher-order function that takes in the original 
function and returns a memoized version of it. The memoized function can use a closure to store the cache object.

Complexity
Time complexity:
The time complexity of the memoized function is O(1) for each call if the cache hit rate is high. In the worst case, 
where all input parameters are unique, the memoized function will perform the same number of function calls as the original function.

Space complexity:
The space complexity of the memoized function depends on the number of unique input parameters and the size of the 
cache object. If the number of unique input parameters is small and the cache object is not too large, 
then the space complexity will be reasonable. However, if the number of unique input parameters is very large 
and/or the cache object is very large, then the space complexity can become a concern.


function memoize(fn) {
    const cache = {};
    return function(...args) {
      const key = String(args);
      if (key in cache) {
        return cache[key];
      }
      const result = fn(...args);
      cache[key] = result;
      return result;
    }
}


// Fibonacci function
const fib = (n) => (n <= 1 ? 1 : fib(n - 1) + fib(n - 2));

// Factorial function
const factorial = (n) => (n <= 1 ? 1 : factorial(n - 1) * n);



There are other ways to implement memoization in JavaScript. Here are a few:

Using a Map::
function memoize(fn) {
  const cache = new Map();
  return function(...args) {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }
}
Using function properties:
function memoize(fn) {
  fn.cache = {};
  return function(...args) {
    const key = JSON.stringify(args);
    if (key in fn.cache) {
      return fn.cache[key];
    }
    const result = fn(...args);
    fn.cache[key] = result;
    return result;
  }
}

Using closures::
function memoize(fn) {
  const cache = {};
  return function memoized(...args) {
    const key = JSON.stringify(args);
    if (key in cache) {
      return cache[key];
    }
    const result = fn(...args);
    cache[key] = result;
    return result;
  }
}
*/