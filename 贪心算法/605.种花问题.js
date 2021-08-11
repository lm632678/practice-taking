/**
 * @param {number[]} flowerbed
 * @param {number} n
 * @return {boolean}
 */
var canPlaceFlowers = function (flowerbed, n) {
    let res = 0;
    let prev = -1;
    flowerbed.unshift(0);
    flowerbed.push(0);
    for (let i = 1; i < flowerbed.length; i++) {
        if (flowerbed[i] == 0) {
            if (flowerbed[i - 1] == 0 && flowerbed[i + 1] == 0) {
                flowerbed[i] = 1;
                res++;
            }
        }
    }
    return res >= n ? true : false;
};
canPlaceFlowers([0, 0], 1)