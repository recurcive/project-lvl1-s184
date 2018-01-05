import readlineSync from 'readline-sync';
import greetUser from '..';


const MAX_VALUE = 1001;
const MAX_ATTEMP = 3;

const printWelcomeText = (text) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${text}\n`);
};

const isAnswerCorrect = (value, answer) => value.toString() === answer.toLowerCase();

const printIncorrectText = (answer, user, correctValue) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctValue}'.`);
  console.log(`Let's try again, ${user}!`);
};

export const getRandom = (maxValue = MAX_VALUE) => Math.floor(Math.random() * maxValue);

export const runGame = (ruleText, getValue) => {
  printWelcomeText(ruleText);
  const user = greetUser();

  const checkStep = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    const value = getValue();
    // console.log(`Question: ${value}`);
    const answer = readlineSync.question('Your answer: ');
    const res = isAnswerCorrect(value, answer);
    if (res) {
      console.log('Correct!');
      checkStep(counter - 1);
    } else {
      printIncorrectText(answer, user, value);
    }
  };

  checkStep(MAX_ATTEMP);
};
