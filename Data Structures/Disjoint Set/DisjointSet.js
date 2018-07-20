/**
 * This data structure is awesome
 */
class DisjointSet {
  /**
   * The index begin from zero to n
   * @param {Array} [nodes=[]] - The numbers of the nodes
   */
  constructor(nodes = []) {
    /** @private */ this.parent = {};
    /** @private */ this.height = {};
    /** @private */ this.size = {};
    /** @private */ this.sets = 0;

    nodes.forEach((item) => { this.add(item); });
  }

  /**
   * Add new new at the disjoint set
   * @param {*} node - new node
   */
  add(node) {
    this.parent[node] = node;
    this.height[node] = 0;
    this.size[node] = 1;
    this.sets += 1;
  }

  /**
   * Find the index of tree's root of the current node
   * @param {*} currentNode - Node
   * @returns {*} the root of p
   */
  findSet(currentNode) {
    let root = currentNode;

    while (root !== this.parent[root]) {
      root = this.parent[root];
    }

    let tmpNode;
    while (root !== this.parent[currentNode]) {
      tmpNode = this.parent[currentNode];
      this.parent[currentNode] = root;
      this.height[tmpNode] = 0;
      currentNode = tmpNode;
    }

    return root;
  }

  /**
   * Find the index of tree's root of the current node
   * @param {*} currentNode - Node
   * @returns {*} the root of p
   */
  findSetRecursive(currentNode) {
    if (currentNode === this.parent[currentNode]) {
      return currentNode;
    }

    this.parent[currentNode] = this.findSetRecursive(this.parent[currentNode]);
    return this.parent[currentNode];
  }

  /**
   * Verify if the nodes are in same set
   * @param {number} nodeP - Node
   * @param {number} nodeQ - Node
   * @returns {boolean} true if p and q are in the same set, false in otherwise
   */
  isSameSet(nodeP, nodeQ) {
    return this.findSet(nodeP) === this.findSet(nodeQ);
  }

  /**
   * Join the trees that contains the nodes
   * @param {number} nodeP - Node
   * @param {number} nodeQ - Node
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
        this.size[rootQ] += this.size[rootP];
        if (this.height[rootP] === this.height[rootQ]) {
          this.height[rootP] += 1;
        }
      }
      this.sets -= 1;
    }
  }

  /**
   * @param {number} node
   * @return {number}
   */
  sizeOfSet(node) {
    return this.size[this.findSet(node)];
  }

  /**
   * @return {number}
   */
  numDisjointSets() {
    return this.sets;
  }

  /**
   * @override
   * @returns {string}
   */
  toString() {
    let answer = '{ ';
    this.parent.forEach((item, index) => { answer += `${index} => ${item}, `; });
    answer += '}';
    return answer;
  }
}

module.exports = DisjointSet;
