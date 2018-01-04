#!/usr/bin/env node
import readlineSync from 'readline-sync';
import greetingUser from '..';

const MAX_VALUE = 1001;
const MAX_ATTEMP = 3;

const welcome = () => {
  console.log('Welcome to the Brain Games!');
  console.log('Answer "yes" if number even otherwise answer "no".\n');
};

const isEven = (value) => {
  if ((value % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const opposite = answer => (answer.toLowerCase === 'yes' ? 'no' : 'yes');

const isAnswerCorrect = (value, answer) => {
  if (isEven(value) === answer.toLowerCase()) {
    return true;
  }
  return false;
};

const checkEvenNumber = () => {
  welcome();
  const user = greetingUser();

  const stepCheck = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    const value = Math.floor(Math.random() * MAX_VALUE);
    console.log(`Question: ${value}`);
    const answer = readlineSync.question('Your answer: ');
    const res = isAnswerCorrect(value, answer);
    if (res) {
      console.log('Correct!');
      stepCheck(counter - 1);
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${opposite(answer)}'.`);
      console.log(`Let's try again, ${user}!`);
    }
  };

  stepCheck(MAX_ATTEMP);
};

export default checkEvenNumber;

checkEvenNumber();
