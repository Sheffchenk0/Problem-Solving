// Runtime 48ms Beats 87.65% of users with JavaScript
// Memory 42.90MB Beats 57.62% of users with JavaScript

var removeNthFromEnd = function (head, n) {
  if (head.next === null) {
    return null;
  }

  const listToArr = [head.val];
  let h = head.next;
  while (h) {
    listToArr.push(h.val);
    h = h.next;
  }
  listToArr.splice(-n, 1);
  listToArr.reverse();

  const createList = (values) => {
    const list = {};
    if (values.length) {
      list.val = values.at(-1);
      values.pop();
      list.next = createList(values);
      return list;
    }
    return null;
  };

  return createList(listToArr);
};
