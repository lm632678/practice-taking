/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
    let len = intervals.length
    if (len == 0) return 0;
    intervals = intervals.sort((a, b) => a[1] - b[1]);
    let total = 0, prev = intervals[0][1];
    for (let i = 1; i < len; ++i) {
        if (intervals[i][0] < prev) {
            ++total;
        } else {
            prev = intervals[i][1];
        }
    }
    console.log(total)
    return total;
};
eraseOverlapIntervals([[1, 2], [2, 3], [3, 4], [1, 3]])