var Queue = function() {
  var someInstance = Object.create(queueMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.big = 0;
  someInstance.ticket = 0;
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
  this.storage[this.count++] = value;
  this.big++;
};

queueMethods.dequeue = function() {
  var temp = this.storage[this.ticket];
  if (this.big > 0) {
    this.big--;
  } 
  delete this.storage[this.ticket++];
  return temp;
};

queueMethods.size = function() {
  return this.big;
}
