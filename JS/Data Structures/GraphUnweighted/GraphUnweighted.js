
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
   * @return {{color: string[], nodesVisited: number, parent: number[]}}
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
    return { color, nodesVisited, parent };
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
    let node;
    const nodeList = [initialNode];

    while (nodeList.length) { // while nodeList is not empty
      node = nodeList.pop();
      for (const neighbor of this.graph[node]) {
        if (color[neighbor] === 'white') {
          color[neighbor] = 'gray';
          parent[neighbor] = node;
          nodesVisited += 1;
          nodeList.push(neighbor);
        }
      }

      color[node] = 'black';
    }

    return { nodesVisited, parent, color };
  }

  /**
   * @param {!(number|string)} initialNode
   * @return {{ color: string[], depth: number[], parent: (number|string)[], visitedNodes: number }}
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
    let node;
    const nodeList = [initialNode];

    while (nodeList.length) { // while nodeList is not empty
      node = nodeList.shift(); // peek
      for (const neighbor of this.graph[node]) {
        if (color[neighbor] === 'white') {
          color[neighbor] = 'gray';
          parent[neighbor] = node;
          visitedNodes += 1;
          depth[neighbor] = Math.min(depth[node] + 1, depth[neighbor]);
          nodeList.push(neighbor);
        }
      }

      color[node] = 'black';
    }

    return {
      color,
      depth,
      parent,
      visitedNodes,
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
    let node = finalNode;

    while (node !== null) {
      pathList.push(node);
      node = parent[node];
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
    let node = finalNode;

    while (node !== null) {
      pathList.push(node);
      node = parent[node];
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
