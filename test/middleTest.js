const eqArrays = require('../eqArrays');
const assertArraysEqual = require('../assertArraysEqual');
const middle = require('../middle');
const assert = require('chai').assert;


// assertArraysEqual(middle([1]), []);
// assertArraysEqual(middle([1, 2]), []);

console.log(middle([1, 2, 3])); // => [2]
// assertArraysEqual(middle([1, 2, 3]), [2]);

// middle([1, 2, 3, 4, 5]); // => [3]
// assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);

console.log(middle([1, 2, 3, 4])); // => [2, 3]
// assertArraysEqual(middle([1, 2, 3, 4]), [2, 3]);

console.log(middle([1, 2, 3, 4, 5, 6])); // => [3, 4]
// assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);

describe("middle", () => {
  it("returns [] for [1]", () => {
    assert.deepEqual(middle([1]), []);
  });
  it("returns [] for [1, 2]", () => {
    assert.deepEqual(middle([1, 2]), []);
  });
  it("returns [2] for [1, 2, 3]", () => {
    assert.deepEqual(middle([1, 2, 3]), [2]);
  });
});