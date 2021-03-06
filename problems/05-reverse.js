/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:


reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/
reverse = (string) => {
  if (string.length === 0){
    return "";
  }

  array = string.split("") 
  let letter = array.pop()
  return letter + reverse(array.join(""))

}

console.log(reverse("dog")); // "god"
reverse("atom"); // "mota"
console.log(reverse("q")); // "q"
reverse("id"); // "di"
console.log(reverse("")); // ""












// function reverse (string) {
//   if (string.length === 0){
//     return " ";
//   }

// let letter = string.slice(string.length - 1)
// console.log(letter)
// return letter + reverse(letter[string.length - 1])

// }

// console.log(reverse("house")); // "esuoh"

/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
// try {
//   module.exports = reverse;
// } catch (e) {
//   module.exports = null;
// }
