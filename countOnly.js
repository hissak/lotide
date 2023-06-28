
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countOnly = function(allItems, itemsToCount) {
  let newObject = {};
  for (let key in itemsToCount) {
    if (itemsToCount[key]) {
      let sum = 0;
      for (let i = 0; i < allItems.length; i++) {
        if (allItems[i] === key) {
          sum++;
        }
        newObject[key] = sum;
      }
    }
  }
  console.log(newObject);
  return newObject;
};

const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe",
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });


assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);


