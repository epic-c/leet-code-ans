var longestCommonPrefix = function(strs) {
    let charsList = []
    strs.forEach(element => {
        charsList.push(element.split(''))
    });
    let result = ""
    for (let i = 0; i < charsList[0].length; i++) {
        let isEqual = true;
        for (let j = 1; j < charsList.length; j++) {
            if (charsList[0][i] != charsList[j][i]) {
                isEqual = false;
                break;
            }
        }
        if (isEqual) {
            result += charsList[0][i]
        } else break;
    }
    return result;
}