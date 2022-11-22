function mathArray(array, callback) {
  let newArray = [];
  array.forEach((num) => {
    let result = callback(num);
    newArray.push(result);
  })
  return newArray
}

const doubler = num => {
  return num * 2;
}

const decade = num => {
  return num * 10;
}

console.log(mathArray([1,2,3], doubler));
console.log(mathArray([1,2,3], (num) => doubler(num)));
