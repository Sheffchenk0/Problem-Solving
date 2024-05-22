// Runtime 43ms Beats 98.74% of users with JavaScript
// Memory 50.08 MB Beats 59.97% of users with JavaScript

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const stack = [s[0]];
  const map = {
    '}': '{',
    ')': '(',
    ']': '[',
  };

  for (let i = 1; i < s.length; i++) {
    const symb = s[i];

    if (map[symb]) {
      if (stack.at(-1) === map[symb]) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      stack.push(symb);
    }
  }

  return stack.length === 0;
};
