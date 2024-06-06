// functions
const util = require('util');

function addNumbers(a: number, b: number) {
  return a + b;
}

// TypeScript hates module.exports, Im told
// module.exports = addNumbers;

export default addNumbers;


//export function isDeepStrictEqual(val1: unknown, val2: unknown): boolean;
util