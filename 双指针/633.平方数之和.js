/**
 * @param {number} c
 * @return {boolean}
 */
var judgeSquareSum = function (c) {
    for (let a = 0; a * a <= c; a++) {
        const b = Math.sqrt(c - a * a);
        if (b === parseInt(b))
            return true
    }
    return false;
};
console.log(judgeSquareSum(9))
console.log(judgeSquareSum(5))
console.log(judgeSquareSum(3))
console.log(judgeSquareSum(4))

