/**
 * @author Oliver Smith - (7ripleSeven7s)
 * function based on leetcode #2704 To Be Or Not To Be
 *
 * @param { any } val - value(s) which can be tested against by toBe() and notToBe().
 * @param { any } expected - An object which is evaluated true if equal to val.
 * @param { any } unexpected - An object which is evaluated true if NOT equal to val.
 *
 * @return { boolean |  } expected , unexpected .toBe() and .notToBe()
 */
export const expect = function (val) {
  return {
    toBe(expected) {
      if (val !== expected) throw new Error("Not Equal");
      else return true;
    },
    notToBe(unexpected) {
      if (val === unexpected) throw new Error("Equal");
      else return true;
    },
  };
};