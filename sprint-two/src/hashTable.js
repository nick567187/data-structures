var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._currentSize = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var howBig = this._currentSize;
  if (this._storage.get(index) === undefined ) {
    var bucket = [];
    bucket.push([k, v]);
    this._storage.set(index, bucket);
    howBig++;
  } else {
    var bucket = this._storage.get(index);
    bucket.forEach(function (elem, i, arr) {
      if (elem[0] === k) {
        elem[1] = v;
      } else {
        var touple = [k, v];
        arr.push(touple);
        howBig++;
      }
    });   
  }
  this._currentSize = howBig;
  
  if (this._currentSize > this._limit * 0.75) {
    var newLimit = this._limit * 2;
    this.resize(newLimit);
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var howBig = this._currentSize;
  bucket.forEach(function(elem, i, arr) {
    if (elem[0] === k) {
      arr.splice(i, 1);
      howBig--;
    }
  });
  this._currentSize = howBig;
  
  if (this._currentSize < this._limit * 0.25) {
    var newLimit = this._limit / 2;
    this.resize(newLimit);
  }
};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(index);
  var result;
  if (bucket !== undefined) {
    bucket.forEach(function(touple) {
      if (touple[0] === k) {
        result = touple[1];
      }
    });
  }
  return result;
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;
  this._storage = LimitedArray(newLimit);
  this._currentSize = 0;
  this._limit = newLimit;
  var insertFn = this.insert.bind(this);
  oldStorage.each(function(bucket, index, storage) {
    if (bucket !== undefined) {
      for (var i = 0; i < bucket.length; i++) {
        var touple = bucket[i];
        var k = touple[0];
        var v = touple[1];
        insertFn(k, v);
      } 
    }
  });   
    
};
