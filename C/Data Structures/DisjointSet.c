#include <stdbool.h>
#include <stdio.h>
#include <stdlib.h>

typedef struct {
  int *parent;
  int *height;
} DisjointSet;

DisjointSet *newDisjointSet(int n) {
  DisjointSet *this = malloc(sizeof(DisjointSet));
  this->parent = (int *)malloc(n * sizeof(int));
  this->height = (int *)malloc(n * sizeof(int));
  for (int i = 0; i < n; i++) {
    this->parent[i] = i;
    this->height[i] = 0;
  }
  return this;
}

int findSet(DisjointSet *this, int node) {
    int root = node;
    while (root != this->parent[root]) {
      root = this->parent[root];
    }

    int tmp;
    while (root != this->parent[node]) {
      tmp = this->parent[node];
      this->parent[node] = root;
      this->height[tmp] = 0;
      node = tmp;
    }

    return root;
}

bool isSameSet(DisjointSet *this, int nodeP, int nodeQ) {
  return findSet(this, nodeP) == findSet(this, nodeQ);
}

bool unionSet(DisjointSet *this, int nodeP, int nodeQ) {
  int rootP = findSet(this, nodeP);
  int rootQ = findSet(this, nodeQ);

  if (rootP != rootQ) {
    if (this->height[rootP] < this->height[rootQ]) {
      this->parent[rootP] = rootQ;
    } else {
      this->parent[rootQ] = rootP;
      if (this->height[rootP] == this->height[rootQ])
        this->height[rootP]++;
      return true;
    }
  }
  return false;
}

int main() {

  DisjointSet *setTest = newDisjointSet(10);

  unionSet(setTest, 0, 1);
  unionSet(setTest, 5, 6);
  unionSet(setTest, 6, 0);

  if (isSameSet(setTest, 5, 1))
    printf("I am the best in the world\n");

  return 0;
}
