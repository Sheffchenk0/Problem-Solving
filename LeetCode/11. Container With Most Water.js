// Runtime 60 ms Beats 86.60% of users with JavaScript
// Memory 57.24 MB Beats 38.25% of users with JavaScript

/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  let left = 0;
  let right = height.length - 1;

  let max = 0;

  while (left < right) {
    const lValue = height[left];
    const rValue = height[right];

    max = Math.max((right - left) * Math.min(lValue, rValue), max);

    if (lValue < rValue) {
      left++;
    } else {
      right--;
    }
  }

  return max;
};
