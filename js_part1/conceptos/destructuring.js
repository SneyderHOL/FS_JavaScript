// destructuring since ecmaScritp 6
let myObject = {a:1, b:2, c:'hola', d: function(){console.log('this is a function')}, e:true}
console.log(myObject);

// let {a, b, c, d, e} = myObject;
let {a, b, c, e} = myObject;
console.log(a);
console.log(b);
console.log(c);
//console.log(d);
console.log(e);
// when array must have order
let myArray = [1, 2, 'hola', ()=>console.log('this is a function'), true]
console.log(myArray);

let [varOne, varTwo, myText, myFunc, myBool] = myArray;
console.log(varOne);
console.log(varTwo);
console.log(myText);
console.log(myFunc);
console.log(myBool);

// spread operator

let {d, ...others} = myObject;
console.log(d);
console.log(others);

let [aux1, aux2, ...restElem] = myArray;
console.log(aux1);
console.log(aux2);
console.log(restElem);

let myObject2 = {...myObject}
let myObject3 = myObject
console.log(myObject2 == myObject); // shallow copy
console.log(myObject3 == myObject); // same reference

let myNewObject = {a:1, b:2, c:'hola', d: function(){console.log('this is a function')}, e:true, f:{f1:'f1\'s value',f2:'f2\'s value',f3:'f3\'s value'}}
// console.log(myNewObject.f.f1);

let myNewObject2 = {...myNewObject}
console.log(myNewObject.f.f2);
myNewObject2.f.f2 = "new f2";
console.log(myNewObject.f.f2);
// full copy with lodash clonedeep, or with JSON.stringify or JSON.parse

