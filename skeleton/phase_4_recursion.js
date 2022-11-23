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



