import { cons } from 'hexlet-pairs';
import * as common from '../games/common';
import runGame from '..';


const EVEN_RULE = 'Find the greatest common divisor of given numbers.';

const getMax = (a, b) => (a > b ? a : b);

const calculateGCD = (num1, num2) => {
  const max = getMax(num1, num2);
  const min = max === num1 ? num2 : num1;

  const stepIter = (divider) => {
    // DEBUG: console.log(`numMax -> ${max}, numMin -> ${min}, divider-> ${divider}`);
    if (max % divider === 0 && min % divider === 0) {
      return divider;
    }
    return stepIter(divider - 1);
  };

  if (max % min === 0) {
    return min;
  }
  return stepIter(Math.floor(min / 2));
};

const generateData = () => {
  const num1 = common.getRandom();
  const num2 = common.getRandom();

  const result = calculateGCD(num1, num2);
  console.log(`DEBUG:result->${result}`);

  return cons(`${num1} ${num2}`, result);
};

const checkGreatestCommonDivisor = () => {
  runGame(EVEN_RULE, generateData);
};

export default checkGreatestCommonDivisor;
