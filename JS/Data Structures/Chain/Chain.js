const { ChainNode } = require('../Utilities');


class Chain {
  constructor() {
    this.firstNode = null;
    this.size = 0;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * @param {number} index
   */
  get(index) {
    this.checkIndex(index);

    let currentNode = this.firstNode;
    for (let i = 0; i < index; i += 1) {
      currentNode = currentNode.next;
    }

    return currentNode.element;
  }

  /**
   * @param {*} theElement
   */
  indexOf(theElement) {
    let currentNode = this.firstNode;
    for (let i = 0; i < this.size; i += 1) {
      if (currentNode.element === theElement) {
        return i;
      }
      currentNode = currentNode.next;
    }

    return -1;
  }

  /**
   * @param {number} index
   * @return {*}
   */
  remove(index) {
    this.checkIndex(index);

    let elementRemoved;
    if (index === 0) {
      elementRemoved = this.firstNode.element;
      this.firstNode = this.firstNode.next;
    } else {
      let p = this.firstNode;
      for (let i = 0; i < index - 1; i += 1) {
        p = p.next;
      }

      elementRemoved = p.next.element;
      p.next = p.next.next;
    }

    this.size -= 1;
    return elementRemoved;
  }

  add(index, theElement) {
    if (index < 0 || index > this.size) {
      throw new RangeError(`index= ${index} size= ${this.size}`);
    }
    if (index === 0) {
      this.firstNode = new ChainNode(theElement, this.firstNode);
    } else {
      let p = this.firstNode;
      for (let i = 0; i < index - 1; i += 1) {
        p = p.next;
      }

      p.next = new ChainNode(theElement, p.next);
    }

    this.size += 1;
  }

  /**
   * @override
   * @return {string}
   */
  toString() {
    let s = '[';
    let p = this.firstNode;
    for (let i = 0; i < this.size - 1; i += 1) {
      s += ` ${p.element},`;
      p = p.next;
    }
    if (this.size > 0) {
      s += ` ${p.element}`;
    }
    s += ' ]';
    return s;
  }

  /**
   * @param {number} index
   */
  checkIndex(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError(`index= ${index} size= ${this.size}`);
    }
  }
}

module.exports = Chain;
