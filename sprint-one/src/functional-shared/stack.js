var Stack = function() {
  var someInstance = {};
  var storage = {};
  extend(someInstance, stackMethods);
  return someInstance; 
};

var extend = function(obj1, obj2) {
  for (var i in obj2) {
    obj1[i] = obj2[i];   
  }  
};

var stackMethods = {
  count: 0,
  push: function(value) {
    this[this.count] = value;
    this.count++;
  },
  pop: function() {
    var temp = this[this.count - 1];
    if (this.count > 0) {
      delete this[this.count - 1];
      this.count--;
      return temp;
    } else { 
      delete this[this.count - 1];
      return temp;
    }
  },
  size: function() {
    return this.count;
  }
};
