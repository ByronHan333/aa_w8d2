Array.prototype.bubbleSort = function() {
  let switched = true;
  while (switched) {
    let i = 1;
    switched = false;
    while (i < this.length) {
      if (this[i-1] > this[i]) {
        let tmp = this[i-1];
        this[i-1] = this[i];
        this[i] = tmp;
        switched = true;
      }
      i++;
    }
  }
  return this
}

String.prototype.substrings = function() {
  let subStrings = [];
  for (let i = 0; i <= this.length; i++) {
    for (let k = i+1; k <= this.length; k++) {
      subStrings.push(this.slice(i, k));
    }
  }
  return subStrings;
}

// arr = [4,5,1,1,12,10,6,3,7];
// console.log(arr.bubbleSort());

string = "imple";
console.log(string.substrings());
