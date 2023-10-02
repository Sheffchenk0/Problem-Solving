// Runtime 51ms Beats 69.75%of users with JavaScript
// Memory 43.76MB Beats 53.37%of users with JavaScript

const diagonalSum = function (mat) {
  let sum = 0;
  for (let i = 0; i < mat.length; i++) {
    sum += mat[i][i] + mat[i][mat.length - i - 1];
  }
  if (mat.length % 2 === 1) {
    sum -= mat[(mat.length / 2) ^ 0][(mat.length / 2) ^ 0];
  }
  return sum;
};
