// Runtime 64ms Beats 95.00%of users with JavaScript
// Memory Beats 98.33%of users with JavaScript

const winnerOfGame = function (colors) {
  let result = 0;
  let accumulateA = 0;
  let accumulateB = 0;

  for (let i = 0; i < colors.length; i++) {
    const color = colors[i];
    if (color === 'A') {
      accumulateA++;
      if (accumulateB > 2) {
        result -= accumulateB - 2;
      }
      accumulateB = 0;
    } else if (color === 'B') {
      accumulateB++;
      if (accumulateA > 2) {
        result += accumulateA - 2;
      }
      accumulateA = 0;
    }

    if (i + 1 === colors.length) {
      if (color === 'A' && accumulateA > 2) {
        result += accumulateA - 2;
      } else if (color === 'B' && accumulateB > 2) {
        result -= accumulateB - 2;
      }
    }
  }

  if (result > 0) {
    return true;
  }
  return false;
};
