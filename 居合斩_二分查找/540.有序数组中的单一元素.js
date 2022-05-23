/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function (nums) {
    if (nums.length == 1) return nums[0];
    let left = 0, right = nums.length;
    let lIdx, rIdx;
    let mid;
    while (left < right) {
        mid = left + right >> 1;
        console.log(mid)
        if (nums[mid] === nums[mid + 1]) {
            lIdx = mid;
            rIdx = mid + 1
        }
        else if (nums[mid] === nums[mid - 1]) {
            lIdx = mid - 1;
            rIdx = mid
        }
        else {
            console.log(nums[mid])
            return nums[mid];
        }
        if (lIdx % 2 === 0 && rIdx % 2 === 1) left = mid + 1;
        else right = mid - 1;
    }
    return nums[left]
};

singleNonDuplicate([3, 3, 7, 7, 10, 11, 11])
