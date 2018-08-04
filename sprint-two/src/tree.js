var Tree = function(value) {
  var newTree = {};
  newTree.value = value;

  // your code here
  newTree.children = [];

  _.extend(newTree, treeMethods);

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
  this.children.push(Tree(value));
};

treeMethods.contains = function(target) {
  var result = false;
  if (this.value === target) {
    result = true;
  } else {
    if (this.children.length > 0) {
      for (var i = 0; i < this.children.length; i++) {
        var child = this.children[i];
        if (child.contains(target)) {
          result = true;
        }
      }
    }
  }

  return result;
};

treeMethods.traverse = function(cb) {
  
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
