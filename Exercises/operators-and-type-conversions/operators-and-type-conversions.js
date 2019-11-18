

const oneHundred = `${10}0`;
console.log(oneHundred);


const revenue = 'Amazon annual revenue of US$232.887 billion';
const someInt = parseFloat(revenue);
console.log(someInt);

// Tasks from lessons
function countPositivesSumNegatives(input) {
  const result = [];
  const positiveNumbers = input.filter((element) => {
    return element > 0;
  });

  const negativeNumbers = input.filter((element) => element < 0);

  result[0] = positiveNumbers.length;
  result[1] = negativeNumbers.reduce((accumulator, element) => {
    return accumulator + element;
  }, 0);

  return result;
}
