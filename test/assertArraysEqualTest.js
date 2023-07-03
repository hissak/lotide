const eqArrays = require('../eqArrays')
const assertArraysEqual = require('../assertArraysEqual');
const assert = require('chai').assert;




describe("asserArraysEqual", () => {
  it("returns Assertion Passed for [1, 2, 3] === [1, 2, 3]", () => {
    assert.strictEqual(assertArraysEqual([1, 2, 3], [1, 2, 3]), "✅✅✅ Assertion Passed: 1,2,3 === 1,2,3");
  });
  it("returns Assertion Failed for ['1', '2', '3'] === ['1', '2', 3]", () => {
    assert.strictEqual(assertArraysEqual(['1', '2', '3'], ['1', '2', 3]), "🛑🛑🛑 Assertion Failed: 1,2,3 !==  1,2,3");
  });
});