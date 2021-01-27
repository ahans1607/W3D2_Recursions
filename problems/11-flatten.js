/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

1. create function flatten takes in array
2. array & array[i] could contain nested array
  base case - if array is empty then return array
3. take values from inside array and array[i] -- push to new array
  if array contains nested -- get into array[j] push into new array
4. return new array

***********************************************************************/


function flatten(arr) {
   let newArray = [];

   if (arr.length === 0){
     return [];
   }
   if (arr.length > 0){
  //  for(let i = 0; i < arr.length; i++){

  //   let ele = arr[i];
    newArray.push(arr.flat(Infinity))
  //  }
   }
   return newArray

  };

// function flatten(array){

//   if (array.length === 0){
//     return []
//   }
//   return (array.flat(Infinity))


// }

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
