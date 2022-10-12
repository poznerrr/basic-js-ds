const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(l, k) {
  function nextNotK(ishNode) {
    if (ishNode.value === k) {
      if (ishNode.next === null) {
        return null;
      } else {
        return nextNotK(ishNode.next);
      }
    } else {
      return ishNode;
    }
  }
  let head = l;
  while (head.value === k || head.next.value === k) {
    if (head.next === null) {
      head = null;
      return null;
    }
    head = head.next
  }
  let node = head;
  while (node !== null) {
    node.next = node.next === null ? null : nextNotK(node.next);
    node = node.next;
  }
  return head;

}
module.exports = {
  removeKFromList
};
