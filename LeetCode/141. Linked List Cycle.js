// Runtime 59 ms Beats 81.49% of users with JavaScript
// Memory 52.82 MB Beats 68.72% of users with JavaScript
// https://leetcode.com/problems/linked-list-cycle/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  while (head?.next) {
    if (head.val === undefined) return true;
    head.val = undefined;
    head = head.next;
  }
  return false;
};
