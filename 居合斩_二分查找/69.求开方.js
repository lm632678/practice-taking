/**
 * @param {number} x
 * @return {number}
 */
// var mySqrt = function (a) {
//     if (a == 0) return a;
//     let l = 1, r = a, mid, sqrt;
//     while (l <= r) {
//         mid = parseInt(l + (r - l) / 2);
//         sqrt = parseInt(a / mid);
//         if (sqrt == mid) {
//             return mid;
//         } else if (mid > sqrt) {
//             r = mid - 1;
//         } else {
//             l = mid + 1;
//         }
//     }
//     return parseInt(r);
// };


var mySqrt = function (a) {
    let x = a;
    while (x * x > a) {
        x = parseInt((x + parseInt(a / x)) / 2)
    }
    return x;
};
console.log(parseInt(mySqrt(8)));