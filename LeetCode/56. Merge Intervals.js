// Runtime 77ms Beats 97.88% of users with JavaScript
// Memory 57.72 MB Beats 84.71% of users with JavaScript

/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function(intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    const res = [intervals[0]];

    for(let i = 1; i < intervals.length; i++) {
        if (res.at(-1)[1] >= intervals[i][0]) {
            if (res.at(-1)[1] < intervals[i][1]) {
                res.at(-1)[1] = intervals[i][1];
            }
        } else {
            res.push(intervals[i])
        }
    }

    return res
};