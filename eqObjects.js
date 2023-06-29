const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const eqArrays = function(array1, array2) {
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


// const shirtObject = { color: "red", size: "medium" };
// const anotherShirtObject= { size: "medium", color: "red" };
// const shirtObject2 = { color: "red", size: "medium" };
// const anotherShirtObject2= { colors: "red", size: "medium"};
// // eqObjects(shirtObject , anotherShirtObject); // => true
// // eqObjects(shirtObject2 , anotherShirtObject2);
// const longSleeveShirtObject= { size: "medium", color: "red", sleeveLength: "long" };
// // eqObjects(shirtObject , longSleeveShirtObject); // => false

// const multiColorShirtObject = { colors: ["red", "blue"], size: "medium" };
// const anotherMultiColorShirtObject = { size: "medium", colors: ["red", "blue"] };
// // eqObjects(multiColorShirtObject  , anotherMultiColorShirtObject); // => true

// const longSleeveMultiColorShirtObject= { size: "medium", colors: ["red", "blue"]};
// console.log(eqObjects(multiColorShirtObject, longSleeveMultiColorShirtObject));