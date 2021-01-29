let miArray = ['hola','buen dia','adios'];

function toMayus(text) {
  const result = text.toUpperCase();
  console.log(result);
}

function toMayusIdx(actual, index, fullArray) {
  const result = actual.toUpperCase();
  console.log(result);
  console.log(index)
  console.log(fullArray)
}
miArray.forEach(toMayus);
miArray.forEach(toMayusIdx);
