Array.prototype.uniq = function() {
  let newArray = [];
  this.forEach((element) => {
    if (!newArray.includes(element)) {
      newArray.push(element);
    }
  });
  return newArray;

}

Array.prototype.twosSum = function() {
  let hash = {};
  let positionPairs = [];
  for (let index = 0; index < this.length; index++) {
    const element = this[index];
    // if (!(hash[element])) {
    if (!(element in hash)) {
      hash[-element] = index
      console.log(element);
      console.log(hash);
    } else {
      positionPairs.push([hash[element], index]);
    }
  }
  return positionPairs;
}


Array.prototype.transpose = function() {
  let newArray = [];
  let i = 0;
  while (i < this.length) {
    let k = 0;
    let subArray = [];
    while (k < this.length) {
      subArray.push(this[k][i]);
      k++;
    }
    newArray.push(subArray);
    i++;
  }
  return newArray;
}

Array.prototype.transpose = function() {
  let newArray = [];
  let i = 0;
  while (i < this.length) {
    let k = 0;
    let subArray = [];
    while (k < this.length) {
      subArray.push(this[k][i]);
      k++;
    }
    newArray.push(subArray);
    i++;
  }
  return newArray;

  // let newArray = [];
  // for (let i = 0; i < this.length; i++) {
  //   const subArray = this[i];
  //   for (let j = 0; j < subArray.length; j++) {
  //     const element = array[j];

  //   }

  // }
}

// arr = [1,2,2,3,3,4];
// console.log(arr.uniq());

// let arr = [2,-2,4,1,3,-3];
// console.log(arr.twosSum());

let arr = [
  [1,2,3],
  [4,5,6],
  [7,8,9]
]
console.log(arr.transpose());
