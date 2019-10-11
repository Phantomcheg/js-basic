// 1. Declare a variable on each type using two options: plain creation, creation with constructor.

const someNumber = 99;
const someString = 'testString';
const someBool = true;
const someEmpty = null;
let someUnknown;
const someObj = {};
const someSymbol = Symbol('test');

const constructNumber = new Number(10);
const constructString = new String('text');
const constructBool = new Boolean(true);
const constructArr = new Array;
const constructObj = new Object();

// 2. Use operator typeof on each of them.

const dataTypes = [ someNumber, someString, someBool, someEmpty, someUnknown, someObj, someSymbol ];

dataTypes.forEach((item) => {
  console.log(typeof item);
});

const constructDataTypes = [ constructNumber, constructString, constructBool, constructArr, constructObj ];

// Just to show that type of all elements will be objects
constructDataTypes.forEach((newItem) => {
  console.log(typeof newItem);
});

// 3. Demonstrate object's references.

const iPhone = {
  name: 'XS Max',
  year: 2018
};
const samsung = iPhone;

iPhone.name = '11 Pro';
iPhone.year = 2019;

console.log(samsung);
console.log(iPhone);

// 4. Demonstrate string's backticks features.

const myPhone = `I have ${iPhone.name} iPhone, which was presented in ${samsung.year}`;
console.log(myPhone);

// # Additional
// 1. Declare an array containing different data types.

const arr = [ 'test1', 6, Symbol('lol'), true, {}, 18, 'anyText', 'test2', false, null, undefined ];

// 2. Iterate through it and collect amount of each data type to object.

const finalObject = {};

arr.forEach((arrayItem) => {
  finalObject[typeof arrayItem] = (finalObject[typeof arrayItem] || 0) + 1;
});

console.log(finalObject);
