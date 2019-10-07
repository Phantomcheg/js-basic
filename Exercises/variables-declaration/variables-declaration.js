// 1. Declare a variable which will be encapsulated from global scope.
// 3. Declare two variables which will be same-names but contain different values.
let firstOne = 200;
let secondOne = 'Some number';
console.log(firstOne);

firstOne = secondOne;
console.log(firstOne);

for (let firstOne = 0; firstOne <= 2; firstOne++) {
  if (firstOne === 1) {
    secondOne = firstOne;
    console.log(`Second variable should be reassigned to value: ${secondOne}`);
    let encapsulatedOne = 'Some string';
    console.log(encapsulatedOne);
  } else {
    if (firstOne >= 2) {
      secondOne = 'too large';
      console.log(secondOne);
    }
    if (firstOne <= 0) {
      secondOne = 'too small';
      console.log(secondOne);
    }
  }
}

// 2. Declare a variable which will appear in global object.
globalThis.firstOne = {
  result: 'testFirstElementInObject',
  data: 'testSecondElementInObject'
};

console.log(globalThis.firstOne.result);
console.log(firstOne.data);

// 1. Declare a variable with hosting.
console.log(firstWithHosting);
var firstWithHosting = 'Some text';

// Same task, but different usage
const secondHosting = () => {
  someValue = 2020;
  console.log(someValue);
};
secondHosting();

var someValue;
