
const tail = function(array) {
  let newArray = array.slice(1);
  console.log(newArray);
};



const assertEqual = require('./assertEqual')
// function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
//   } else {
//     console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
//   }
// };
module.exports = tail