// 1. Assign string with unicode to a variable.

const variableWithUnicode = 'Look at my doggy \uD83D\uDC36';
console.log(variableWithUnicode);

// 2. Declare a variable with string with escaped symbols.

const variableWithEscapedSymbol = 'I\'m just trying to use escaped symbols here\n. I hope it\'s working!';
console.log(variableWithEscapedSymbol);

// 3. Declare a variable which will contain name of your favourite animal.

const favouriteAnimal = 'Tibetan mastiff';

// 4. Log a message `My favourite animal is ` with dynamic variable from previous task.

console.log(`My favourite animal is dog breed ${favouriteAnimal}`);

// 5. Declare a variable which contain name and surname of your favourite writer in lowercase. Log his/her name
// with capitals first letters.

const favouriteWriter = 'dan brown';
function convertToCapitalLetters(writer) {
  const arrayOfNames = writer.split(' ');
  for (let i = 0; i < arrayOfNames.length; i++) {
    arrayOfNames[i] = arrayOfNames[i][0].toUpperCase() + arrayOfNames[i].substr(1);
  }
  return arrayOfNames.join(' ');
}

console.log(convertToCapitalLetters(favouriteWriter));

// 1. Declare a function which will receive password string. Check is password strong enough:
//     - should contain at least one capital letter;
// - length no less than 8 characters.
// - should contain at leas one special character.

function validatePassword(password) {
  let suggestedPassword = password;
  const valid = true;
  if (typeof password === 'string') {
    if (!password.match(/[A-Z]/)) {
      console.log('Password should contain at least one capital letter');
      suggestedPassword = suggestedPassword[0].toUpperCase();
    }
    if (!password.match(/[#?!@$%^&*-.,]/)) {
      console.log('Password should contain at least one special character');
      const symbols = '#?!@$%^&*-.,';
      let retVal = '';
      for (let i = 0, n = symbols.length; i < 2; ++i) {
        retVal += symbols.charAt(Math.floor(Math.random() * n));
      }
      suggestedPassword = `${suggestedPassword}${retVal}`;
      return suggestedPassword;
    }
    if (password.length < 8) {
      console.log('Length should be no less than 8 characters');
    }
    return console.log(`Your password '${password}' is strong enough`);
  }
  console.log('Only strings available');
}
console.log(validatePassword('qQe'));

// 2. Make function which will generate password suggestion based on passed password, and required strongest.

