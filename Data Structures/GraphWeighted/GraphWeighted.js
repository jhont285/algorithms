const PriorityQueue = require('../PriorityQueue/PriorityQueue');

class GraphWeighted {
  constructor() {
    this.graph = {};
  }

  /**
   * @param {number} originNode
   * @param {Object}
   */
  makeLink(originNode, { link, weight }) {
    if (!(originNode in this.graph)) {
      this.graph[originNode] = [];
    }
    this.graph[originNode].push({ link, weight });
  }

  /**
   * @param {Object}
   * @param {Object}
   */
  makeDoubleLink(origin, final) {
    this.makeLink(origin.node, { link: final.link, weight: final.weight });
    this.makeLink(final.node, { link: origin.link, weight: origin.weight });
  }

  /**
   * @param {number}
   */
  dijkstra(initialNode) {
    const depth = {};
    const visited = {};
    const parent = {};
    for (const node in this.graph) {
      visited[node] = false;
      depth[node] = Infinity;
    }

    // eslint-disable-next-line
    const comparator = (a, b) => a.weight !== b.weight ? a.weight < b.weight : a.link > b.link;
    const nodeList = new PriorityQueue(comparator);
    nodeList.push({ link: initialNode, size: 0 });
    depth[initialNode] = 0;
    parent[initialNode] = null;

    let currentNode;

    while (nodeList.length) { // nodeList is not empty
      currentNode = nodeList.shift().weight;

      if (visited[currentNode]) {
        continue; // eslint-disable-line no-continue
      }

      // eslint-disable-next-line
      for (const { link, weight } of this.graph[currentNode]) {

        if (depth[currentNode] + weight < depth[link]) {
          depth[link] = depth[currentNode] + weight;
          nodeList.push({ link, weight: depth[link] });
          parent[link] = currentNode;
        }
      }
    }

    return { parent, depth };
  }

  shortestPath(originNode, finalNode) {
    const { depth } = this.dijkstra(originNode);
    const path = [];
    let currentNode = finalNode;
    while (currentNode !== null) {
      path.push(currentNode);
      currentNode = depth[currentNode];
    }

    path.reverse();
    return path;
  }

  bellmanFord(initialNode) {
    // initialize depth
    const depth = {};
    for (const node in this.graph) {
      depth[node] = Infinity;
    }
    depth[initialNode] = 0;
    const parent = {};

    let distance;
    const repeats = Object.keys(this.graph).length - 1;
    for (let i = 0; i < repeats; i += 1) {
      for (const node in this.graph) {
        for (const { link: neighbor, weight } of this.graph[node]) {
          distance = depth[node] + weight;
          if (distance < depth[neighbor]) {
            depth[neighbor] = distance;
            parent[neighbor] = node;
          }
        }
      }
    }

    for (const node in this.graph) {
      for (const { link: neighbor, weight } of this.graph[node]) {
        distance = depth[node] + weight;
        if (distance < depth[neighbor]) {
          console.log('Negative cicle');
        }
      }
    }

    return { depth, parent };
  }

  FloydWarshall() {
    return this;
  }
}

module.exports = GraphWeighted;
