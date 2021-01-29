let miArray = ['hola','buen dia','adios'];
let miNumArray = [1,2,3,4,5,6,7,8,9];
function toMayus(text) {
  const result = text.toUpperCase();
  return result;
}
const duplicate = function (actual) {
  return actual * 2;
}

let resArray = miArray.map(toMayus);
console.log(resArray) 
let dupArray = miNumArray.map(duplicate);
console.log(dupArray)

