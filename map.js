const words = ["ground", "control", "to", "major", "tom"];

const map = function(array, callback) {
  const results = [];
  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};


const results1 = map(words, word => word[0]);
//console.log(results1);
const results2 = map(words, word => word[1]);
//console.log(results2);
const results3 = map(words, word => word[2]);
console.log(results3);

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

assertArraysEqual(results1, [ 'g', 'c', 't', 'm', 't' ]
);
assertArraysEqual(results2, [ 'r', 'o', 'o', 'a', 'o' ]
);
assertArraysEqual(results3, [ 'o', 'n', undefined, 'j', 'm' ]
);