// Runtime 54ms Beats 87.36% of users with JavaScript
// Memory 49.43 MB Beats 93.45% of users with JavaScript

/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  const map = new Map();

  for (let i = 0; i < s.length; i++) {
    map.set(s[i], i);
  }

  const res = [];
  let curr_r = map.get(s[0]);
  let curr_l = 0;
  for (let i = 0; i < s.length; i++) {
    curr_r = Math.max(curr_r, map.get(s[i]));

    if (i === curr_r) {
      res.push(curr_r - curr_l + 1);
      curr_l = i + 1;
    }
  }

  return res;
};
