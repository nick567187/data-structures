class Stack {
  constructor(count, storage) {
    this.count = 0;
    this.storage = {};
  }
  push(value) {
    this.storage[this.count++] = value;
  }
  pop() {
    var temp = this.storage[this.count - 1];
    if (this.count > 0) {
      delete this.storage[this.count - 1];
      this.count--;
      return temp;
    } else {
      delete this.storage[this.count - 1];
      return temp;
    }
  }
  size() {
    return this.count;
  }
}