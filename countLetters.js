const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅✅✅ Assertion Passed: ${actual} === ${expected}`);
  } else {
    console.log(`🛑🛑🛑 Assertion Failed: ${actual} !==  ${expected}`);
  }
};

const countLetters = function(string) {
  let counts = {};
  for (let letter of string) {
    if (letter && letter !== " ") {
      let sum = 0;
      for (let i = 0; i < string.length; i++) {
        if (string[i] === letter) {
          sum++;
          counts[letter] = sum;
        }
      }
    }
  }
  console.log(counts);
  return counts;
};

countLetters("lighthouse in the house");

