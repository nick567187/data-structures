var HashTable = function() {
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
  this._counter = 0;
};

HashTable.prototype.insert = function(k, v) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var node = [];
  if (this._storage.get(index) !== undefined) {
    var arr = this._storage.get(index);
    var changed = false;
    for (var i = 0; i < arr.length; i++) {
      var inside = arr[i];
      if (inside[0] === k) {
        inside[1] = v;
        changed = true;
      }
    }
    if (changed === false) {
      this._counter++;
      arr.push([k, v]);
    }
  } else {
    this._counter++;
    node.push([k, v]);
    this._storage.set(index, node);
  }
  if (!this._resize) {
    // console.log('counter', this._counter);
    this._resize = true;
    if (this._counter >= this._limit * 0.75) {
      console.log("up");
      let newLimit = this._limit * 2;
      this.resize(newLimit);
    }
    if (this._counter <= this._limit * 0.25) {
      console.log("down");
      let newLimit = this._limit / 2;
      this.resize(newLimit);
    }
  }
};
// HashTable.prototype.reInsert = function(k, v) {
//   var index = getIndexBelowMaxForKey(k, this._limit);
//   var node = [];
//   if (this._storage.get(index) !== undefined) {
//     var arr = this._storage.get(index);
//     var changed = false;
//     for (var i = 0; i < arr.length; i++) {
//       var inside = arr[i];
//       if (inside[0] === k) {
//         inside[1] = v;
//         changed = true;
//       }
//     }
//     if (changed === false) {
//       arr.push([k, v]);
//     }
//   } else {
//     node.push([k, v]);
//     this._counter++;
//     this._storage.set(index, node);
//   }
// };

HashTable.prototype.retrieve = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  for (var i = 0; i < arr.length; i++) {
    var inside = arr[i];
    if (inside[0] === k) {
      return inside[1];
    }
  }
};

HashTable.prototype.remove = function(k) {
  var index = getIndexBelowMaxForKey(k, this._limit);
  var arr = this._storage.get(index);
  for (var i = 0; i < arr.length; i++) {
    var inside = arr[i];
    if (inside[0] === k) {
      arr.splice(i, 1);
      this._counter--;
    }
  }
  if (!this._resize) {
    if (this._counter <= this._limit * 0.25) {
      console.log("down");
      let newLimit = this._limit / 2;
      this.resize(newLimit);
    }
  }
};

HashTable.prototype.resize = function(newLimit) {
  var oldStorage = this._storage;

  // this._counter = 0;
  var values = [];
  for (let i = 0; i < this._limit; i++) {
    values.push(oldStorage.get(i));
  }
  this._limit = newLimit;
  this._storage = LimitedArray(this._limit);
  console.log("limit", this._limit);
  for (let i = 0; i < values.length; i++) {
    var val = values[i];
    if (val !== undefined) {
      for (let j = 0; j < val.length; j++) {
        var subArr = val[j];
        var k = subArr[0];
        var v = subArr[1];
        this.insert(k, v);
      }
    }
  }
  this._resize = false;
  // if (this._counter >= this._limit * .75) {
  //   console.log('upupuppu');
  //   var oldLimit = this._limit;
  //   var oldStorage = this._storage;
  //   var arr = [];
  //   this._counter = 0;
  //   this._limit = Math.ceil(oldLimit * 2);
  //   this._storage = LimitedArray(this._limit);
  //   for (var i = 0; i < oldLimit; i++) {
  //     arr.push(oldStorage.get(i));
  //   }
  //   for (var i = 0; i < arr.length; i++) {
  //     var elem = arr[i];
  //     if (elem !== undefined) {
  //       for (var j = 0; j < elem.length; j++) {
  //         var node = elem[j];
  //         var k = node[0];
  //         var v = node[1];
  //         this.insert(k, v);
  //       }
  //     }
  //   }
  //   this._resize = false;
  // } else if (this._counter <= this._limit * .25 ) {
  //   console.log('downdowndown');
  //   var oldLimit = this._limit;
  //   var oldStorage = this._storage;
  //   var arr = [];
  //   this._counter = 0;
  //   this._limit = Math.ceil(oldLimit / 2);
  //   this._storage = LimitedArray(this._limit);
  //   for (var i = 0; i < oldLimit; i++) {
  //     arr.push(oldStorage.get(i));
  //   }
  //   for (var i = 0; i < arr.length; i++) {
  //     var elem = arr[i];
  //     if (elem !== undefined) {
  //       for (var j = 0; j < elem.length; j++) {
  //         var node = elem[j];
  //         var k = node[0];
  //         var v = node[1];
  //         this.insert(k, v);
  //       }
  //     }
  //   }
  //   this._resize = false;
  // }
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
