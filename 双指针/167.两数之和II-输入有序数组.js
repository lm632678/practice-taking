/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
    let left = 0, right = numbers.length - 1, sum = 0;
    while (left < right) {
        sum = numbers[left] + numbers[right];
        if (sum == target) break;
        else {
            if (sum > target) right--;
            else left++
        }
    }
    console.log(left + 1, right+1);
    return [left + 1, right+1]
};
twoSum([2,7,11,15],9)
