// Memory 50.46 MB Beats 99.61% of users with JavaScript
// Runtime 55ms Beats 78.19% of users with JavaScript

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head) {
    let result = {};
    let last = null;

    if (head === null) return null

    do {
        result = {val: head.val, next: last};
        last = result;
        head = head.next
    } while (head !== null)

    return result
};