//回文字符串 正读反读都一样
function isPalind(str, left, right) {
    while (left < right) {
        if (str[left++] != str[right--]) return false;
    }
    return true;
}
var validPalindrome = function (s) {
    let left = 0, right = s.length - 1;
    while (left < right) {
        if (s[left] != s[right]) {
            return (isPalind(s, left + 1, right) || isPalind(s, left, right - 1))
        }
        left++;
        right--;
        return true;
    }

};
console.log(validPalindrome("abc"));
console.log(validPalindrome("abca"));