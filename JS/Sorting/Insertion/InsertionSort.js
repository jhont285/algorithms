
/**
 * @param {Array} array
 */

function insertionSort(array) {
  let tmpElement;
  let j;

  for (let i = 1; i < array.length; i += 1) {
    tmpElement = array[i];

    for (j = i - 1; tmpElement < array[j] && j >= 0; j -= 1) {
      array[j + 1] = array[j];
    }

    array[j + 1] = tmpElement;
  }
}

module.exports = insertionSort;
