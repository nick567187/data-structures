

var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = {};
  node[k] = v;
  if (this._storage.get(index) !== undefined) {
    var obj = this._storage.get(index);
    _.extend(obj, node);
    
  } else {
    this._storage.set(index, node); 
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  return this._storage.get(index)[k];
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  delete this._storage.get(index)[k];
};



/*
 * Complexity: What is the time complexity of the above functions?
 */


