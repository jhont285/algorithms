
function countingSort(array) {
  const max = Math.max(...array);
  const count = new Array(max + 1).fill(0);
  array.forEach((item) => { count[item] += 1; });

  for (let i = 0, j = 0; i < count.length; i += 1) {
    for (let k = 0; k < count[i]; k += 1, j += 1) {
      array[j] = i;
    }
  }
}

module.exports = countingSort;
