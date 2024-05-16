// Array.prototype.forEach()

// the forEach method will loop over each element in the array and execute the callback function for each element
// break is not allowed in forEach
// ALSO it is not compatible with async-await
/* numbers.forEach((val, index) => {
  console.log(val); // 10 20 30 40 50
  console.log(index); // 0 1 2 3 4
}); */

const ids = [10, 20, 30, 40, 50];

function getById(id) {

  return new Promise((resolve) => {

    setTimeout(() => {
      
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}

// not possible in node.js: 

/* for (const id of ids) {
  await getById(id);
} */
// SyntaxError: await is only valid in async functions and the top level bodies of modules

(async function () {
  for (const id of ids) {
  // not possible in node.js: 
    // SyntaxError: await is only valid in async functions and the top level bodies of modules
    await getById(id);
  }
})();
