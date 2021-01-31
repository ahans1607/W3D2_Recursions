/***********************************************************************
Write a recursive solution called `isSorted` to determine if the input array
is sorted in ascending order.

Examples:

isSorted([1, 2, 3, 4, 5]); // true
isSorted([1, 2, 4, 3, 5]); // false
isSorted([2, 4, 6, 7, 8]); // true
isSorted([5, 4, 3, 2, 1]); // false
***********************************************************************/
// create a function that takes in an array called isSorted
// check if the number before is less that the one after is so True
// base case: if array[i] > array[i + 1] then false 

isSorted = (array) => {

  if (array.length === 1){
    return true
  }


  if (array[0] > array[1]){
    return false
  }
  
  array.shift()

  return isSorted(array)
 

}

console.log(isSorted([1, 2, 3, 4, 5])); // true
console.log(isSorted([1, 2, 4, 3, 5])); // false
console.log(isSorted([2, 4, 6, 7, 8])); // true
console.log(isSorted([5, 4, 3, 2, 1])); // false

// let isSorted = (array) => {

//   if (array[0] > array[0 + 1]){
   
//     return false
//   }
//   if (array.length === 2){
//     return true
//   }
  
//   if (isSorted(array.slice(1))){
    
//     return true
   
//   }
//   else {
//     return false
//   }
  
//   };
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = isSorted;
} catch (e) {
  module.exports = null;
}
