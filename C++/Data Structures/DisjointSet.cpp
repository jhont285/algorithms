#include <iostream>
#include <map>

using namespace std;

template <class T> class DisjointSet {
  private:
    map<T,T> parent;
    map<T,int> height;
    map<T,int> size;
    int sets;

  public:
    DisjointSet() {
      parent = map<T,T>();
      height = map<T,int>();
      size   = map<T,int>();
      sets = 0;
    }

    void add(T node) {
      if (parent.find(node) == parent.end()) {
        parent[node] = node;
        height[node] = 0;
        size[node]   = 1;
        sets        += 1;
      }
    }

    T findSet(T node) {
      T root = node;
      while (root != parent[root]) {
        root = parent[root];
      }

      T tmp;
      while (root != parent[node]) {
        tmp = parent[node];
        parent[node] = root;
        height[tmp] = 0;
        node = tmp;
      }

      return root;
    }

    bool isConnected(T nodeP, T nodeQ) {
      return findSet(nodeP) == findSet(nodeQ);
    }

    bool unionSet(T nodeP, T nodeQ) {
      T rootP = findSet(nodeP);
      T rootQ = findSet(nodeQ);

      if (rootP != rootQ) {
        if(height[rootP] < height[rootQ]) {
          parent[rootP] = rootQ;
          size[rootQ] += size[rootP];
        } else {
          parent[rootQ] = rootP;
          size[rootP] += size[rootQ];
          if (height[rootP] == height[rootQ]) {
            height[rootP]++;
          }
        }
        sets--;
        return true;
      }
      return false;
    }

    int sizeOfSet(T node) {
      T rootNode = findSet(node);
      return size[rootNode];
    }

    int numOfSets() {
      return sets;
    }
};

int main()
{

    return 0;
}
