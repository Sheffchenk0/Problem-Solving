// Runtime 61ms Beats 64.98% of users with JavaScript
// Memory 50.32 MB Beats 54.18% of users with JavaScript

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const map = {};

    for(let i = 0; i < nums.length; i++) {
        if (map[target - nums[i]] !== undefined) {
            return [map[target-nums[i]], i];
        }
        map[nums[i]] = i;
    }
};