/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function(n) {
    let result = 0;
    Array.from(n.toString(2)).forEach(e => {
        if (e == "1") result++
    });
    return result
};