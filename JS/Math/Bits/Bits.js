/**
 * this function returns an integer to the multiplied by 2
 * @param {number} x - the number must be an integer
 * @return {number} - integer
 */
function powTwo(x) {
  return x << 1;
}

/**
 * This function returns an integer divide by two
 * @param {number} x - the number must be an integer
 * @return {number} - integer
 */
function divideByTwo(x) {
  return x >> 1;
}

/**
 * This function returns an integer divide by four
 * @param {number} x - the number must be an integer
 * @return {number} - integer
 */
function divideByFour(x) {
  return x >> 2;
}

/**
 * Sets (writes a 1 to) a bit of a numeric variable.
 * @param {number} x - the numeric variable whose bit to set
 * @param {number} n - which bit to set, starting at 0 for the least-significant (rightmost) bit
 * @return {number} - integer
 */
function bitSet(x, n) {
  return x | (1 << n);
}

/**
 * this function checks if the n-th bit of x is on
 * @param {number} x - the numeric variable whose bit to check
 * @param {number} n - which bit to check, starting at 0 for the least-significant (rightmost) bit
 * @return {boolean}
 */
function bitOn(x, n) {
  return Boolean(x & (1 << n));
}

/**
 * Clears (writes a 0 to) a bit of a numeric variable.
 * @param {number} x - the numeric variable whose bit to clear
 * @param {number} n - which bit to clear, starting at 0 for the least-significant (rightmost) bit
 * @return {number}
 */
function bitClear(x, n) {
  return x & ~(1 << n);
}

/**
 * this funcion toggles (flip the status of) of the n-th bit of the x
 * @param {number} x - the numeric variable whose bit to toggle
 * @param {number} n - which bit to toggle, starting at 0 for the least-significant (rightmost) bit
 * @return {number} - integer
 */
function bitToggle(x, n) {
  return x ^ (1 << n);
}

/**
 * To get the value of the least significant bits (first of the right)
 * @param {number} x - the numeric variable
 * @return {number} - integer
 */
function lowByte(x) {
  return x & (-x);
}

/**
 * this funcion turns on all bits in a set of size x
 * @param {number} x - the numeric variable greater than one
 * @return {number} - integer
 */
function turnOnAllBits(x) {
  return (1 << x) - 1;
}

/**
 * This funcion checks if x is power of 2
 * @param {number} x - the numeric variable to check
 * @return {number}
 */
function isPowerTwo(x) {
  return Boolean(x && !(x & (x - 1)));
}

/**
 * This funcion returns bits' number on
 * @param {number} x - the numeric variable to check
 * @return {number}
 */
function numberBits(x) {
  let count = 0;
  while (x) {
    x &= (x - 1);
    count += 1;
  }

  return count;
}

module.exports = {
  powTwo,
  divideByTwo,
  divideByFour,
  bitSet,
  bitOn,
  bitClear,
  bitToggle,
  lowByte,
  turnOnAllBits,
  isPowerTwo,
  numberBits,
};
