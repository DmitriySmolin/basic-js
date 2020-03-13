const chainMaker = {
  arr: [],

  getLength() {
    return this.arr.length;
  },
  addLink(value) {
    this.arr.push(value);
    return this;
  },
  removeLink(position) {
    if (typeof position !== 'number' || position > this.getLength() || position < 1) {
      this.arr = [];
      throw new Error();
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let res = this.arr.map(el => `( ${el} )`).join('~~');
    this.arr = [];
    return res;
  }
}


module.exports = chainMaker;