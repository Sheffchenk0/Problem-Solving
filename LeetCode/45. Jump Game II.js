// Runtime 49 ms Beats 91.67%
// Memory 43.92MB Beats 57.40% of users with JavaScript

// O(n)

const jump = function (nums) {
  let jumps = 0;
  let i = 0;
  while (i < nums.length - 1) {
    let currentWay = 0;
    if (i + nums[i] >= nums.length - 1) {
      return jumps + 1;
    }
    for (let j = i + 1; j <= i + nums[i]; j++) {
      if (j + nums[j] >= currentWay + nums[currentWay]) {
        currentWay = j;
      }
    }
    jumps++;
    i = currentWay;
  }
  return jumps;
};
