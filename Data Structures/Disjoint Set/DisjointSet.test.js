const DisjointSet = require('./DisjointSet');

const SIZE = 10;

/* eslint-disable no-undef */
test('the data structure disjoint set', () => {
  const setTest = new DisjointSet();
  for (let i = 0; i < SIZE; i += 1) {
    setTest.add(i);
  }

  for (let i = 0; i < SIZE; i += 1) {
    expect(setTest.findSet(i)).toBe(i);
    expect(setTest.findSetRecursive(i)).toBe(i);
  }

  for (let i = 0; i < SIZE; i += 1) {
    for (let j = 0; j < SIZE; j += 1) {
      if (setTest[i] !== setTest[j]) {
        expect(setTest.isSameSet(i, j)).toBe(false);
      }
    }
  }

  setTest.unionSet(0, 1);
  setTest.unionSet(2, 4);
  setTest.unionSet(0, 2);
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

  setTest.unionSet(5, 6);
  setTest.unionSet(8, 7);
  setTest.unionSet(6, 7);
  for (let i = 5; i < 9; i += 1) {
    expect(setTest.isSameSet(9, i)).toBe(false);
  }

  for (let i = 5; i < 9; i += 1) {
    for (let j = 5; j < 9; j += 1) {
      expect(setTest.isSameSet(i, j)).toBe(true);
    }
  }

  setTest.unionSet(3, 9);
  setTest.unionSet(1, 9);
  setTest.unionSet(4, 7);
  for (let i = 0; i < SIZE; i += 1) {
    for (let j = 0; j < SIZE; j += 1) {
      expect(setTest.isSameSet(i, j)).toBe(true);
    }
  }
});
