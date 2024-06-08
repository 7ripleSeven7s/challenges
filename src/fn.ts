// functions
//const util = require('util');
import { format, isDeepStrictEqual,types,parseEnv, formatWithOptions } from "node:util";

function addNumbers(a: number, b: number) {
  return a + b;
}

// TypeScript hates module.exports, Im told
// module.exports = addNumbers;

export default addNumbers;


//export function isDeepStrictEqual(val1: unknown, val2: unknown): boolean;
console.log(isDeepStrictEqual(1,2));
