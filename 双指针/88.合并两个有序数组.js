/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function (nums1, m, nums2, n) {
    let end = nums1.length - 1;
    m--, n--;
    while (m >= 0 && n >= 0) {
        nums1[end--] = nums1[m] >= nums2[n] ? nums1[m--] : nums2[n--];
        console.log(end, nums1[end + 1])
    }
    while (n >= 0) {
        nums1[n] = nums2[n--]
    }
    return nums1;
};
merge([0], 0, [1], 1)