import { cons } from 'hexlet-pairs';
import * as common from './common';
import runGame from '../index';


const BALANCE_RULE = 'Balance the given number.';
const MAX_VALUE = 100001;

const getArray = (num) => {
  const numArray = [];
  const getNum = (currentNum, accumulator) => {
    if (currentNum === 0) {
      return numArray;
    }

    numArray.push(currentNum % 10);
    return getNum(Math.floor(currentNum / 10), accumulator + 1);
  };
  return getNum(num, 0);
};

const swap = (items, firstIndex, secondIndex) => {
  const diff = Math.abs(items[firstIndex] - items[secondIndex]);
  if (diff > 1) {
    const value = Math.floor(diff / 2);
    if (items[firstIndex] > items[secondIndex]) {
      // items = items.splice();
      items.splice(firstIndex, 1, items[firstIndex] - value);
      items.splice(firstIndex, 1, items[secondIndex] + value);
    } else {
      items.splice(firstIndex, 1, items[firstIndex] + value);
      items.splice(firstIndex, 1, items[secondIndex] - value);
    }
  }
};

const generateData = () => {
  const num = common.getRandom(MAX_VALUE);

  console.log(`num -> ${num}`);

  const ar = getArray(num);

  let max = 0;
  let min = 9;

  let maxIndex = 0;
  let minIndex = 0;

  while ((max - min) !== 1) {
    for (let outer = 0; outer < ar.length; outer += 1) {
      if (ar[outer] > max) {
        maxIndex = outer;
        max = ar[outer];
      }
      if (ar[outer] < min) {
        minIndex = outer;
        min = ar[outer];
      }
    }
    if (max === min) {
      break;
    }
    if ((max - min) > 1) {
      swap(ar, maxIndex, minIndex);
      maxIndex = 0; minIndex = 0; max = 0; min = 9;
    }
  }
  console.log(`DEBUG::ar-> ${ar}`);

  return cons(`${num}`, ar.sort().join(''));
};

const checkBalanceNumber = () => {
  runGame(BALANCE_RULE, generateData);
};

export default checkBalanceNumber;
