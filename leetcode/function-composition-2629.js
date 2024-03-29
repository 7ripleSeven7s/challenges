/**
 * @param {Function[]} functions
 * @return {Function}
 */
const compose = function (functions) {
  return function (x) {};
};

/*

  !@@! I DONT UNDERSTAND COMPOSITION !@@!

  Given an array of functions [f1, f2, f3, ...fn],
  return a new function fn that is the 
      "function composition" 
  of the array of functions.

  The function composition of: 
    [f(x), g(x), h(x)] 
          is 
     fn(x) = f(g(h(x)))


  The function composition of an empty list of functions is the 
    "identity function"
        f(x) = x

  const fn = compose([x => x + 1, x => 2 * x])
  fn(4) // 9


  function_array = [f(x), g(x), h(x)]












  ---------------------------
  fn-1(x => x + 1)
  fn-2(x => 2 * x)

  Ex-1:
  x = 4
  x => x + 1  // 4 + 1 = 5
       x * x  // 4 * 4 = 16
       2 * x  // 2 * 4 = 8
               = 29 (X)    

       or maybe?

       x + 1   // 5
       5 * 4   // 20
       2 * 20  // 40
                = 65 (!!!)
  
  let val = compose([f1,f2,f3])

  Ex-3:
  x = 42
  x => x = x //

*/
