// 字符串对象化，好用来比较
function toMap(str) {
    let r = {};
    for (let i = 0; i < str.length; i++) {
      let a = str[i];
      r[a] = r[a] ? ++r[a] : 1;
    }
    return r;
  }
  
  // 比较两个当前对象和输入的字符串对象比较，包含不包含
  function check(map, base) {
    for (let key in base) {
      if (!map[key] || map[key] < base[key]) {
        return false;
      }
    }
    return true;
  }
  
  var minWindow = function (s, t) {
    if (s.length < t.length) {
      return "";
    }
    let map = {},
      baseMap = toMap(t);
    let left = 0,
      right = 0,
      len = s.length;
    let res = "";
    while (right <= len) {
      // 判断当前串是否包含t
      let contain = check(map, baseMap);
      if (contain) {
        // 如果包含，移动左指针，并从对象中，删除这个字符，并判断返回值
        if (res === "") {
          res = s.slice(left, right);
        } else {
          if (right - left < res.length) 
            res = s.slice(left, right);
        }
        let word = s[left];
        if (map[word] > 1) {
          map[word] = map[word] - 1;
        } else {
          delete map[word];
        }
        left++;
      } else {
        // 如果不包含，移动右指针
        right++;
        if (right > len) {
          break;
        }
        let word = s[right - 1];
        map[word] = map[word] ? ++map[word] : 1;
      }
    }
    return res;
  };