const assertEqual = require('../assertEqual');
const assert = require('chai').assert;

// assertEqual("Lighthouse Labs", "Lighthouse Labs");
// assertEqual(1, 2);

describe("assertEqual", () => {
  it("returns true for 1 and 1", () => {
    assert.strictEqual(assertEqual(1, 1), "✅✅✅ Assertion Passed: 1 === 1");
  });
  it("returns false for '5' and '7'", () => {
    assert.strictEqual(assertEqual(5, 7), "🛑🛑🛑 Assertion Failed: 5 !==  7"); 
  });
});
