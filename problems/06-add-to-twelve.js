/***********************************************************************
Write a recursive function called `addToTwelve` that will return true if there
are two adjacent numbers in the input array that can sum up to 12. Otherwise,
return false.

Examples:


***********************************************************************/

addToTwelve = (array) => {
  if (array.length <= 0){
    return false;
  }


  if((array[0] + array[1]) === 12){
    return true
    
  }

  return addToTwelve(array.slice(1))
}



console.log(addToTwelve([1, 3, 4, 7, 5])); // true
addToTwelve([1, 3, 4, 7, 6]); // false
console.log(addToTwelve([1, 11, 4, 7, 6])); // true
addToTwelve([1, 12, 4, 7, 6]); // false
console.log(addToTwelve([12])); // false






// function addToTwelve(nums){

//   if(nums.length === 0){
//     return false
//   }
//   if (nums.length < 2){
//     return false
//   }

//     let ifTwelve = (addToTwelve(nums.slice(1)) + nums[0])
//         if (ifTwelve === 12){
//     return true
//       }
//   }


/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = addToTwelve;
} catch (e) {
  module.exports = null;
}
