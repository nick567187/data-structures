var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._currentSize = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k);
  if (this._storage.get(index) === undefined) {
    let bucket = [];
    var tuple = [k, v];
    bucket.push(tuple);
    this._storage.set(index, bucket);
    this._currentSize++;
  } else {
    let bucket = this._storage.get(index);
    let newBucket = [];
    bucket.forEach(tuple => {
      if (tuple[0] === k) {
        tuple[1] = v;
      }
      newBucket.push(tuple);
      this._currentSize++;
    });
    this._storage.set(index, newBucket);
  }
  if (this._currentSize > 0.75 * this._limit) {
    this.rehash();
  }
};

HashTable.prototype.remove = function() {};

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k);
  var bucket = this._storage.get(index);
  for (let i = 0; i < bucket.length; i++) {
    var tuple = bucket[i];
    if (tuple[0] === k) {
      return tuple[1];
    }
  }
  return undefined;
};

HashTable.prototype.rehash = function(size) {
  this._limit *= 2;
  this._currentSize = 0;
  let storage = this._storage;
  this._storage = LimitedArray(this._limit);
  this._storage.each(function(bucket) {
    if (bucket !== undefined) {
      bucket.forEach(function(tuple) {
        let k = tuple[0];
        let v = tuple[1];
        let index = getIndexBelowMaxForKey(k);
        if (this._storage.get(index) === undefined) {
          let bucket = [];
          var tuple = [k, v];
          bucket.push(tuple);
          this._storage.set(index, bucket);
          this._currentSize++;
        } else {
          let bucket = this._storage.get(index);
          let newBucket = [];
          bucket.forEach(tuple => {
            if (tuple[0] === k) {
              tuple[1] = v;
            }
            newBucket.push(tuple);
            this._currentSize++;
          });
          this._storage.set(index, newBucket);
        }
      });
    }
  });
};
