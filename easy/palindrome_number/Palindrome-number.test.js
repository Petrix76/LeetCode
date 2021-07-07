const { test, expect } = require("@jest/globals");
const isPalindrome = require('./Palindrome-number')

test('is palindrome 121', () => {
    expect(isPalindrome(121)).toBe(true);
});

test('reverse number -101', () => {
    expect(isPalindrome(-101)).toBe(false);
});

test('reverse number 10', () => {
    expect(isPalindrome(10)).toBe(false);
});