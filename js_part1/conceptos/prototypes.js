function MyBaseObject(name, lastName) {
  this.name = name;
  this.lastName = lastName;
  this.getFullName = function () {
    return `${this.name} ${this.lastName}`
  }
}

let newObject1 = new MyBaseObject('Steve', 'Johnson');
console.log(newObject1.getFullName());
let newObject2 = new MyBaseObject('Jack');
console.log(newObject2.getFullName());
let newObject3 = new MyBaseObject();
console.log(newObject3.getFullName());

function MyBaseObject2() {
  this.getFullName = function () {
    return `${this.name} ${this.lastName}`
  }
  this.setName = function(name) {
    this.name = name;
  }
  this.setLastName = function(lastName) {
    this.lastName = lastName;
  }
}

let object1 = new MyBaseObject2();
console.log(object1.getFullName());
MyBaseObject2.prototype.name = 'empty';
console.log(object1.getFullName());
//let object2 = new MyBaseObject('Jack');
//console.log(object2.getFullName());

function MyBaseObject3() {
}
MyBaseObject3.prototype.getFullName = function () {
  return `${this.name} ${this.lastName}`
}
MyBaseObject3.prototype.setName = function (name) {
  this.name = name;
}
MyBaseObject3.prototype.setLastName = function (lastName) {
  this.lastName = lastName;
}
console.log(MyBaseObject3.setName);
console.log(MyBaseObject3.prototype.setName);
let myEmptyObject = new MyBaseObject3();
console.log(myEmptyObject.setName);
console.log(myEmptyObject.getFullName());
MyBaseObject3.prototype.name = 'empty';
console.log(myEmptyObject.getFullName());
myEmptyObject.setLastName('Cooper');
console.log(myEmptyObject.getFullName());
// coercion
// primitive
let text = "this is a text";
console.log(text instanceof String);
let text2 = new String('text2');
console.log(text2 instanceof String);

let concat = '1' + 1;
console.log(concat);
console.log(typeof(concat));
console.log(!null + !null);
console.log(!!1);
console.log(!!0);
console.log(!!4 + !null);
console.log(true + 3);
console.log(!!null + '1');
console.log(!!false + 1);
