const myFunc2 = () => {
  console.log('myFunc2 executed')
}

function myFunc() {
  console.log('myFunc executed')
  myFunc2();
}
console.log(myFunc);
myFunc();

// scope
// return parent element(this)
function iniFunc() {
  return function innerFunc() {
    return this;
  }
}

function secFunc() {
  return () => {
    return this;
  }
}

console.log(iniFunc()());
console.log(secFunc()());

const newVar = iniFunc();
console.log(newVar());

const objFunc = new iniFunc();
console.log(objFunc());

// return object element(this)

function thirFunc() {
  this.myNewFunc = function () {
    return this;
  }
}

// console.log(thirFunc().myNewFunc());
const objTest = new thirFunc();
console.log(objTest.myNewFunc());

const fourFunc = () => {
  this.myFunc = () => {
    return this;
  }
}
// console.log(fourFunc().myFunc);
// console.log(fourFunc().myFunc());
// const fourObj = new fourFunc();
// console.log(fourObj);
// second degree function
const objectJs = {
  method() {
    return this;
  }
}

console.log(objectJs.method());
// const variable = new objectJs();
// anonymous function
const objectJs2 = {
  method: () => {
    return this;
  }
}

console.log(objectJs2.method());

