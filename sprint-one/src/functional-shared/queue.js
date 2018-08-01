var Queue = function() {
  var someInstance = {};
  var storage = {};
  extend(someInstance, queueMethods);
  return someInstance;  
};

var extend = function(obj1, obj2) {
  for (var i in obj2) {
    obj1[i] = obj2[i];   
  }  
};

var queueMethods = {
  count: 0,
  ticket: 0,
  big: 0,
  enqueue: function(value) {
    this[this.count++] = value;
    this.big++;
  },
  dequeue: function() {
    var temp = this[this.ticket];
    if (this.big > 0) {
      this.big--;
    } 
    delete this[this.ticket++];
    return temp;
  },
  size: function() {
    return this.big;
  }
};









