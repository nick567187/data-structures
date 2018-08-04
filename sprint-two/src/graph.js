

// Instantiate a new graph
var Graph = function() {
  // do we want to add any properties to this object? 
};

// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node) {
  this[node] = {
    value: node,
    edges: []
  };
};

// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node) {
  return this.hasOwnProperty(node);
};
// Removes a node from the graph.
Graph.prototype.removeNode = function(node) {
  var deletedNode = this[node];
  for (var i = 0; i < this[node].edges.length; i++) {
    var edge = this[node].edges[i];
    this.removeEdge(node, edge);
  }
  delete this[node];
  return deletedNode;
};

// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode].edges.length; i++) {
    var edge = this[fromNode].edges[i];
    if (edge === toNode) {
      return true;
    }
  }
  return false;
};

// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode) {
  this[fromNode].edges.push(toNode);
  this[toNode].edges.push(fromNode);
};

// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode) {
  for (var i = 0; i < this[fromNode].edges.length; i++) {
    var edge = this[fromNode].edges[i];
    if (edge === toNode) {
      this[fromNode].edges.splice(i, 1);
    }
  }
  for (var i = 0; i < this[toNode].edges.length; i++) {
    var edge = this[toNode].edges[i];
    if (edge === fromNode) {
      this[toNode].edges.splice(i, 1);
    }
  }
};

// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb) {
  for (var key in this) {
    if (typeof this[key] !== 'function') {
      cb(this[key].value);
    }
  }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */


