/**
 * @param {string} s
 * @param {string[]} dictionary
 * @return {string}
 */
var findLongestWord = function (s, dictionary) {
    dictionary = dictionary.sort((a, b) => a.length - b.length || +(b > a) || +(a === b) - 1)
    let len = dictionary.length;
    while (len) {
        if (isLongest(s, dictionary[--len])) return dictionary[len];
    }
    return "";
};
function isLongest(str, dic) {
    let slen = str.length - 1, dlen = dic.length - 1;
    while (slen >= 0 && dlen >= 0) {
        if (str[slen--] == dic[dlen]) dlen--;
    }
    return dlen === -1;
}
console.log(findLongestWord("abpcplea", ["ale", "apple", "monkey", "plea"]))
console.log(findLongestWord("abpcplea", ["a", "b", "c"]))
console.log(findLongestWord("abce", ["abe", "abc"]))