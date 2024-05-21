// Runtime 38 ms Beats 98.61% of users with JavaScript
// Memory 49.22MB Beats 23.17% of users with JavaScript

/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function (matrix, target) {
  let m = matrix[0].length;
  let n = matrix.length;

  let start = 0;
  let end = n * m - 1;

  while (start <= end) {
    const mid = Math.floor((start + end) / 2);
    const row = Math.floor(mid / m);
    const col = mid % m;
    const val = matrix[row][col];
    if (val < target) {
      start = mid + 1;
    } else if (val > target) {
      end = mid - 1;
    } else {
      return true;
    }
  }
  return false;
};
