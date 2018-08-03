var DoublyLinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;
  
  
  list.addToTail = function(value) {
    var node = Node(value);
    if (list.head === null) {
      list.head = node;
    } else if (list.tail === null) {
      list.head.next = node;
      list.tail = node;
      list.tail.prev = list.head; 
    } else {
      var prevNode = list.tail;
      prevNode.next = node;
      list.tail = node;
      list.tail.prev = prevNode;
    }   
  }
  
  list.removeHead = function() {
    var nextNode = list.head.next;
    var prevHead = list.head.value;
    list.head = nextNode;
    return prevHead;
  }
  
  list.contains = function(target) {
    console.log(list)
    var result = false;
    var recurseList = function(node, target) {
      if (node.value === target) {
        result = true;
      } else {
        if (node.next !== null) {
          if (recurseList(node.next, target)) {
            result = true;
          };
        }
      }
    }
    recurseList(list.head, target);
    return false;
  }
  
  list.addToHead = function(value) {
    
    
  }
  
  list.removeTail = function() {
    
    
  }
  return list;
  
}

var Node = function(value) {
  var node = {};
  
  node.value = value;
  node.next = null;
  node.prev = null;
  
  return node;
}