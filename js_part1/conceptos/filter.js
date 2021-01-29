let miArray = [1,2,3,4,5,6,7,8,9];

function pairs(actual) {
  return actual % 2 == 0;
}

let resArray = miArray.filter(pairs);
console.log(resArray)
