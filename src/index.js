import readlineSync from 'readline-sync';
import { car, cdr, toString } from 'hexlet-pairs';


const MAX_ATTEMP = 3;

const printWelcomeRuleText = (text) => {
  console.log('Welcome to the Brain Games!');
  console.log(`${text}\n`);
};

const isAnswerCorrect = (value, answer) => value.toString() === answer.toLowerCase();

const greetUser = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  return nameUser;
};

const printIncorrectText = (answer, user, correctValue) => {
  console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctValue}'.`);
  console.log(`Let's try again, ${user}!`);
};

const runGame = (ruleText, getValue) => {
  printWelcomeRuleText(ruleText);
  const user = greetUser();

  const checkStep = (counter) => {
    if (counter === 0) {
      console.log(`Congratulations, ${user}!`);
      return;
    }
    const pair = getValue();
    console.log(`Question: ${car(pair)}`);
    const answer = readlineSync.question('Your answer: ');
    const res = isAnswerCorrect(cdr(pair), answer);
    if (res) {
      console.log('Correct!');
      checkStep(counter - 1);
    } else {
      printIncorrectText(answer, user, cdr(pair));
    }
  };

  checkStep(MAX_ATTEMP);
};

export default runGame;
