const range = (start,end) => {
    if (start+1 === end) return [start];
    if (start >= end) return [];
    return [start].concat(range(start+1, end));
}
// console.log(range(3,3))
// console.log(range(1, 3))
// console.log(range(2, 3))

const sumRec = arr => {
    if (arr.length === 1) return arr[0];
    if (arr.length < 1) return 0;
    return arr[0] + sumRec(arr.slice(1,arr.length));
}

// console.log(sumRec([1]));
// console.log(sumRec([1,2]));
// console.log(sumRec([1,2,3]));

const exponent = (b, n) => {
    if (n === 0) return 1;
    return b * exponent(b,n-1);
}
// console.log(exponent(2,0));
// console.log(exponent(2, 1));
// console.log(exponent(2, 2));

const exp = (b, n) => {
  if (n===0) return 1;
  if (n===1) return b;
  if (n % 2===0) {
    return exp(b, n/2)**2;
  } else {
    return b * (exp(b, (n-1)/2)**2);
  }
}
// console.log(exp(2,0));
// console.log(exp(2, 1));
// console.log(exp(2, 2));


// 1: [1]
// 2: [1,1]
// 3: [1,1,2]
// 4: [1,1,2,3]
// 5: [1,1,2,3,5]

const fib = n => {
  if (n===1) return [1];
  if (n===2) return [1,1];
  let arr = fib(n-1);
  ele1 = arr[arr.length-2];
  ele2 = arr[arr.length-1];
  arr.push(ele1+ele2);
  return arr;
}

// console.log(fib(1));
// console.log(fib(2));
// console.log(fib(3));
// console.log(fib(4));
// console.log(fib(5));

const deepDup = (arr) => {
  let shallowArray = [];
  for (let i = 0; i < arr.length; i++) {
    ele = arr[i];
    if (Array.isArray(ele)) {
      shallowArray.push(deepDup(ele));
    } else {
      shallowArray.push(ele);
    }
  }
  return shallowArray;
}

arr = [
  [1,1],
  [1,1],
  [1]
];
arr_deepdup = deepDup(arr);
arr[0][1] = 100;
// console.log(arr);
// console.log(arr_deepdup);

// let arr=[1,1];
// arr_deepdup = deepDup(arr);
// arr[1] = 100;
// console.log(arr);
// console.log(arr_deepdup);

const bsearch = (arr, target) => {
  if (arr.length===0) return -1;
  if (arr.length===1 && arr[0] != target) return -1;
  let middleIndex = Math.floor(arr.length/2);
  if (arr[middleIndex]===target) return middleIndex;

  if (arr[middleIndex]>target) {
    return bsearch(arr.slice(0, middleIndex), target);
  } else {
    let right = bsearch(arr.slice(middleIndex, arr.length), target);
    return right > 0 ? middleIndex+right: -1;
    // return middleIndex + bsearch(arr.slice(middleIndex, arr.length), target);
  }
}

arr = [1,2,3,4,6,7,8,9]
// console.log(`${0} at: ${bsearch(arr, 0)}`);
// console.log(`${1} at: ${bsearch(arr, 1)}`);
// console.log(`${2} at: ${bsearch(arr, 2)}`);
// console.log(`${5} at: ${bsearch(arr, 5)}`);
// console.log(`${7} at: ${bsearch(arr, 7)}`);
// console.log(`${9} at: ${bsearch(arr, 9)}`);
// console.log(`${10} at: ${bsearch(arr, 10)}`);

// 1,2,3
// all subsets of 2,3
// add 1
// [], [2], [3], [2,3]
// [1],[1,2],[1,3], [1,2,3]
const subsets = arr => {
  subsets(arr.slice(1, arr.length));
}

arr = [1,2,3]
console.log(subsets(arr));
