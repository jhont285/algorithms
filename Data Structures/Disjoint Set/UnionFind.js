/**
 * This data structure is awesome
 */
class DisjointSet {

  /**
   * The index begin from zero to n
   * @param {(number|boolean|string)} [nodes] - The numbers of the nodes
   */
  constructor(nodes = []) {
    /** @private */ this.parent = new Map();
    /** @private */ this.height = new Map();

    nodes.forEach((item) => { this.add(item); });
  }

  /**
   * Add new new at the disjoint set
   * @param {*} node - new node
   */

  add(node) { 
    this.parent.set(node, node);
    this.parent.set(node, 0);
  }

  /**
   * Find the index of tree's root of the current node
   * @param {number} currentNode - Node
   * @returns {number} the root of p
   */
  findSet(currentNode) {
    let root = currentNode;

    while (root !== this.parent[root])
      root = this.parent[root];

    let tmpNode;
    while (root !== currentNode) {
      tmpNode = this.parent[currentNode];
      this.parent[currentNode] = root;
      currentNode = tmpNode;
    }

    return root;
  }

  /**
   * Verify if the nodes are in same set
   * @param {number} NodeP - Node
   * @param {number} NodeQ - Node
   * @returns {boolean} true if p and q are in the same set, false in otherwise
   */
  isSameSet(nodeP, nodeQ) {
    return this.findSet(nodeP) === this.findSet(nodeQ);
  }

  /**
   * Join the trees that contains the nodes
   * @param {number} p - Node
   * @param {number} q - Node
   */
  unionSet(p, q) {
    const rootP = this.findSet(p);
    const rootQ = this.findSet(q);

    if (rootP !== rootQ) {
      if (this.height[rootP] < this.height[rootQ])
        this.parent[rootP] = rootQ;
      else {
        this.parent[rootQ] = rootP;
        if (this.height[rootP] === this.height[rootQ])
          this.height[rootP]++;
      }
    }
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

module.exports = UnionFind;
