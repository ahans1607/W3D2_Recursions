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

flatten = (arr) => { 
  if (arr.length === 0){
    return []
  }
  let newArr = []
  arr.forEach(element => {
    if(Array.isArray(element)){
    newArr.push(...flatten(element))
    }else {
    newArr.push(element)
    }
    
  });
  
  return newArr


}

console.log(flatten([])); // []
console.log(flatten([1, 2])); // [1, 2]
console.log(flatten([1, [2, [3]]])); // [1, 2, 3]












// function flatten(arr) {
//    let newArray = [];

//   arr.forEach(ele => {
//   if (!Array.isArray(ele)){
//     newArray.push(ele)
//   } else {
//     newArray.push(...flatten(ele))
//   }

//   });
   
//    return newArray 

// };


// console.log(flatten([])); // []
// console.log(flatten([1, 2])); // [1, 2]
// console.log(flatten([1, [2, [3]]])); // [1, 2, 3]






// function flatten(array){

//   if (array.length === 0){
//     return []
//   }
//   return (array.flat(Infinity))


// }


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = flatten;
} catch (e) {
  module.exports = null;
}
