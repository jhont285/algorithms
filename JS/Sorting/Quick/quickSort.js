
/**
 * @param {Array} array
 */
// eslint-disable-next-line
function quickSort(array) {

  function partition(begin, end) {
    const pivot = array[end];
    let media = begin - 1;
    for (let i = begin; i < end; i += 1) {
      if (array[i] <= pivot) {
        media += 1;
        [array[media], array[i]] = [array[i], array[media]];
      }
    }
    media += 1;
    [array[media], array[end]] = [array[end], array[media]];
    return media;
  }

  function sort(begin, end) {
    if (begin < end) {
      const media = partition(begin, end);
      sort(begin, media - 1);
      sort(media + 1, end);
    }
  }

  sort(0, array.length - 1);
}

module.exports = quickSort;
