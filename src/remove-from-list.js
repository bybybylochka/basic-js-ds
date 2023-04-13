const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {ListNode} head
 * @param {Number} k
 * @return {ListNode}
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
function removeKFromList(head, k) {
  while(indexOf(head, k)>=0){
    head=removeAt(head, indexOf(head, k));
  }
  return head;
}

function removeAt(head, position){
  let current=head;
  if(position===0){
    head=current.next;
  }
  else {
    let previous = null;
    let index = 0;
    while (index < position) {
      previous = current;
      current = current.next;
      index++;
    }
    previous.next = current.next;
  }
  return head;
}

function indexOf(head, k){
  let current=head;
  let index=0;

  while(current){
    if(current.value===k){
      return index;
    }
    current=current.next;
    index++;
  }
  return -1;
}

module.exports = {
  removeKFromList
};
