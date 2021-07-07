const { test, expect } = require("@jest/globals");
const reverse = require('./Reverse-Integer')

test('reverse number 123', () => {
    expect(reverse(123)).toBe(321);
});

test('reverse number -123', () => {
    expect(reverse(-123)).toBe(-321);
});

test('reverse number 120', () => {
    expect(reverse(120)).toBe(21);
});

test('reverse number 0', () => {
    expect(reverse(0)).toBe(0);
});

test('reverse number 2^31', () => {
    expect(reverse(Math.pow(2,31))).toBe(0);
});

test('reverse number -2^31', () => {
    expect(reverse((-1) * Math.pow(2,31))).toBe(0);
});