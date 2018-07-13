
/**
 * @param {Array} array
 */
// eslint-disable-next-line
function radixSort(array) {

  function getDigit(n, powerTen) {
    return parseInt(n / powerTen, 10) % 10;
  }

  function count(powerTen) {
    const output = new Array(array.length);
    const container = new Array(10).fill(0);
    let tmp;

    array.forEach((item) => { container[getDigit(item, powerTen)] += 1; });

    for (let i = 1; i < container.length; i += 1) {
      container[i] += container[i - 1];
    }

    for (let i = array.length - 1; i >= 0; i -= 1) {
      tmp = getDigit(array[i], powerTen);
      container[tmp] -= 1; // put in correct position
      output[container[tmp]] = array[i];
    }

    output.forEach((item, index) => { array[index] = item; });
  }

  // sort
  const max = Math.max(...array);
  for (let powerTen = 1; parseInt(max / powerTen, 10) > 0; powerTen *= 10) {
    count(powerTen);
  }
}

module.exports = radixSort;
