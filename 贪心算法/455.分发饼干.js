/**
 * @param {number[]} childrens
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (childrens, cooki) {
    let child = 0, cookie = 0;
    childrens = childrens.sort((a, b) => a - b);
    s = s.sort((a, b) => a - b);
    let glen = childrens.length, slen = s.length;
    while (child < glen && cookie < slen) {
        if (childrens[child] <= s[cookie]) child++;
        cookie++;
    }
    return child;
};