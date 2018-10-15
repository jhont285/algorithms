const { ChainNode } = require('../Utilities');

class LinkedStack {
  constructor() {
    this.topNode = null;
  }

  isEmpty() {
    return this.topNode === null;
  }

  push(element) {
    this.topNode = new ChainNode(element, this.topNode);
  }

  pop() {
    if (!this.isEmpty()) {
      const topElement = this.topNode.element;
      this.topNode = this.topNode.next;
      return topElement;
    }
  }

  peek() {
    if (!this.isEmpty()) {
      return this.topNode.element;
    }
  }
}

module.exports = LinkedStack;
