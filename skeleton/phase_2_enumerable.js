//cannot use the arrow (constructor) function () => 

Array.prototype.myEach = callback => {
    // console.log(this)
    return this.map((ele) => {
        return callback(ele);
    });
}

const doubler = x => {
    return x * 2
}
// console.log(doubler(2))


// console.log(arr.myEach(doubler))

Array.prototype.myMap = function(callback) {
    return this.myEach(callback);
}
// console.log(arr.myMap(doubler))


Array.prototype.myReduce = function (callback, initialValue) {
    let init_i = initialValue === undefined ? 1 : 0;
    initialValue ||= this[0];
    
    for (let i=init_i; i < this.length; i++) {
        initialValue = callback(initialValue, this[i]);
    }
    return initialValue;
}



arr = [1, 2, 3, 4, 5];
let output = arr.myReduce(function(acc, el) {
    return acc + el;
}, 10);
console.log(output);



