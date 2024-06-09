"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// functions
//const util = require('util');
const node_util_1 = require("node:util");
function addNumbers(a, b) {
    return a + b;
}
// TypeScript hates module.exports, Im told
// module.exports = addNumbers;
exports.default = addNumbers;
//export function isDeepStrictEqual(val1: unknown, val2: unknown): boolean;
console.log((0, node_util_1.isDeepStrictEqual)(1, 2));
//# sourceMappingURL=fn.js.map