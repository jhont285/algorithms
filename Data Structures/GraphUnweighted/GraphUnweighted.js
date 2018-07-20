
class GraphUnweighted {
  constructor() {
    this.graph = {};
    this.color = {};
  }

  /**
   * @param {number} originNode
   * @param {number} finalNode
   */
  makeLink(originNode, finalNode) {
    if (!(originNode in this.graph)) {
      this.graph[originNode] = [];
    }

    this.graph[originNode].push(finalNode);
    this.color[originNode] = null;
    this.color[finalNode] = null;
  }

  /**
   * @param {number} originNode
   * @param {number} finalNode
   */
  makeDoubleLink(originNode, finalNode) {
    this.makeLink(originNode, finalNode);
    this.makeLink(finalNode, originNode);
  }

  /**
   * @param {number} initialNode
   */
  dfsRecursive(initialNode) {
    const parent = {};
    const depth = {};
    for (const node in this.graph) {
      this.color[node] = 'white';
      parent[node] = null;
      depth[node] = Infinity;
    }
    // const keys = Object.keys(this.graph);
    // keys.forEach((item) => {
    //   this.color[item] = 'white';
    //   parent[item] = null;
    //   depth[item] = Infinity;
    // });
    depth[initialNode] = 0;

    const dfs = (node) => {
      let totalMarquet = 1;
      this.color[node] = 'gray';

      this.graph[node].forEach((neighbor) => {
        if (this.color[neighbor] === 'white') {
          parent[neighbor] = node;
          totalMarquet += dfs(neighbor);
          depth[neighbor] = depth[node] + 1;
        }
      });

      this.color[node] = 'black';
      return totalMarquet;
    };

    const visitedNodes = dfs(initialNode);
    return {
      visitedNodes,
      parent,
      depth,
      color: this.color,
    };
  }

  /**
   * @param {number} initialNode
   * @param {Object}
   */
  dfsIterative(initialNode) {
    const parent = {};
    const depth = {};
    const keys = Object.keys(this.graph);
    keys.forEach((item) => {
      this.color[item] = 'white';
      parent[item] = null;
      depth[item] = Infinity;
    });
    depth[initialNode] = 0;
    this.color[initialNode] = 'gray';

    let visitedNodes = 1;
    let currentNode;
    const nodeList = [initialNode];

    while (nodeList.length) { // while nodeList is not empty
      currentNode = nodeList.pop();
      this.graph[currentNode].forEach((neighbor) => { // eslint-disable-line no-loop-func
        if (this.color[neighbor] === 'white') {
          this.color[neighbor] = 'gray';
          parent[neighbor] = currentNode;
          visitedNodes += 1;
          depth[neighbor] = depth[currentNode] + 1;
          nodeList.push(neighbor);
        }
      });

      this.color[currentNode] = 'black';
    }

    return {
      visitedNodes,
      parent,
      depth,
      color: this.color,
    };
  }

  /**
   * @param {number} initialNode
   * @param {Object}
   */
  bfsIterative(initialNode) {
    const parent = {};
    const depth = {};
    const keys = Object.keys(this.graph);
    keys.forEach((item) => {
      this.color[item] = 'white';
      parent[item] = null;
      depth[item] = Infinity;
    });
    depth[initialNode] = 0;
    this.color[initialNode] = 'gray';

    let visitedNodes = 1;
    let currentNode;
    const nodeList = [initialNode];

    while (nodeList.length) { // while nodeList is not empty
      currentNode = nodeList.shift(); // ppek
      this.graph[currentNode].forEach((neighbor) => { // eslint-disable-line no-loop-func
        if (this.color[neighbor] === 'white') {
          this.color[neighbor] = 'gray';
          parent[neighbor] = currentNode;
          visitedNodes += 1;
          depth[neighbor] = Math.min(depth[currentNode] + 1, depth[neighbor]);
          nodeList.push(neighbor);
        }
      });

      this.color[currentNode] = 'black';
    }

    return {
      visitedNodes,
      parent,
      depth,
      color: this.color,
    };
  }

  /**
   * @param {number} originNode
   * @param {number} finalNode
   * @return {Array}
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
   * @param {number} originNode
   * @param {number} finalNode
   * @return {Array}
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
   * @param {number} originNode
   * @param {number} finalNode
   * @return {boolean}
  */
  connected(originNode, finalNode) {
    const { color } = this.dfsRecursive(originNode);
    return color[finalNode] === 'black';
  }
}

module.exports = GraphUnweighted;
