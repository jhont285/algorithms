
class GraphUnweighted {
  constructor() {
    /** @private */ this.graph = {};
  }

  /**
   * @param {!(number|string)} originNode
   * @param {!(number|string)} finalNode
   */
  makeLink(originNode, finalNode) {
    if (this.graph[originNode] === undefined) {
      this.graph[originNode] = [];
    }
    this.graph[originNode].push(finalNode);
  }

  /**
   * @param {!(number|string)} nodeOne
   * @param {!(number|string)} nodeTwo
   */
  makeDoubleLink(nodeOne, nodeTwo) {
    this.makeLink(nodeOne, nodeTwo);
    this.makeLink(nodeTwo, nodeOne);
  }

  /**
   * @param {number} initialNode
   * @return {{nodesVisited: number, color: string[], parent: number[]}}
   */
  dfsRecursive(initialNode) {
    const parent = {};
    const color = {};
    let nodesVisited = 0;
    for (const node in this.graph) {
      color[node] = 'white';
      parent[node] = null;
    }

    const dfs = (node) => {
      nodesVisited += 1;
      this.color[node] = 'gray';

      for (const neighbor of this.graph[node]) {
        if (this.color[neighbor] === 'white') {
          parent[neighbor] = node;
          dfs(neighbor);
        }
      }

      this.color[node] = 'black';
    };

    dfs(initialNode);
    return { nodesVisited, parent, color };
  }

  /**
   * @param {!(number|string)} initialNode
   * @return {{nodesVisited: number, color: string[], parent: number[]}}
   */
  dfsIterative(initialNode) {
    const parent = {};
    const color = {};
    for (const node in this.graph) {
      color[node] = 'white';
      parent[node] = null;
    }

    color[initialNode] = 'gray';

    let nodesVisited = 1;
    let currentNode;
    const nodeList = [initialNode];

    while (nodeList.length) { // while nodeList is not empty
      currentNode = nodeList.pop();
      for (const neighbor of this.graph[currentNode]) {
        if (color[neighbor] === 'white') {
          color[neighbor] = 'gray';
          parent[neighbor] = currentNode;
          nodesVisited += 1;
          nodeList.push(neighbor);
        }
      }

      color[currentNode] = 'black';
    }

    return { nodesVisited, parent, color };
  }

  /**
   * @param {!(number|string)} initialNode
   * @return {{nodesVisited: number, color: string[], parent: number[]}}
   */
  bfsIterative(initialNode) {
    const parent = {};
    const depth = {};
    const color = {};
    for (const node in this.graph) {
      this.color[node] = 'white';
      parent[node] = null;
      depth[node] = Infinity;
    }

    depth[initialNode] = 0;
    color[initialNode] = 'gray';

    let visitedNodes = 1;
    let currentNode;
    const nodeList = [initialNode];

    while (nodeList.length) { // while nodeList is not empty
      currentNode = nodeList.shift(); // peek
      for (const neighbor of this.graph[currentNode]) {
        if (color[neighbor] === 'white') {
          color[neighbor] = 'gray';
          parent[neighbor] = currentNode;
          visitedNodes += 1;
          depth[neighbor] = Math.min(depth[currentNode] + 1, depth[neighbor]);
          nodeList.push(neighbor);
        }
      }

      color[currentNode] = 'black';
    }

    return {
      visitedNodes,
      parent,
      depth,
      color,
    };
  }

  /**
   * @param {!(number|string)} originNode
   * @param {!(number|string)} finalNode
   * @return {number[]}
  */
  pathDfs(originNode, finalNode) {
    const { parent } = this.dfsRecursive(originNode);
    const pathList = [];
    let currentNode = finalNode;

    while (currentNode !== null) {
      pathList.push(currentNode);
      currentNode = parent[currentNode];
    }

    pathList.reverse();
    return pathList;
  }

  /**
   * @param {!(number|string)} originNode
   * @param {!(number|string)} finalNode
   * @return {number[]}
  */
  pathBfs(originNode, finalNode) {
    const { parent } = this.bfsIterative(originNode);
    const pathList = [];
    let currentNode = finalNode;

    while (currentNode !== null) {
      pathList.push(currentNode);
      currentNode = parent[currentNode];
    }

    pathList.reverse();
    return pathList;
  }


  /**
   * @param {!(number|string)} originNode
   * @param {!(number|string)} finalNode
   * @return {boolean}
  */
  connected(originNode, finalNode) {
    const { color } = this.dfsRecursive(originNode);
    return color[finalNode] === 'black';
  }
}

module.exports = GraphUnweighted;
