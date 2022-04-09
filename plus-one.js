/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1]++;

    if (digits[digits.length - 1] < 10) { return digits; }
    for (let i = digits.length - 1; i >= 0; i--) {
        if (digits[i] < 10) return digits;
        digits[i] = 0;
        if (i == 0) {
            digits.splice(0, 0, 1)
            return digits;
        }
        digits[i - 1]++;
    }
};