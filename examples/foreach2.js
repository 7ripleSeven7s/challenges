"use strict";

const ids = [10, 20, 30, 40, 50];

function getById(id) {

  return new Promise((resolve) => {

    setTimeout(() => {
      
      console.log(`Got ${id}`);
      resolve(id);
    }, 1000);
  });
}


// all the iterations of forEach are executed in parallel
(async function () {
  ids.forEach(async (id) => {
    await getById(id);
  })
})();

// Jack Herrington reccomends using for-of loop instead of forEach