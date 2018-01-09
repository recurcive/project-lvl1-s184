import { cons } from 'hexlet-pairs';
import * as common from '../games/common';
import runGame from '..';


const PRIME_RULE = 'Is this number prime?';

const isPrime = (random) => {
  if (random <= 2) {
    return true;
  }
  const maxDivider = Math.ceil(Math.sqrt(random));
  const stepIter = (divider) => {
    if (random % divider === 0) {
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
