class Queue {
  constructor(big, count, ticket, storage) {
    this.big = 0;
    this.count = 0;
    this.ticket = 0;
    this.storage = {};
  }
  enqueue(value) {
    this.storage[this.count++] = value;
    this.big++;
  }
  dequeue() {
    var temp = this.storage[this.ticket];
    if (this.big > 0) {
      this.big--;
    }
    delete this.storage[this.ticket++];
    return temp;
  }
  size() {
    return this.big;
  }
}
