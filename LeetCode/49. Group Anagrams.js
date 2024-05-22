// Runtime 106ms Beats 83.39% of users with JavaScript
// Memory 61.96 MB Beats 83.29% of users with JavaScript

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const res = {};

  for (let i = 0; i < strs.length; i++) {
    const str = strs[i];
    const nStr = str.split('').sort().join('');

    if (!res[nStr]) {
      res[nStr] = [str];
    } else {
      res[nStr].push(str);
    }
  }

  return Object.values(res);
};
