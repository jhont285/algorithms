/**
 * Binary Indexed (Fenwick) Tree
 */
class FenwickTree {
  constructor(array) {
    array.unshift(null);
    this.tree = new Int32Array(array.length);
    for (let i = 1; i < this.tree.length; i += 1) {
      this.update(i, array[i]);
    }
  }

  update(x, value) {
    while (x < this.tree.length) {
      this.tree[x] += value;
      x += (x & (-x));
    }
  }

  query(x) {
    let answer = 0;
    while (x > 0) {
      answer += this.tree[x];
      x -= (x & (-x));
    }

    return answer;
  }

  range(left, right) {
    return this.query(right) - this.query(left - 1);
  }
}

module.exports = FenwickTree;
