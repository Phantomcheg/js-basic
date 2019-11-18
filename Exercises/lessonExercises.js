function sayHello() {
  console.log(this.name);
}

const user = {
  name: 'Vasily',
  sayHello() {
    console.log(this.name);
  }
};

user.sayHello();

function showFullName() {
  console.log(this.firstName, '', this.lastName);
}

const myUser = {
  firstName: 'A',
};
myUser.lastName = 'B';

showFullName.call(myUser);

function shoFullNameSeparator(separator) {
  console.log(`${this.firstName}${separator}${this.lastName}`);
}

shoFullNameSeparator.call({ firstName: 'first', lastName: 'last' }, '@');
shoFullNameSeparator.apply({ firstName: 'first', lastName: 'last' }, ['@']);

const user3 = {
  firstName: 'John',
  lastName: 'Smith'
};

shoFullNameSeparator.apply(user3, ['@']);
//
// user3.hello = shoFullNameSeparator();
//
// user3.hello(' ');


const team = {
  members: ['Alex', 'Kate'],

  greetingWord: 'Hi!',

  sayHiToEveryone() {
    this.members.forEach((member) => {
      console.log(`${this.greetingWord} ${member}`);
    });
  }
};

team.sayHiToEveryone();


const user5 = {
  name: 'name'
};

function logName() {
  console.log(this.name);
}

logName.call(user5);

const bindedLogName = logName.bind(user5);
bindedLogName();
