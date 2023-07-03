
const tail = function(array) {
  let newArray;
  if (array.length <= 1) {
    return newArray = [];
  } else {
    newArray = array.slice(1);
    return newArray;
  };
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