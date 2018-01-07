import { cons } from 'hexlet-pairs';
import * as common from '../games/common';
import runGame from '..';


const CALC_RULE = 'What is the result of the expression?';
const operatorArray = ['+', '-', '*'];
const MAX_VALUE = 101;

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      return 0;
  }
};

const generateData = () => {
  const num1 = common.getRandom(MAX_VALUE);
  const num2 = common.getRandom(MAX_VALUE);
  const operator = operatorArray[common.getRandom(operatorArray.length)];

  return cons(`${num1} ${operator} ${num2}`, calculate(num1, num2, operator));
};

const checkCalculate = () => {
  runGame(CALC_RULE, generateData);
};

export default checkCalculate;
