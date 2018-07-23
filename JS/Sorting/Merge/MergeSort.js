
/**
 * @param {Array} array
 */
// eslint-disable-next-line
function mergeSort(array) {

  function merge(begin, middle, end) {
    const left = array.slice(begin, middle + 1);
    const right = array.slice(middle + 1, end + 1);
    left.push(Number.POSITIVE_INFINITY);
    right.push(Number.POSITIVE_INFINITY);
    let i = 0;
    let j = 0;
    for (let k = begin; k <= end; k += 1) {
      if (left[i] < right[j]) {
        array[k] = left[i];
        i += 1;
      } else {
        array[k] = right[j];
        j += 1;
      }
    }
  }

  function sort(begin, end) {
    if (begin < end) {
      const middle = parseInt((begin + end) / 2, 10);
      sort(begin, middle);
      sort(middle + 1, end);
      merge(begin, middle, end);
    }
  }

  sort(0, array.length - 1);
}

module.exports = mergeSort;
