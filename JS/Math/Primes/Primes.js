
/**
 * this function generates all primes less or equal than limit
 * @param {!number} limit
 * @return {number[]}
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

/**
 * Count the number of different prime factors of n
 * @param {number} n
 * @return {number}
 */

function numDiffPF(n) {
  let answer = 0;
  const primes = generatePrimes(n);
  for (const pf of primes) {
    if (pf * pf > n) {
      break;
    }

    if (n % pf === 0) {
      answer += 1;
    }
    while (n % pf === 0) {
      n = Math.trunc(n / pf);
    }
  }

  if (n !== 1) {
    answer += 1;
  }
  return answer;
}

/**
 * Sum the prime factors of n
 * @param {number} n
 * @return {number}
 */

function sumDiffPF(n) {
  let answer = 0;
  const primes = generatePrimes(n);
  for (const pf of primes) {
    if (pf * pf > n) {
      break;
    }

    while (n % pf === 0) {
      n = Math.trunc(n / pf);
      answer += pf;
    }
  }

  if (n !== 1) {
    answer += n;
  }
  return answer;
}

/**
 * Count the number of divisor of n
 * @param {number} n
 * @return {number}
 */
function numDiv(n) {
  let power;
  let answer = 1;
  const primes = generatePrimes(n);
  for (const pf of primes) {
    if (pf * pf > n) {
      break;
    }

    power = 0;
    while (n % pf === 0) {
      n = Math.trunc(n / pf);
      power += 1;
    }

    answer *= (power + 1);
  }

  if (n !== 1) {
    answer *= 2;
  }
  return answer;
}

/**
 * Sum of divisors of n
 * @param {number} n
 * @return {number}
 */
function sumDiv(n) {
  let power;
  let answer = 1;
  const primes = generatePrimes(n);
  for (const pf of primes) {
    if (pf * pf > n) {
      break;
    }

    power = 0;
    while (n % pf === 0) {
      n = Math.trunc(n / pf);
      power += 1;
    }

    answer *= Math.trunc((Math.pow(pf, power + 1) - 1) / (pf - 1));
  }

  if (n !== 1) {
    answer *= Math.trunc((Math.pow(pf, 2) - 1) / (n - 1));
  }
  return answer;
}

/**
 * Count the number of positive integers < n that are relatively prime to n
 * @param {number} n
 * @return {number}
 */
function eulerPhi(n) {
  let answer;
  const primes = generatePrimes(n);
  for (const pf of primes) {
    if (pf * pf > n) {
      break;
    }

    if (n % pf === 0) {
      answer -= Math.trunc(answer / pf);
    }

    while (n % pf === 0) {
      n = Math.trunc(n / pf);
    }
  }

  if (n !== 1) {
    answer -= Math.trunc(answer / n);
  }
  return answer;
}


function sieveDP() {
  const LIMIT = parseInt(1e7, 10);
  const numDiffPFDP = new Array(LIMIT).fill(0);
  for (let i = 2; i < LIMIT; i += 1) {
    if (numDiffPFDP[i] === 0) {
      for (let j = i; j < LIMIT; j += i) {
        numDiffPFDP[j] += 1;
      }
    }
  }
  return numDiffPFDP;
}

function eulerDP() {
  const LIMIT = parseInt(1e7 + 1, 10);
  const eulerPhiDP = new Array(LIMIT);
  for (let i = 0; i < LIMIT; i += 1) {
    eulerPhiDP[i] = i;
  }
  for (let i = 2; i < LIMIT; i += 1) {
    if (eulerPhiDP[i] === i) {
      for (let j = i; j < LIMIT; j += i) {
        eulerPhiDP[j] -= Math.trunc(eulerPhiDP[j] / i);
      }
    }
  }
  return eulerPhi;
}

module.exports = {
  generatePrimes,
  isPrime,
  getAllDivisor,
  numPF,
  numDiffPF,
  sumDiffPF,
  numDiv,
  sumDiv,
  eulerPhi,
  sieveDP,
  eulerDP,
};
