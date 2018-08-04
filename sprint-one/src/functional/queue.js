var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var count = 0;
  var ticket = 0;
  var size = 0;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[count++] = value; //{0 : a} count 1 ticket 0 ticket 1 count 0 return a; count 1 ticket 1 {0: b}
    size++;
  };

  someInstance.dequeue = function() {
    var temp = storage[ticket];
    if (size > 0) { 
      size--;
    }
    delete storage[ticket++]; 
    return temp;
  };

  someInstance.size = function() {
    return size;
  };

  return someInstance;
};
