/**
Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the
value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

Example 1:

Input: x = 123
Output: 321
Example 2:

Input: x = -123
Output: -321
Example 3:

Input: x = 120
Output: 21
Example 4:

Input: x = 0
Output: 0

Constraints: -2^31 <= x <= 2^31 - 1
*/

/**
 * @param {number} x
 * @return {number}
 */
 var reverse = function(x) {
    max = Math.pow(2,31) - 1;
    min = (-1) * max;
    reversedNumber = parseInt(x.toString().split('').reverse().join(''));

    if(x < min || x > max || x == 0 || reversedNumber < min || reversedNumber > max){
        return 0;
    }

    if(x < 0){
        return (-1) * reversedNumber;
    }

    return reversedNumber;
};

module.exports = reverse;