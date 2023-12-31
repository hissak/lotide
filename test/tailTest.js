
const tail = require('../tail');

const assertArraysEqual = require('../assertArraysEqual');

const words = ["Yo Yo", "Lighthouse", "Labs"];

const assert = require('chai').assert;


// tail(words); // no need to capture the return value since we are not checking it
// assertEqual(words.length, 3); // original array should still have 3 elements!

describe("tail", () => {
  it("returns true for [1] and []", () => {
    assert.deepEqual(tail([1]), []);
  });
  it("returns [2] for [1, 2]", () => {
    assert.deepEqual(tail([1, 2]), [2]);
  });
  it("returns [2, 3] for [1, 2, 3]", () => {
    assert.deepEqual(tail([1, 2, 3]), [2, 3]);
  });
});
