const Primes = require('./Primes');

describe('testing all function related with bits', () => {
  it('should generate the primes less or equal that n', () => {
    // 10
    let primes = Primes.generatePrimes(10);
    let expectedPrimes = [2, 3, 5, 7];
    expect(primes).toEqual(expectedPrimes);

    // 107
    primes = Primes.generatePrimes(107);
    expectedPrimes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43,
      47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107,
    ];
    expect(primes).toEqual(expectedPrimes);

    // 200
    expect(primes).toEqual(expectedPrimes);
    primes = Primes.generatePrimes(200);
    expectedPrimes = [
      2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59,
      61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127,
      131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181,
      191, 193, 197, 199,
    ];
    expect(primes).toEqual(expectedPrimes);
  });

  it('should verify if n is prime or not', () => {
    // primes
    expect(Primes.isPrime(199)).toEqual(true);
    expect(Primes.isPrime(8513)).toEqual(true);
    expect(Primes.isPrime(1026391)).toEqual(true);
    expect(Primes.isPrime(1299827)).toEqual(true);
    expect(Primes.isPrime(2)).toEqual(true);
    expect(Primes.isPrime(106787)).toEqual(true);

    // not primes
    expect(Primes.isPrime(56769522)).toEqual(false);
    expect(Primes.isPrime(4)).toEqual(false);
    expect(Primes.isPrime(107883)).toEqual(false);
    expect(Primes.isPrime(663)).toEqual(false);
    expect(Primes.isPrime(597)).toEqual(false);
    expect(Primes.isPrime(10000000)).toEqual(false);
  });
});
