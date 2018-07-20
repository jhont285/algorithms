
/**
 * this function generates all primes less or equal than limit
 * @param {number} limit
 * @return {Array}
*/
function generatePrimes(limit) {
  const sieve = new Array(limit + 1).fill(true);
  const primes = [];
  for (let i = 2; i <= limit; i += 1) {
    if (sieve[i]) {
      for (let j = i * i; j <= limit; j += i) {
        sieve[j] = false;
      }
      primes.push(i);
    }
  }

  return primes;
}

/**
 * this function returns true if n is primes in otherwise false
 * @param {number} n
 * @return {boolean}
 */

function isPrime(n) {
  const LIMIT = Math.trunc(Math.sqrt(n));
  const primes = generatePrimes(LIMIT);
  for (let i = 0; primes[i] <= LIMIT; i += 1) {
    if (n % primes[i] === 0) {
      return false;
    }
  }
  return true;
}

/**
 * this function find all divisor of n
 * @param {number} n
 * @return {Array}
 */
function getAllDivisor(n) {
  const LIMIT = Math.trunc(Math.sqrt(n));
  const divisorsLeft = [];
  const divisorsRight = [];
  for (let i = 1; i <= LIMIT; i += 1) {
    if (n % i === 0) {
      divisorsLeft.push(i);
      divisorsRight.unshift(n / i);
    }
  }

  if (divisorsLeft[divisorsLeft.length - 1] === divisorsRight[0]) {
    divisorsRight.shift();
  }
  return divisorsLeft.concat(divisorsRight);
}

/**
 * this function counts the number of prime factors of n
 * @param {number} n
 * @return {number}
 */
function numPF(n) {
  let answer = 0;
  const LIMIT = Math.trunc(Math.sqrt(n));
  const primes = generatePrimes(LIMIT);
  /* eslint-disable-next-line */
  for (const pf of primes) {
    if (pf * pf > n) {
      break;
    }
    while (n % pf === 0) {
      n = Math.trunc(n / pf);
      answer += 1;
    }
  }

  if (n !== 1) {
    answer += 1;
  }
  return answer;
}

module.exports = {
  generatePrimes,
  isPrime,
  getAllDivisor,
  numPF,
};
