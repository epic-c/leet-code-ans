var isPalindrome = function(x) {
    if (x < 0) return false;
    let chars = x.toString().split("")

    for (let i = 0; i < Math.floor(chars.length / 2); i++) {
        if (chars[i] != chars[(chars.length - 1) - i]) {
            return false;
        }
    }
    return true;
}