import { cons } from 'hexlet-pairs';
import * as common from '../games/common';
import runGame from '..';


const EVEN_RULE = 'Answer "yes" if number even otherwise answer "no".';

const isEven = (value) => {
  if ((value % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const generateData = () => {
  const value = common.getRandom();
  return cons(value, isEven(value));
};

const checkEvenNumber = () => {
  runGame(EVEN_RULE, generateData);
};

export default checkEvenNumber;
