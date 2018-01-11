import { cons } from 'hexlet-pairs';
import * as common from './common';
import runGame from '../index';


const BALANCE_RULE = 'Balance the given number.';
const MAX_VALUE = 100001;

const getAddend = (i, remainder) => (i < remainder ? 1 : 0);

const getArray = (num) => {
  let numArray = [];
  const getNum = (currentNum, accumulator, counter) => {
    if (currentNum === 0) {
      console.log(`DEBUG::numArray -> ${numArray}`); // TODO delete debug
      return numArray;
    }

    const partSum = accumulator + (currentNum % 10);
    const mainNumber = Math.floor(partSum / counter);
    const remainder = Math.floor(partSum % counter);

    numArray = Array.from({ length: counter }, (v, i) => (mainNumber + getAddend(i, remainder)));

    return getNum(Math.floor(currentNum / 10), accumulator + (currentNum % 10), counter + 1);
  };
  return getNum(num, 0, 1);
};

const generateData = () => {
  const num = common.getRandom(MAX_VALUE);

  return cons(`${num}`, getArray(num).sort().join(''));
};

const checkBalanceNumber = () => {
  runGame(BALANCE_RULE, generateData);
};

export default checkBalanceNumber;
