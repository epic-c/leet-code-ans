/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    digits[digits.length - 1] = digits[digits.length - 1] + 1

    if (digits[digits.length - 1] < 10) { return digits }
    for (let i = digits.length - 1; i >= 0; i--) {
        if (parseInt(digits[i]) < 10) return digits
        if (i == 0) digits[i] = 10
        else {
            digits[i] = 0
            digits[i - 1] = digits[i - 1] + 1
        }
    }
    if (digits[0] == 10) {
        digits[0] = 0
        digits.unshift(1)
    }
    return digits
};