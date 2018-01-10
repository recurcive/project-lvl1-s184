/* import { cons } from 'hexlet-pairs';
import * as common from './common';
import runGame from '../index'; */


const BALANCE_RULE = 'Balance the given number.';
const MAX_VALUE = 100001;

const getArray = (num) => {
  let numArray = [];
  const tempArray = [];
  const getNum = (currentNum, partSum) => {
    if (currentNum === 0) {
      console.log(`tempArray -> ${tempArray}`);
      console.log(`numArray -> ${numArray}`);
      return numArray;
    }
    /* if (numArray.length > 0) {
      const average = Math.ceil(partSum / numArray.length);
      console.log(`partSum -> ${partSum}`);
      console.log(`average -> ${average}`);
      const next = currentNum % 10;

      const diff = Math.ceil((next - average) / 2);
      const addValue = Math.ceil(diff / numArray.length);
      numArray = numArray.map(el => el + addValue);
      const nextValue = next - diff;

      numArray.push(nextValue);
      tempArray.push(next);
    } else {
      numArray.push(currentNum % 10);
      tempArray.push(currentNum % 10);
    } */

    if (numArray.length > 0) {
      const next = currentNum % 10;
      const average = Math.trunc(partSum / numArray.length);
      const diff = next - average;
      const addValue = Math.trunc(diff / (numArray.length + 1));
      numArray = numArray.map(el => el + addValue);
      const nextValue = next - (addValue * numArray.length);

      numArray.push(nextValue);
      tempArray.push(next);
    } else {
      numArray.push(currentNum % 10);
      tempArray.push(currentNum % 10);
    }


    return getNum(Math.floor(currentNum / 10), partSum + (currentNum % 10));
  };
  return getNum(num, 0);
};

const swap = (items, firstIndex, secondIndex) => {
  const diff = Math.abs(items[firstIndex] - items[secondIndex]);
  if (diff > 1) {
    const value = Math.floor(diff / 2);
    if (items[firstIndex] > items[secondIndex]) {
      items[firstIndex] -= value;
      items[secondIndex] += value;
    } else {
      items[firstIndex] += value;
      items[secondIndex] -= value;
    }
  }
};

const generateData = () => {
  const num = 3810; // Math.floor(Math.random() * 10001);// common.getRandom(MAX_VALUE);

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

  return 1;
  // return cons(`${num}`, ar.sort().join(''));
};

const checkBalanceNumber = () => {
  // runGame(BALANCE_RULE, generateData);
};

generateData();

// export default checkBalanceNumber;
