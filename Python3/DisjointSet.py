class DisjointSet:
    def __init__(self, n):
        self.parent = [i for i in range(n)]
        self.height = [0 for i in range(n)]
        self.nodes = [1 for i in range(n)]

    def findSet(self, node):
        if node is self.parent[node]:
            return node
        self.parent[node] = self.findSet(self.parent[node])
        return self.parent[node]

    def isSameSet(self, nodeP, nodeQ):
        return self.findSet(nodeP) is self.findSet(nodeQ)

    def unionSet(self, nodeP, nodeQ):
        rootP = self.findSet(nodeP)
        rootQ = self.findSet(nodeQ)

        if rootP is not rootQ:
            if self.height[rootP] < self.height[rootQ]:
                self.parent[rootP] = rootQ
                self.nodes[rootQ] += self.nodes[rootP]
            else:
                self.parent[rootQ] = rootP
                self.nodes[rootP] += self.nodes[rootQ]
                if self.height[rootP] is self.height[rootQ]:
                    self.height[rootP] += 1


    def sizeSet(self, n):
        parentSuspect = self.findSet(n)
        return self.nodes[parentSuspect]
