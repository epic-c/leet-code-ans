/**
 * @param {number[][]} grid
 * @param {number} k
 * @return {number[][]}
 */
var shiftGrid = function(grid, k) {
    let margeArr = [].concat.apply([], grid);
    let anchor = k > margeArr.length ? k % margeArr.length : k
    let remainArr = margeArr.splice(margeArr.length - anchor, anchor);

    margeArr = remainArr.concat(margeArr);

    let result = []
    margeArr.forEach((element, index) => {
        if (index == 0 || index % grid[0].length == 0) { result.push([]); }
        result[result.length - 1].push(element)
    });

    return result;
};