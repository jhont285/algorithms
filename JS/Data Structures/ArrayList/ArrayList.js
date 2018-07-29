
class ArrayList {
  /**
   * @param {*} initialCapacity
   */
  constructor(initialCapacity) {
    if (initialCapacity <= 0) {
      throw new RangeError('initialCapacity must be greater that 0');
    }
    this.element = new Array(initialCapacity);
    this.size = 0;
  }

  /**
   * @return {boolean}
   */
  isEmpty() {
    return this.size === 0;
  }

  /**
   * @param {number} index
   * @return {*}
   */
  get(index) {
    this.checkError(index);
    return this.element[index];
  }

  /**
   * @param {*} theElement
   * @return {number}
   */
  indexOf(theElement) {
    for (let i = 0; i < this.size; i += 1) {
      if (this.element[i] === theElement) {
        return i;
      }
    }

    return -1;
  }

  /**
   * @param {number} index
   */
  remove(index) {
    this.checkError(index);

    const elementRemoved = this.element[index];
    for (let i = index; i < this.size - 1; i += 1) {
      this.element[i] = this.element[i + 1];
    }

    this.size -= 1;
    return elementRemoved;
  }

  /**
   * @param {number} index
   * @param {*} theElement
   */
  add(index, theElement) {
    if (index < 0 || index > this.size) {
      throw new RangeError(`index= ${index} size= ${this.size}`);
    }
    if (this.size === this.element.length) {
      const old = this.element;
      this.element = new Array(2 * this.size);
      old.forEach((item, i) => { this.element[i] = item; });
    }

    for (let i = this.size; i > index; i -= 1) {
      this.element[i] = this.element[i - 1];
    }
    this.element[index] = theElement;
    this.size += 1;
  }

  /**
   * @override
   * @return {string}
   */
  toString() {
    let s = '[';
    for (let i = 0; i < this.size - 1; i += 1) {
      s += ` ${this.element[i]},`;
    }
    if (this.size > 0) {
      s += ` ${this.element[this.size - 1]}`;
    }
    s += ' ]';
    return s;
  }

  /**
   * @param {number} index
   */
  checkError(index) {
    if (index < 0 || index >= this.size) {
      throw new RangeError(`index= ${index} size= ${this.size}`);
    }
  }
}

module.exports = ArrayList;
