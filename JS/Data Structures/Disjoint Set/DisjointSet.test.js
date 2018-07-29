const DisjointSet = require('./DisjointSet');

test('the data structure disjoint set', () => {
  const SIZE = 10;
  const setTest = new DisjointSet();
  for (let i = 0; i < SIZE; i += 1) {
    setTest.add(i);
  }
  expect(setTest.numSets()).toBe(SIZE);


  for (let i = 0; i < SIZE; i += 1) {
    expect(setTest.findSet(i)).toBe(i);
    expect(setTest.findSetRecursive(i)).toBe(i);
    expect(setTest.sizeOfSet(i)).toBe(1);
  }

  for (let i = 0; i < SIZE; i += 1) {
    for (let j = 0; j < SIZE; j += 1) {
      if (setTest[i] !== setTest[j]) {
        expect(setTest.isSameSet(i, j)).toBe(false);
      }
    }
  }

  expect(setTest.unionSet(0, 1)).toBe(true);
  expect(setTest.unionSet(2, 4)).toBe(true);
  expect(setTest.unionSet(0, 2)).toBe(true);
  expect(setTest.sizeOfSet(0)).toBe(4);
  expect(setTest.numSets()).toBe(SIZE - 3);
  for (let i = 0; i < 5; i += 1) {
    if (i !== 3) {
      expect(setTest.isSameSet(3, i)).toBe(false);
    }
  }

  for (let i = 0; i < 5; i += 1) {
    for (let j = 0; j < 5; j += 1) {
      if (i !== 3 && j !== 3) {
        expect(setTest.isSameSet(i, j)).toBe(true);
      }
    }
  }

  expect(setTest.unionSet(5, 6)).toBe(true);
  expect(setTest.unionSet(8, 7)).toBe(true);
  expect(setTest.unionSet(6, 7)).toBe(true);
  expect(setTest.sizeOfSet(5)).toBe(4);
  expect(setTest.numSets()).toBe(SIZE - 6);
  for (let i = 5; i < 9; i += 1) {
    expect(setTest.isSameSet(9, i)).toBe(false);
  }

  for (let i = 5; i < 9; i += 1) {
    for (let j = 5; j < 9; j += 1) {
      expect(setTest.isSameSet(i, j)).toBe(true);
    }
  }

  expect(setTest.unionSet(3, 9)).toBe(true);
  expect(setTest.unionSet(1, 9)).toBe(true);
  expect(setTest.unionSet(4, 7)).toBe(true);
  expect(setTest.numSets()).toBe(1);
  for (let i = 0; i < SIZE; i += 1) {
    for (let j = 0; j < SIZE; j += 1) {
      expect(setTest.isSameSet(i, j)).toBe(true);
    }
  }

  for (let i = 0; i < SIZE; i += 1) {
    expect(setTest.sizeOfSet(i)).toBe(SIZE);
  }
});
