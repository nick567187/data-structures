var Stack = function() {
  var someInstance = Object.create(stackMethods);
  someInstance.storage = {};
  someInstance.count = 0;
  return someInstance;  
};

var stackMethods = {};

stackMethods.push = function(value) {
  this.storage[this.count++] = value;
};

stackMethods.pop = function() {
  var temp = this.storage[this.count - 1];
  if (this.count > 0) {
    delete this.storage[this.count - 1];
    this.count--;
    return temp;
  } else {
    delete this.storage[this.count - 1];
    return temp;
  }
};

stackMethods.size = function() {
  return this.count;
};