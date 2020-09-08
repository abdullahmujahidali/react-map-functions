var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
// function double(x) {
//   return x * 2;
// }

// const newArray = numbers.map(double);

// console.log(newArray);

//Filter - Create a new array by keeping the items that return true.

// function filterReq(x) {
//   if (x > 10) {
//     return x;
//   }
// }
// const newNumbers = numbers.filter(filterReq);
// console.log(newNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.

var newReduce= numbers.reduce(function(accum, current){
  return accum+current;
})

console.log(newReduce);


//Find - find the first item that matches from an array.

//FindIndex - find the index of the first item that matches.
