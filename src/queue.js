const { NotImplementedError } = require('../extensions/index.js');

class listNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}


class Queue {

  constructor(){
    this.head = null;
    this.tail = null;
  }

  getUnderlyingList() {
    return this.head;
  }

  enqueue(value) {
    const newNode = new listNode(value);
    if (!this.head) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
  }

  dequeue() {
    if (!this.head) return undefined;
    const value = this.head.value;
    this.head = this.head.next;
    if (!this.head) this.tail = null;
    return value;
  }
}

module.exports = {
  Queue
};
