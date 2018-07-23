class PriorityQueue {
  constructor(comparator = (a, b) => a > b) {
    this.compare = comparator;
    this.heap = [null];
  }

  peek() {
    return this.heap[1] || null;
  }

  isEmpty() {
    return this.heap.length < 2;
  }

  push(element) {
    this.heap.push(element);
    let child = this.heap.length - 1;
    let parent = Math.trunc(child / 2);
    while (child > 1 && this.compare(this.heap[child], this.heap[parent])) {
      [this.heap[child], this.heap[parent]] = [this.heap[parent], this.heap[child]];
      child = parent;
      parent = Math.trunc(parent / 2);
    }
  }

  pop() {
    const element = this.heap[1];
    this.heap[1] = this.heap.pop();

    const maxHeapify = (node) => {
      const leftChild = 2 * node;
      const rightChild = leftChild + 1;
      let largest = node;
      if (leftChild < this.heap.length && this.compare(this.heap[leftChild], this.heap[largest])) {
        largest = leftChild;
      }
      if (rightChild < this.heap.length && this.compare(this.heap[rightChild], this.heap[largest])) {
        largest = rightChild;
      }
      if (largest !== node) {
        [this.heap[node], this.heap[largest]] = [this.heap[largest], this.heap[node]];
        maxHeapify(largest);
      }
    }

    maxHeapify(1);
    return element;
  }

}

module.exports = PriorityQueue;
