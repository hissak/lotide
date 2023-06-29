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

const eqObjects = function(object1, object2) {
  let truthyFalsey;
  for (let key in object1) {
    
    if (object2[key] && object1[key].length !== object2[key].length) {
      
      return false;
    }
    if (Array.isArray(object1[key])) {
      truthyFalsey = eqArrays(object1[key], object2[key]);
      if (!truthyFalsey) {
        return false;
      }
    } else {
      if (object1[key] === object2[key]) {
        truthyFalsey = true;
      } else {
        return false;
      }
    }
  }
  return truthyFalsey;
};

const assertObjectsEqual = function(object1, object2) {
  const inspect = require('util').inspect;
  if (eqObjects(object1, object2)) {
    console.log(`✅✅✅ Assertion Passed: ${inspect(object1)} === ${inspect(object2)}`);
  } else if (!eqObjects(object1, object2)) {
    console.log(`🛑🛑🛑 Assertion Failed: ${inspect(object1)} !==  ${inspect(object2)}`);
  }
};

const shirtObject = { color: "red", size: "medium" };
const anotherShirtObject = { size: "medium", color: "red" };

assertObjectsEqual(shirtObject, anotherShirtObject);