import { cons } from 'hexlet-pairs';
import * as common from '../games/common';
import runGame from '..';


const PRIME_RULE = 'Is this number prime?';

const isEven = value => value % 2 === 0;

const isPrime = (value) => {
  if (value <= 2) {
    return true;
  }
  if (isEven(value)) {
    return false;
  }
  const maxDivider = Math.ceil(Math.sqrt(value));
  const stepIter = (divider) => {
    if (value % divider === 0) {
      return false;
    }
    if (divider >= maxDivider) {
      return true;
    }
    return stepIter(divider + 2);
  };
  return stepIter(3);
};

const generateData = () => {
  const rand = common.getRandom();
  return cons(rand, isPrime(rand) ? 'yes' : 'no');
};

const checkPrime = () => {
  runGame(PRIME_RULE, generateData);
};

export default checkPrime;
