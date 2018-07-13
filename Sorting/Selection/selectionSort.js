
function seleccionSort(array) {
  for (let i = 0; i < array.length; i += 1) {
    let j = i;
    for (let k = i + 1; k < array.length; k += 1) {
      if (array[k] < array[j]) {
        j = k;
      }
    }

    [array[i], array[j]] = [array[j], array[i]];
  }
}

module.exports = seleccionSort;
