/**
 * @param {number[][]} points
 * @return {number}
 */
 var findMinArrowShots = function (points) {
    let len = points.length;
    if (len == 0) return 0;
    points = points.sort((a, b) => a[1] - b[1]);
    let prev = points[0][1];
    let res = 1;
    for (let i = 1; i < len; i++) {
        if (points[i][0] > prev) {
            res++;
            prev = points[i][1];
        }
    }
    return res;
};