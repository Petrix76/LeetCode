const { test, expect } = require("@jest/globals");
const removeElement = require('./Remove-element');

test('remove number 3 from array [3,2,2,3]', () => {
    nums = [3,2,2,3];
    target = 3;
    expect(removeElement(nums, target)).toBe(2);
});