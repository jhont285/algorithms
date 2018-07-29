const GraphUnweighted = require('./GraphUnweighted');

test('the methods of the graph unweighted', () => {
  const netWork = new GraphUnweighted();
  netWork.makeDoubleLink(1, 2);
  netWork.makeDoubleLink(2, 3);
  netWork.makeDoubleLink(2, 4);
  netWork.makeDoubleLink(4, 3);
  netWork.makeDoubleLink(7, 8);

  expect(netWork.connected(2, 3)).toBe(true);
  expect(netWork.connected(7, 8)).toBe(true);
  expect(netWork.connected(8, 1)).toBe(false);

});
