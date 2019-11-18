const triangle = {
  sideCount: 3,
  sideLength: 4
};

const square = {
  sideCount: 4,
  sideLength: 2
};

function calculatePerimeter() {
  return this.sideCount * this.sideLength;
}
const binded = calculatePerimeter.bind(triangle);
console.log(binded());

console.log(calculatePerimeter.call(square));

const calculator = {
  readArg: function read(firstArg, secondArg) {
    this.firstArg = firstArg;
    this.secondArg = secondArg;
    return this;
  },
  summary: function sum() {
    return console.log(this.firstArg + this.secondArg);
  },
  multi: function multiply() {
    return console.log(this.firstArg * this.secondArg);
  }
};

calculator.readArg(20, 45).multi();

const digit = {
  setNumber(a) {
    this.number = a;
  },
  add(second) {
    return this.number + second;
  }
};

digit.setNumber(3);
console.log(digit.add(5));

function cacheDecorator(cachedFunction, context) {
  const cache = {};
  return function (x) {
    if (cache[x]) {
      return cache[x];
    }
    console.log('executing', x);
    const result = cachedFunction(x);
    const result2 = cachedFunction.call(context, x);
    cache[x] = result;
    return result;
  };
}

const cachedAdd = cacheDecorator(digit.add.bind(digit));
const cachedAdd2 = cacheDecorator(digit.add, digit);

cachedAdd(3);
