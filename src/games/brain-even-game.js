import { cons } from 'hexlet-pairs';
import * as common from '../games/common';
import runGame from '..';


const EVEN_RULE = 'Answer "yes" if number even otherwise answer "no".';

const generateData = () => {
  const value = common.getRandom();
  return cons(value, common.isEven(value) ? 'yes' : 'no');
};

const checkEvenNumber = () => {
  runGame(EVEN_RULE, generateData);
};

export default checkEvenNumber;
