#include <bits/stdc++.h>
#define all(x) x.begin(),x.end()
#define ff first
#define ss second
#define mt make_tuple
#define eb emplace_back

using namespace std;

typedef long long ll;
typedef vector<ll> vi;
typedef pair<ll,ll> pii;
typedef vector<pii> vii;
const ll INF = numeric_limits<ll>::max();


class GraphWeigth {
private:

  vector<vector<pii>> graph;
  vector<bool> visited;
  vi depth;

public:
  // Constructor
  GraphWeigth(ll n) {
    visited = vector<bool>(n);
    depth = vi(n);
    graph = vector<vector<pii>>(n, vector<pii>());
  }

  void make_link(ll origin_node, pii final_node) {
    graph[origin_node].push_back(final_node);
  }

  void make_double_link(pii node_one, pii node_two) {
    make_link(node_one.ff, node_two);
    make_link(node_two.ff, node_one);
  }

  vi dijktra(ll initial_node) {
    pii tmp;

    for (size_t i = 0; i < depth.size(); i++) {
      visited[i] = false;
      depth[i] = INF;
    }

    priority_queue<pii, vector<pii>, greater<pii>> node_list;
    tmp = {0, initial_node};
    node_list.push(tmp);

    depth[initial_node] = 0;

    while (!node_list.empty()) {
      auto _node = node_list.top();
      auto depth_node = _node.ff;
      auto current_node = _node.ss;
      node_list.pop();

      if (visited[current_node])
        continue;

      visited[current_node] = true;

      for (auto _neighbor: graph[current_node]) {
        auto weight = _neighbor.ff;
        auto link = _neighbor.ss;

        if (depth[link] > depth_node + weight) {
          depth[link] = depth_node + weight;

          tmp = {depth[link], link};
          node_list.push(tmp);
        }
      }
    }

    return depth;
  }


};


int main(int argc, char const *argv[]) {


  return 0;
}
