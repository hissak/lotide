const eqArrays = require('./eqArrays');



const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
    return `✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`
  } else if (!eqArrays(arrayA, arrayB)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !==  ${arrayB}`);
    return `🛑🛑🛑 Assertion Failed: ${arrayA} !==  ${arrayB}`
  }
};

module.exports = assertArraysEqual;
// const eqArrays = function(array1, array2) {
//   let newArray = [];
//   let truthyFalsey = true;
//   if (array1.length === array2.length) {
//     for (let i = 0; i < array1.length && i < array2.length; i++) {
//       if (array1[i] === array2[i]) {
//         newArray.push(true);
//       } else {
//         newArray.push(false);
//       }
//     }
//   } else if (array1.length !== array2.length) {
//     return truthyFalsey = false;
//   }

//   for (let x = 0; x < newArray.length; x++) {
//     if (!newArray[x]) {
//       return truthyFalsey = false;
//     }
//   }
//   return truthyFalsey;
// };

