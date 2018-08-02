var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
 
  list.addToTail = function(value) { 
    if (list.head === null) {
      var newTail = Node(value);
      list.head = newTail; 
      list.tail = newTail; 
    } else {  
      var newTail = Node(value);
      list.tail.next = newTail;
      list.tail = newTail;
    }
  };

  list.removeHead = function() {
    var currHead = list.head.value;
    list.head = list.head.next;
    return currHead;
  };

  list.contains = function(target) {
    var result = false;
    for (var key in list) {
      if (typeof key !== 'function') {
        if (list[key].value === target) {
          result = true;  
        }
      }
    }
    return result;
  };
  return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};
// list.head.value + list.tail.value 

/*
 * Complexity: What is the time complexity of the above functions?
 */
