/***********************************************************************
Write a recursive function, `range`, that takes a start and an end and returns
an array of all numbers in that range, exclusive. If the end number is less than
the start, return an empty array.

Examples:

range(1, 5); // [1, 2, 3, 4]
range(3, 4); // [3]
range(7, 6); // []
***********************************************************************/

function range (start, end){
//
  if (start >= end) return [] // base case
  let tempStart = start + 1 //recursive step
  let returnValue = range(tempStart, end) //recursive call

  

returnValue.unshift(start)
return returnValue;

}

console.log(range(1, 5)); // [1, 2, 3, 4]
console.log(range(3, 4)); // [3]
console.log(range(7, 6)); // []














// let range = (start, end, arr = []) => {
//   if (end < start) {
//     return arr; }

//   if (arr[arr.length - 1] >= end - 1) {
//     return arr;}

//    arr.push(start);
//   //  console.log('array:', arr)
 
//   return range(start + 1, end, arr)   
// }





/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = range;
} catch (e) {
  module.exports = null;
}
