
/**
 * @param {Array} array
 */
// eslint-disable-next-line
function heapSort(array) {

  function buildMaxHeap(node, size) {
    const leftChild = 2 * node;
    const rightChild = 2 * node + 1;
    let largest = node;

    if (leftChild < size && array[leftChild] > array[largest]) {
      largest = leftChild;
    }
    if (rightChild < size && array[rightChild] > array[largest]) {
      largest = rightChild;
    }

    if (largest !== node) {
      [array[largest], array[node]] = [array[node], array[largest]];
      buildMaxHeap(largest, size);
    }
  }

  array.unshift(null); // because the heap's properties
  for (let i = parseInt(array.length / 2, 10); i > 0; i -= 1) {
    buildMaxHeap(i, array.length);
  }

  for (let i = array.length - 1; i > 0; i -= 1) {
    [array[1], array[i]] = [array[i], array[1]];
    buildMaxHeap(1, i);
  }

  array.shift();
}
module.exports = heapSort;
