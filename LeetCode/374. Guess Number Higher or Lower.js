// Runtime 46 ms Beats 81.25% of users with JavaScript
// Memory 48.70 MB Beats 52.24% of users with JavaScript

/**
 * Forward declaration of guess API.
 * @param {number} num   your guess
 * @return 	     -1 if num is higher than the picked number
 *			      1 if num is lower than the picked number
 *               otherwise return 0
 * var guess = function(num) {}
 */

/**
 * @param {number} n
 * @return {number}
 */
var guessNumber = function (n) {
  let start = 1;
  while (true) {
    let mid = Math.floor((start + n) / 2);
    let g = guess(mid);
    if (g === -1) {
      n = mid - 1;
    } else if (g === 1) {
      start = mid + 1;
    } else {
      return mid;
    }
  }
};
