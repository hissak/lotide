
const assertArraysEqual = function(arrayA, arrayB) {
  if (eqArrays(arrayA, arrayB)) {
    console.log(`✅✅✅ Assertion Passed: ${arrayA} === ${arrayB}`);
  } else if (!eqArrays(arrayA, arrayB)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${arrayA} !==  ${arrayB}`);
  }
};


const eqArrays = function(array1, array2) {
  let newArray = [];
  let truthyFalsey = true;
  if (array1.length === array2.length) {
    for (let i = 0; i < array1.length && i < array2.length; i++) {
      if (array1[i] === array2[i]) {
        newArray.push(true);
      } else {
        newArray.push(false);
      }
    }
  } else if (array1.length !== array2.length) {
    return truthyFalsey = false;
  }

  for (let x = 0; x < newArray.length; x++) {
    if (!newArray[x]) {
      return truthyFalsey = false;
    }
  }
  return truthyFalsey;
};



const middle = function(input) {
  let outputArray = []
  if(input.lenngth <= 2) {
    return output
  } else if(input.length > 2 && input.length % 2 === 0) {
    outputArray.push(input[input.length / 2 - 1], input[input.length / 2])
  } else if (input.length > 2 && input.length % 2 !== 0) {
    outputArray.push(input[Math.ceil(input.length / 2 - 1)])
  }
  console.log(outputArray);
  return outputArray;
}

assertArraysEqual(middle([1]), [])
assertArraysEqual(middle([1, 2]), [])

middle([1, 2, 3]) // => [2]
assertArraysEqual(middle([1, 2, 3]), [2])

middle([1, 2, 3, 4, 5]) // => [3]
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3])

middle([1, 2, 3, 4]) // => [2, 3]
assertArraysEqual(middle([1, 2, 3, 4]), [2, 3])

middle([1, 2, 3, 4, 5, 6]) // => [3, 4]
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4])
