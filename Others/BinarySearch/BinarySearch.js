
function binarySearch(array, value) {
  let left = 0;
  let middle;
  let right = array.length - 1;
  while (left <= right) {
    middle = Math.trunc((left + right) / 2);
    if (value === array[middle]) {
      return middle;
    }
    if (value < array[middle]) {
      right = middle - 1;
    } else {
      left = middle + 1;
    }
  }

  return -1; // not found
}

function ternarySearch(array, value) {
  let left = 0;
  let right = array.length - 1;
  let middle1;
  let middle2;
  while (left < right) {
    middle1 = Math.trunc(left + (right - left) / 3);
    if (value === array[middle1]) {
      return true;
    }
    middle2 = Math.trunc(right - (right - left) / 3);
    if (value === array[middle2]) {
      return true;
    }

    if (value < array[middle1]) {
      right = middle1 - 1;
    } else if (value < array[middle2]) {
      left = middle1 + 1;
      right = middle2 - 1;
    } else {
      left = middle2 + 1;
    }
  }

  return false;
}

function lowerBound(array, value) {
  let left = 0;
  let middle;
  let right = array.length;
  while (left < right) {
    middle = Math.trunc((left + right) / 2);
    if (value <= array[middle]) {
      right = middle;
    } else {
      left = middle + 1;
    }
  }

  return left; // not found
}

module.exports = {
  binarySearch,
  ternarySearch,
  lowerBound,
};
