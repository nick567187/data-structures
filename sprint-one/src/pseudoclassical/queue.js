var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.big = 0;
  this.ticket = 0;
};

Queue.prototype.enqueue = function(value) {
  this.storage[this.count++] = value;
  this.big++;
};

Queue.prototype.dequeue = function() {
  var temp = this.storage[this.ticket];
  if (this.big > 0) {
    this.big--;
  }
  delete this.storage[this.ticket++];
  return temp;
};

Queue.prototype.size = function() {
  return this.big;
};
