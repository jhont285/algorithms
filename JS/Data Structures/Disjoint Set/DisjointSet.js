/**
 * A fast implementation of Disjoint-set data structure
 */
class DisjointSet {
  constructor() {
    /** @private */ this.parent = {};
    /** @private */ this.height = {};
    /** @private */ this.size = {};
    /** @private */ this.sets = 0;
  }

  /**
   * Add new node at the disjoint set
   * @param {*} node
   */
  add(node) {
    if (this.parent[node] === undefined) {
      this.parent[node] = node;
      this.height[node] = 0;
      this.size[node] = 1;
      this.sets += 1;
    }
  }

  /**
   * Returns the index of tree's root of the current node
   * @param {*}
   * @returns {*}
   */
  findSet(node) {
    let root = node;

    while (root !== this.parent[root]) {
      root = this.parent[root];
    }

    let tmp;
    while (root !== this.parent[node]) {
      tmp = this.parent[node];
      this.parent[node] = root;
      this.height[tmp] = 0;
      node = tmp;
    }

    return root;
  }

  /**
   * Find the index of tree's root of the node
   * @param {*} node - Node
   * @returns {*} the root of p
   */
  findSetRecursive(node) {
    if (node === this.parent[node]) {
      return node;
    }

    this.parent[node] = this.findSetRecursive(this.parent[node]);
    return this.parent[node];
  }

  /**
   * @param {*} nodeP
   * @param {*} nodeQ
   * @returns {boolean} true if p and q are in the same set, false in otherwise
   */
  isSameSet(nodeP, nodeQ) {
    return this.findSet(nodeP) === this.findSet(nodeQ);
  }

  /**
   * Join the trees that contains the nodes
   * @param {*} nodeP
   * @param {*} nodeQ
   */
  unionSet(nodeP, nodeQ) {
    const rootP = this.findSet(nodeP);
    const rootQ = this.findSet(nodeQ);

    if (rootP !== rootQ) {
      if (this.height[rootP] < this.height[rootQ]) {
        this.parent[rootP] = rootQ;
        this.size[rootQ] += this.size[rootP];
      } else {
        this.parent[rootQ] = rootP;
        this.size[rootP] += this.size[rootQ];
        if (this.height[rootP] === this.height[rootQ]) {
          this.height[rootP] += 1;
        }
      }
      this.sets -= 1;
      return true;
    }

    return false;
  }

  /**
   * @param {*} node
   * @return {number}
   */
  sizeOfSet(node) {
    const rootNode = this.findSet(node);
    return this.size[rootNode];
  }

  /**
   * @return {number}
   */
  numSets() {
    return this.sets;
  }


  /**
   * @override
   * @returns {string}
   */
  toString() {
    const output = [];
    for (const node in this.parent) {
      output.push(`[${node} -> ${this.parent[node]}]`);
    }
    return output.join(', ');
  }
}

module.exports = DisjointSet;
