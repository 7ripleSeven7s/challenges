/**
 * @param {...(null|boolean|number|string|Array|Object)} args
 * @return {number}
 */
var argumentsLength = function(...args) {
  // or this can be solved simply using args.length
  let sum = 0;
  for (arg of args) {
    sum++;
  }
  return sum;
};

/**
 * argumentsLength(1, 2, 3); // 3
 */