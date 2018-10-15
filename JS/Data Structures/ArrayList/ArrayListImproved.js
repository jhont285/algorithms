const fs = require('fs');

const ArrayList = require('./ArrayList');

class ArrayListImproved extends ArrayList {
  /**
 * @name function
 * @param  {*} a
 * @param  {*} a
 * @returns {number}
 */

  /**
   * @param {function=} comparator
   */
  sort(comparator = (a, b) => a - b) {
    this.element.sort(comparator);
  }

  /**
   * @param {string} dir
   * @return {boolean}
   */
  save(dir) {
    try {
      fs.writeFileSync(
        `${dir}.json`,
        JSON.stringify({ size: this.size, element: this.element }),
      );
    } catch (e) {
      return false;
    }
    return true;
  }

  /**
   * @param {string} dir
   * @return {boolean}
   */
  load(dir) {
    try {
      const data = fs.readFileSync(`${dir}.json`, 'utf8');
      const { size, element } = JSON.parse(data);
      this.size = size;
      this.element = element;
    } catch (e) {
      return false;
    }
    return true;
  }
}

module.exports = ArrayListImproved;
