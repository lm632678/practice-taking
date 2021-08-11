/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let len = s.length;
    let map = new Map()
    for (let i = 0; i < len; i++) {
        if (map.has(s[i])) {
            let value = map.get(s[i]);
            if (value.length == 2)
                value[1] = i;
            else map.get(s[i]).push(i);
        }
        else map.set(s[i], [i, i])
    };
    let arr = []
    map.forEach(t => arr.push(t))
    arr = arr.sort((a, b) => a[0] - b[0]);
    console.log(arr)
    let res = [];
    let prev = arr[0][1];
    for (let i = 1; i < arr.length; i++) {
        let t = arr[i];
        if (prev > t[0]) {
            prev = Math.max(prev, t[1])
        }
        else {
            res.push(prev + 1);
            prev = t[1]
        }
        if (i == arr.length - 1&&arr.includes(prev+1)==false) res.push(prev + 1);
    }
    for (let i = res.length - 1; i > 0; i--) {
        res[i] -= res[i - 1]
    }
    console.log(res)
    return res;
}
partitionLabels("ababcbacadefegdehijhklij");
