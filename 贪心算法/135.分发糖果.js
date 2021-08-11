/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
    let len = ratings.length
    if (len < 2) return len;
    let num = new Array(len).fill(1);
    for (let i = 1; i < len; ++i) {
        if (ratings[i] > ratings[i - 1]) num[i] = num[i - 1] + 1;
    }
    for (let i = len - 1; i > 0; --i) {
        if (ratings[i] < ratings[i - 1]) num[i - 1] = Math.max(num[i - 1], num[i] + 1);
    }
    return num.reduce((prev, next) => prev + next);
};
candy([1, 0, 2])