const assertEqual = require('../assertEqual');
const eqArrays = require('../eqArrays');
const assert = require('chai').assert;

// console.log(eqArrays(["1", "2", "3"], ["1", "2", 3]));
// assertEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
// assertEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), true);
// assertEqual(eqArrays([1, 2, 3], [3, 2, 1]), true);

describe("eqArrays", () => {
  it("returns false for ['1', '2', '3'] and ['1', '2', 3]", () => {
    assert.strictEqual(eqArrays(["1", "2", "3"], ["1", "2", 3]), false);
  });
  it("returns true for [1, 2, 3] and [1, 2, 3]", () => {
    assert.strictEqual(eqArrays([1, 2, 3], [1, 2, 3]), true);
  });
});