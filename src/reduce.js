const numbers = [10, 20, 30, 40 , 50 ];

let sum = 0;
for (const value of numbers) {
  sum += value;
  value;
}

sum;

/*
(method) Array<number>.reduce(
    callbackfn: ( previousValue: number, 
                  currentValue: number, 
                  currentIndex: number, 
                  array: number[] ) 
      => number, initialValue: number): number (+2 overloads)

reduce takes two parameters: (accumulator, value) where value is the value of array[current_index]
@param callbackfn
reduce can be
1. callbackfn(previousValue: number, currentValue: number, currentIndex: number, array: number[]): number
2. and an initial value
*/

numbers.reduce((sum, value) => {
  sum += value;
  value;
  sum;
  return sum;
}, 0);

sum;

const z = [5,10,15,20,25,30]; /*? $.pop() */
z

