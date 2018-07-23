
function main() {
  const is = new Scanner();

}

/*
 *  Api Scanner
 */

class Scanner {
  constructor() {
    this.index = 0;
    this.lines = stdinInput.trim().split('\n'); // eslint-disable-line
  }

  nextLine() {
    return this.lines[this.index++]; // eslint-disable-line
  }

  nextInt() {
    return parseInt(this.nextLine(), 10);
  }

  nextDouble() {
    return parseFloat(this.nextLine());
  }

  nextArray() {
    return this.nextLine().split(' ');
  }

  hasNext() {
    return this.index < this.lines.length;
  }
}

let stdinInput = '';
process.stdin.resume();
process.stdin.setEncoding('utf-8');
process.stdin.on('data', (input) => { stdinInput += input; });
process.stdin.on('end', () => { main(); });
