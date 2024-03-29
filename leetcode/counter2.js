/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
const createCounter = (init) => {
  let cnt = init;
  return {
    increment: () => {
      return ++cnt;
    },
    decrement: () => {
      return --cnt;
    },
    reset: () => {
      return (cnt = init);
    },
  };
};

/* Example usage

const trueCnt = createCounter(5);
console.log(trueCnt.increment());
console.log(trueCnt.reset());
console.log(trueCnt.decrement()); 

*/
