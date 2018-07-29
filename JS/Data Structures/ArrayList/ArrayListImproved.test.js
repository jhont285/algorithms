const ArrayListImproved = require('./ArrayListImproved');

test('ArrayListImproved', () => {
  const primes = new ArrayListImproved();
  primes.add(0, 2);
  primes.add(1, 3);
  primes.add(2, 5);
  primes.add(3, 7);
  primes.add(4, 11);
  primes.add(5, 13);
  primes.add(6, 17);
  primes.add(7, 19);
  primes.save('primes');

  const testPrimes = new ArrayListImproved();
  testPrimes.load('primes');
  expect(primes.toString()).toBe(testPrimes.toString());
});
