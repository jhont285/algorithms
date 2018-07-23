
/**
 * @param {Array} array
 */

function burbbleSort(array) {
  for (let i = array.length; i > 0; i -= 1) {
    for (let j = 0; j < i; j += 1) {
      if (array[j] > array[j + 1]) { // then swap
        [array[j], array[j + 1]] = [array[j + 1], array[j]];
      }
    }
  }
}

module.exports = burbbleSort;
