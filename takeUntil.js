const takeUntil = function(array, func) {
  let newArray = [];
  for (let i of array) {
    if (func(i)) {
      return newArray;
    }
    if (!func(i)) {
      newArray.push(i);
    }
  }
  return newArray;
};

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


const data1 = [1, 2, 5, 7, 2, -1, 2, 4, 5];
const results1 = takeUntil(data1, x => x < 0);
assertArraysEqual(results1, [ 1, 2, 5, 7, 2 ]);



console.log('---');

const data2 = ["I've", "been", "to", "Hollywood", ",", "I've", "been", "to", "Redwood"];
const results2 = takeUntil(data2, x => x === ',');
assertArraysEqual(results2, [ 'I\'ve', 'been', 'to', 'Hollywood' ]);


