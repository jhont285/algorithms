
/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function gcd(a, b) {
  while (b !== 0) {
    [a, b] = [b, a % b];
  }
  return a;
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number}
 */
function lcd(a, b) {
  return (a * b) / gcd(a, b);
}

/**
 * @param {number} a
 * @param {number} b
 * @return {number=[]}
 */
function eea(a, b) {
  if (b === 0) {
    return [a, 1, 0];
  }

  const [dP, xP, yP] = eea(b, a % b);
  const [d, x, y] = [dP, yP, xP - Math.trunc(a / b) * yP];
  return [d, x, y];
}

/**
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
function combination(n, k) {
  if (k === 1 || n === k) {
    return 1;
  }

  k = Math.min(k, n - k); // for the property (n k) = (n n-k)

  const triPascal = new Array(n + 1);

  for (let i = 1; i <= n; i += 1) {
    triPascal[i] = new Array(Math.min(i, k + 1));
  }

  // fill the first column with ones
  for (let i = 1; i <= n; i += 1) {
    triPascal[i][0] = 1;
  }

  // fill the diagonal with ones
  for (let i = 1; i <= k; i += 1) {
    triPascal[i][i] = i;
  }

  for (let i = 2; i < n; i += 1) {
    for (let j = 1; j < triPascal[i].length; j += 1) {
      triPascal[i][j] = triPascal[i - 1][j - 1] + triPascal[i - 1][j];
    }
  }

  return triPascal[n][k];
}

/**
 * @param {number[]}
 *
 */
function subsets(array) {
  const n = array.length;
  for (let i = 0; i < (1 << n); i += 1) {
    for (let j = 0; j < n; j += 1) {
      if (i & (1 << j)) {
        process.stdout.write(`${array[j]} `);
      }
    }
    console.log();
  }
}

/**
 * Exponentiation modular (x ^ y) % m
 * @param {}
 */
function modPow(x, y, m) {
  let ans = 1;
  while (y) { // y is not 0
    if (y & 1) { // odd
      ans = (ans * x) % m;
    }
    y >>= 1; // y /= 2
    x = (x * x) % m;
  }

  return ans;
}

/**
 *
 */

module.exports = {
  gcd,
  lcd,
  eea,
  combination,
  subsets,
  modPow,
};
