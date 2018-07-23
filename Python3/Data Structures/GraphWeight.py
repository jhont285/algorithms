from heapq import *
import math

class GraphUnweight:
    def __init__(self):
        self.graph = {}

    def make_link(self, origin_node, final_node):
        if origin_node not in self.graph:
            self.graph[origin_node] = []
        self.graph[origin_node].append(final_node)


    def dijkstra(self, initial_node):
        visit = {}
        depth = {}
        for node in self.graph:
            visit[node] = False
            depth[node] = math.inf

        depth[initial_node] = 0

        node_list = []
        heappush(node_list, [0, initial_node])
        while len(node_list): # node_list is not empty
            depth_current, current_node = heappop(node_list)

            if visit[current_node]:
                continue

            visit[current_node] = True

            for [weight, link] in self.graph[current_node]:
                if depth_current + weight < depth[link]:
                    depth[link] = depth_current + weight
                    heappush(node_list, [depth[link], link])

        return depth


    def bellman_ford(self, initial_node):

        depth = {}
        for node in self.graph:
            depth[node] = inf
        depth[initial_node] = 0

        for _ in range(len(self.graph) - 1):
            for node in self.graph:
                for [weight, link] in self.graph[node]:
                    depth[link] = min(depth[link], depth[node] + weight)

        for node in self.graph:
            for [weight, link] in self.graph[node]:
                if depth[node] + weight < depth[link]:
                    return False

        return True
