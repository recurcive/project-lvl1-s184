#!/usr/bin/env node
import * as common from '../games/common';


const CALC_RULE = 'What is the result of the expression?';

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

const engine = () => {
  const operatorArray = ['+', '-', '*'];
  const num1 = common.getRandom(MAX_VALUE);
  const num2 = common.getRandom(MAX_VALUE);
  const operator = operatorArray[common.getRandom(operatorArray.length)];
  const expression = `${num1} ${operator} ${num2}`;

  console.log(`Question: ${expression}`);
  const value = calculate(num1, num2, operator);
  console.log(`res -> ${value}`);
  return value;
};

const checkCalculate = () => {
  common.runGame(CALC_RULE, engine);
};

export default checkCalculate;
