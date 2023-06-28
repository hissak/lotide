const letterPositions = function(string) {
  let counts = {};
  for (let letter of string) {
    if (letter && letter !== " ") {
      let output = [];
      for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
          output.push(i);
          counts[letter] = output;
        }
      }
    }
  }
  console.log(counts);
  return counts;
};

letterPositions('lighthouse in the house');
letterPositions('hello world');
letterPositions('');


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


assertArraysEqual(letterPositions('lighthouse in the house')["i"], [1, 11]);
assertArraysEqual(letterPositions('lighthouse in the house')["o"], [6, 19]);
assertArraysEqual(letterPositions('lighthouse in the house')["e"], [9, 16, 22]);