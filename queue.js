const LinkedList = require("./linked-list");

/** Node: node for a queue. */

class Node {
  val = null;
  next = null;

  constructor(val) {
    this.val = val;
  }
}

/** Queue: chained-together nodes where you can
 *  remove from the front or add to the back. */

class Queue {
  constructor(vals = []) {
    this._ll = new LinkedList(vals);
  }

  get first() {
    return this._ll.head;
  }

  get last() {
    return this._ll.tail;
  }

  get size() {
    return this._ll.length;
  }

  /** enqueue(val): add new value to end of the queue. Returns undefined. */

  enqueue(val) {
    this._ll.push(val);
  }

  /** dequeue(): remove the node from the start of the queue
   * and return its value. Should throw an error if the queue is empty. */

  dequeue() {
    return this._ll.shift();
  }

  /** peek(): return the value of the first node in the queue. */

  peek() {
    return this._ll.head.val;
  }

  /** isEmpty(): return true if the queue is empty, otherwise false */

  isEmpty() {
    return (!this._ll.head);
  }
}

module.exports = Queue;
