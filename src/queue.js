const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constuctor (){
    this.head=null;
    this.tail=null;
  }
  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    let new_node=new ListNode(value);
    if(this.tail){
      this.tail.next=new_node;
    }
    this.tail=new_node;
    if(!this.head){
      this.head=new_node;
    }
  }

  dequeue() {
    if(!this.head){
      return null;
    }
    let value=this.head.value;
    this.head=this.head.next;
    if(!this.head){
      this.tail=null
    }
    return value;
  }
}

module.exports = {
  Queue
};
