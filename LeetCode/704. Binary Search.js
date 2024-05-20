// Runtime 46 ms Beats 94.81% of users with JavaScript
// Memory 51.97 MB Beats 59.17% of users with JavaScript
// https://leetcode.com/problems/binary-search/

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let startIndex = 0;
  let endIndex = nums.length - 1;

  while (startIndex !== endIndex) {
    const mid = Math.floor((endIndex + startIndex) / 2);
    if (nums[mid] < target) {
      if (startIndex === mid) {
        startIndex++;
      } else {
        startIndex = mid;
      }
    } else if (nums[mid] > target) {
      endIndex = mid;
    } else if (nums[mid] === target) {
      return mid;
    }
  }

  return nums[startIndex] === target ? startIndex : -1;
};
