var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.insert = function(value) {
    var newTree = BinarySearchTree(value);
    if (tree.value > value) {
      if (tree.left === null) {
        tree.left = newTree;
      } else {
        tree.left.insert(value);
      }
    } else {
      if (tree.right === null) {
        tree.right = newTree;
      } else {
        tree.right.insert(value);
      }
    }
  };
  tree.contains = function(target) {
    var result = false;
    if (tree.value === target) {
      result = true;
    } else if (tree.value > target) {
      if(tree.left !== null) {
        if (tree.left.contains(target)) {
          result = true;
        }
      }
    } else {
      if (tree.right !== null) {
        if (tree.right.contains(target)) {
          result = true;
        }
      }
    }
    return result;
  };
  
  tree.depthFirstLog = function(func) {
    func(tree.value);
    if (!!tree.left) {
      tree.left.depthFirstLog(func);
    } 
    if (!!tree.right) {
      tree.right.depthFirstLog(func);
    } 
  };  
  
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
