var BinarySearchTree = function(value) {
  var tree = {};
  tree.value = value;
  tree.left = null;
  tree.right = null;
  tree.insert = function(value) {
    var newTree = BinarySearchTree(value);
    if (tree.left === null) {
      if (tree.value > value) {
        tree.left = newTree;
      } else 
    }
    // if (tree.value > value) {
    //   tree.left = newTree;
    // } else {
    //   tree.right = newTree;
    // }
  };
  tree.contains = function() {};
  tree.depthFirstLog = function() {};  
  return tree;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */
