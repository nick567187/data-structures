var Stack = function() {
  this.storage = {};
  this.count = 0;
};

Stack.prototype.push = function(value) {
  this.storage[this.count++] = value;
};

Stack.prototype.pop = function() {
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

Stack.prototype.size = function() {
  return this.count;
};