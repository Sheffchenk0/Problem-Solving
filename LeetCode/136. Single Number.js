// Runtime 52ms Beats 86.52% of users with JavaScript
// Memory 49.69 MB Beats 94.62% of users with JavaScript

/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let n = 0;
    nums.forEach(v => n^=v);
    return n
};