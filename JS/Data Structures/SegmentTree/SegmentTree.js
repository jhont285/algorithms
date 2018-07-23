class SegmentTree {
  constructor(array) {
    this.tree = new Array(2 * array.length);
    this.array = [null].concat(array);

    const build = (node, start, end) => {
      if (start === end) {
        this.tree[node] = this.array[start];
      } else {
        const middle = Math.trunc((start + end) / 2);
        const leftChild = 2 * node;
        const rightChild = 2 * node + 1;

        build(leftChild, start, middle);
        build(rightChild, middle + 1, end);

        this.tree[node] = Math.min(this.tree[leftChild], this.tree[rightChild]);
      }
    };

    build(1, 1, this.array.length - 1, array);
  }

  update(index, value) {
    const updateAux = (node, start, end) => {
      if (start === end) {
        this.tree[node] = value;
      } else {
        const middle = Math.trunc((start + end) / 2);
        const leftChild = 2 * node;
        const rightChild = 2 * node + 1;

        if (start <= index && index <= middle) {
          updateAux(leftChild, start, middle, index, value);
        } else {
          updateAux(rightChild, middle + 1, end, index, value);
        }

        this.tree[node] = Math.min(this.tree[leftChild], this.tree[rightChild]);
      }
    };

    updateAux(1, 1, this.array.length - 1);
  }

  query(left, right) {
    const queryAux = (node, start, end) => {
      if (right < start || end < left) {
        return Infinity;
      }

      if (left <= start && end <= right) {
        return this.tree[node];
      }

      const middle = Math.trunc((start + end) / 2);
      const p1 = queryAux(2 * node, start, middle, left, right);
      const p2 = queryAux(2 * node + 1, middle + 1, end, left, right);
      return Math.min(p1, p2);
    };
    return queryAux(1, 1, this.array.length - 1);
  }
}

module.exports = SegmentTree;
