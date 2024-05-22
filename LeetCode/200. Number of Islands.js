// Runtime 73ms Beats 53.16% of users with JavaScript
// Memory 52.45 MB Beats 59.15% of users with JavaScript

/**
 * @param {character[][]} grid
 * @return {number}
 */

const mark = (grid, R, C) => {
  grid[R][C] = '2';
  if (grid[R][C + 1] === '1') mark(grid, R, C + 1);
  if (grid[R][C - 1] === '1') mark(grid, R, C - 1);
  if (grid?.[R + 1]?.[C] === '1') mark(grid, R + 1, C);
  if (grid?.[R - 1]?.[C] === '1') mark(grid, R - 1, C);
};

var numIslands = function (grid) {
  const rowsL = grid.length;
  const colsL = grid[0].length;

  if (rowsL === 0) {
    return 0;
  }

  let count = 0;

  for (let R = 0; R < rowsL; R++) {
    for (let C = 0; C < colsL; C++) {
      if (grid[R][C] === '1') {
        count++;
        mark(grid, R, C);
      }
    }
  }

  return count;
};
