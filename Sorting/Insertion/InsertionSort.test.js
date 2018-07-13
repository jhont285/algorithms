const insertionSort = require('./InsertionSort');

/* eslint-disable no-undef */

const SIZE_ARRAYS = parseInt(1e3, 10);

it(`should sort the worst case with ${SIZE_ARRAYS} elements`, () => {
  const numbers = new Array(SIZE_ARRAYS);
  const expectedNumbers = new Array(SIZE_ARRAYS);
  for (let i = 0; i < SIZE_ARRAYS; i += 1) {
    numbers[i] = i;
    expectedNumbers[i] = i;
  }

  insertionSort(numbers);
  expect(numbers).toEqual(expectedNumbers);
});

it(`should sort with the best case with ${SIZE_ARRAYS} elements`, () => {
  const numbers = new Array(SIZE_ARRAYS);
  const expectedNumbers = new Array(SIZE_ARRAYS);
  for (let i = 0; i < SIZE_ARRAYS; i += 1) {
    numbers[i] = i;
    expectedNumbers[i] = i;
  }
  numbers.reverse();

  insertionSort(numbers);
  expect(numbers).toEqual(expectedNumbers);
});


it(`should sort with the average case with ${SIZE_ARRAYS} elements`, () => {
  const numbers = new Array(SIZE_ARRAYS);
  const expectedNumbers = new Array(SIZE_ARRAYS);
  for (let i = 0; i < SIZE_ARRAYS; i += 1) {
    numbers[i] = parseInt(Math.random() * SIZE_ARRAYS, 10);
    expectedNumbers[i] = numbers[i];
  }
  expectedNumbers.sort((a, b) => a - b);

  insertionSort(numbers);
  expect(numbers).toEqual(expectedNumbers);
});
