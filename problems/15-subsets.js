/***********************************************************************
Write a function called `subsets` that will return all subsets of an array.

Examples: 



Hint: For subsets([1, 2, 3]), there are two kinds of subsets:
  1. Those that do not contain 3 (all of these are subsets of [1, 2]).
  2. For every subset that does not contain 3, there is also a corresponding
     subset that is the same, except it also does contain 3.
***********************************************************************/
// make a function that takes in a array of numbers
// base case is if array is empty return a 2D array
// return a 2D array of all the possible ways to combine the original array


// subsets = (array) => {
//   if (array.length === 0){
//     return [[]]
//   }
//   array.pop()
//   return [[], subsets(array[])]

// }

// console.log(subsets([])) // [[]]
// console.log(subsets([1])) // [[], [1]]
// console.log(subsets([1, 2])) // [[], [1], [2], [1, 2]]
// console.log(subsets([1, 2, 3])) // [[], [1], [2], [1, 2], [3], [1, 3], [2, 3], [1, 2, 3]]

// /**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
// try {
//   module.exports = subsets;
// } catch (e) {
//   module.exports = null;
// }
