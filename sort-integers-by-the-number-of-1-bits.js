var sortByBits = function(arr) {
    let core = []
    arr.forEach(item => {
        core.push({
            element: item,
            bits: ((item.toString(2)).replace(/0/g, "")).length
        })
    });

    core.sort((a, b) => a.bits - b.bits)

    let result = []
    core.forEach(item => {
        result.push(item.element)
    });

    return result
};