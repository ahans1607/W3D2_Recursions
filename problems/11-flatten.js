/***********************************************************************
Write a recursive function called `flatten` that takes a single array with
any number of nested arrays and returns and array with all the nested
contents on one level.

Examples:

***********************************************************************/


function flatten(arr) {
  let newArrau = []

  arr.array.forEach(element => {
    
  });
}




















// function flatten(array){

//   if (array.length === 0){
//     return []
//   }
//   return (array.flat(Infinity))


// }

console.log(flatten([])); // []
flatten([1, 2]); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
