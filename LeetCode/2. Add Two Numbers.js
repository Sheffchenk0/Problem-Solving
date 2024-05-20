// Runtime 106 ms Beats 66.41% of users with JavaScript
// Memory 55.65 MB Beats 58.02% of users with JavaScript

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    const result = {}
    let curr = result;
    let extra = 0;

    while (true) {
        const score = (l1?.val || 0) + (l2?.val || 0) + extra
        curr.val = score % 10;
        extra = Math.floor(score / 10);

        if (!l1?.next && !l2?.next) {
            if (extra > 0) {
                curr.next = {val: extra, next: null};
            } else {
                curr.next = null
            }
            return result;
        }
        l1 = l1?.next || null;
        l2 = l2?.next || null;

        curr.next = {}
        curr = curr.next;
    }
};