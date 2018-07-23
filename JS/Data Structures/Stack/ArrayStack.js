class ArrayStack {
  constructor() {
    this.stack = new Array(10);
    this.size = 0;
  }

  isEmpty() {
    return this.size === 0;
  }

  push(element) {
    if (this.size + 1 === this.stack) {
      const tmpStack = this.stack;
      this.stack = new Array(2 * this.stack.length);
      tmpStack.forEach((item, index) => { this.stack[index] = item; });
    }
    this.size += 1;
    this.stack[this.size] = element;
  }

  peek() {
    if (!this.isEmpty()) {
      return this.stack[this.size];
    }
  }

  pop() {
    if (!this.isEmpty()) {
      const topElement = this.stack[this.size];
      this.size -= 1;
      return topElement;
    }
  }
}

module.exports = ArrayStack;
