const LinkedStack = require('./LinkedStack');
const ArrayStack = require('./ArrayStack');

describe('stacks', () => {
  test('LinkedStack', () => {
    const testLinkedStack = new LinkedStack();
    const SIZE = parseInt(1e3, 10);

    for (let i = 0; i < SIZE; i += 1) {
      testLinkedStack.push(i);
    }
    for (let i = SIZE - 1; i >= 0; i -= 1) {
      expect(testLinkedStack.pop()).toBe(i);
    }
  });

  test('ArrayStack', () => {
    const testLinkedStack = new ArrayStack();
    const SIZE = parseInt(1e3, 10);

    for (let i = 0; i < SIZE; i += 1) {
      testLinkedStack.push(i);
    }
    for (let i = SIZE - 1; i >= 0; i -= 1) {
      expect(testLinkedStack.pop()).toBe(i);
    }
  });
});
