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

for (let index = 0; index < array.length; index++) {
  const element = array[index];

}

for(let i = 0; i < .length; i++) {
  
}
