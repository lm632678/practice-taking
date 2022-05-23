/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
    let len = s.length;
    let map = new Map()
    for (let i = 0; i <= len; i++) {
        if (map.has(s[i])) {
            let value = map.get(s[i]);
            if (value.length == 2)
                value[1] = i;
            else value.push(i);
        }
    };
    console.log(map)
}
partitionLabels(ababcbacadefegdehijhklij);
