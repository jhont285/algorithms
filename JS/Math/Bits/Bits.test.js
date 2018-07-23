const Bits = require('./Bits');

describe('testing all function related with bits', () => {
  it('should returns the integers from 1 to 1000 multiplied by two', () => {
    for (let i = 2; i < 1000; i += 1) {
      expect(Bits.powTwo(i)).toBe(2 * i);
    }
  });

  it('should returns the integers from 1000 to 2 divided by two', () => {
    for (let i = 1000; i > 1; i -= 1) {
      expect(Bits.divideByTwo(i)).toBe(parseInt(i / 2, 10));
    }
  });

  it('should returns the integers from 1000 to 2 divided by four', () => {
    for (let i = 1000; i > 3; i -= 1) {
      expect(Bits.divideByFour(i)).toBe(parseInt(i / 4, 10));
    }
  });

  it('should set (writes a 1 to) a bit of a numeric variable.', () => {
    const number = parseInt(Math.random() * (2 ** 30) + 1, 10).toString(2).split('').reverse();
    let copyNumber;
    let copyExpected;
    for (let i = 0; i < number.length; i += 1) {
      copyNumber = number.slice().reverse().join('');
      number[i] = '1';
      copyExpected = number.slice().reverse().join('');
      expect(Bits.bitSet(parseInt(copyNumber, 2), i)).toBe(parseInt(copyExpected, 2));
    }
  });

  it('should checks if the n-th bit of x is on.', () => {
    const number = parseInt(Math.random() * (2 ** 30) + 1, 10).toString(2).split('').reverse();
    const copyNumber = number.slice().reverse().join('');
    for (let i = 0; i < number.length; i += 1) {
      expect(Bits.bitOn(parseInt(copyNumber, 2), i)).toBe(Boolean(parseInt(number[i], 10)));
    }
  });

  it('should clear (writes a 0 to) a bit of a numeric variable.', () => {
    const number = parseInt(Math.random() * (2 ** 30) + 1, 10).toString(2).split('').reverse();
    let copyNumber;
    let copyExpected;
    for (let i = 0; i < number.length; i += 1) {
      copyNumber = number.slice().reverse().join('');
      number[i] = '0';
      copyExpected = number.slice().reverse().join('');
      expect(Bits.bitClear(parseInt(copyNumber, 2), i)).toBe(parseInt(copyExpected, 2));
    }
  });

  it('should toggle (flip the status of) of the n-th bit of the x', () => {
    const number = parseInt(Math.random() * (2 ** 30) + 1, 10).toString(2).split('').reverse();
    let copyNumber;
    let copyExpected;
    for (let i = 0; i < number.length; i += 1) {
      copyNumber = number.slice().reverse().join('');
      number[i] = number[i] === '1' ? '0' : '1';
      copyExpected = number.slice().reverse().join('');
      expect(Bits.bitToggle(parseInt(copyNumber, 2), i)).toBe(parseInt(copyExpected, 2));
    }
  });

  it('should get the value of the least significant bits (first of the right)', () => {
    for (let i = 0; i < 100; i += 1) {
      const number = parseInt(Math.random() * (2 ** 30) + 1, 10).toString(2).split('').reverse();
      const newNumber = new Array(number.indexOf('1') + 1).fill('0');
      newNumber[newNumber.length - 1] = '1';
      const testNumber = parseInt(number.reverse().join(''), 2);
      const expectedNumber = parseInt(newNumber.reverse().join(''), 2);
      expect(Bits.lowByte(testNumber)).toBe(expectedNumber);
    }
  });

  it('should turn on all bits in a set of size x from 1 to 30', () => {
    let number;
    for (let i = 1; i < 30; i += 1) {
      number = new Array(i).fill('1').join('');
      number = parseInt(number, 2);
      expect(Bits.turnOnAllBits(i)).toBe(number);
    }
  });

  it('should return true if an integer is power of two or false in otherwise', () => {
    const powerTwo = [1];
    for (let i = 0; Number.isSafeInteger(powerTwo[i]); i += 1) {
      powerTwo.push(2 * powerTwo[i]);
    }
    powerTwo.pop();

    powerTwo.forEach((item) => { expect(Bits.isPowerTwo(item)).toBe(true); });

    let isntPowerTwo;
    const max = powerTwo[powerTwo.length - 1];
    for (let i = 0; i < 1000; i += 1) {
      isntPowerTwo = 2;
      while (powerTwo.indexOf(isntPowerTwo) !== -1) {
        isntPowerTwo = parseInt(Math.random() * max + 1, 10);
      }
    }
    expect(Bits.isPowerTwo(isntPowerTwo)).toBe(false);
  });

  it('should returns bits\' number on', () => {
    let number;
    let bits;
    let auxNumber;
    for (let i = 0; i < 100; i += 1) {
      number = Math.trunc(Math.random() * (2 ** 30));
      auxNumber = number;
      bits = 0;
      do {
        if (auxNumber & 1) {
          bits += 1;
        }
        auxNumber = Math.trunc(auxNumber / 2);
      } while (auxNumber !== 0);
      expect(Bits.numberBits(number)).toBe(bits);
    }
  });
});
