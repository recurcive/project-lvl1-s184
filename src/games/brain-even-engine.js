#!/usr/bin/env node

// import readlineSync from 'readline-sync';
// import greetUser from '..';
// import { opposite, MAX_ATTEMP, MAX_VALUE } from '../games/common';
import * as common from '../games/common';

const EVEN_RULE = 'Answer "yes" if number even otherwise answer "no".';

const isEven = () => {
  const value = common.getRandom();
  console.log(`Question: ${value}`);
  if ((value % 2) === 0) {
    return 'yes';
  }
  return 'no';
};

const checkEvenNumber = () => {
  common.runGame(EVEN_RULE, isEven);
};

export default checkEvenNumber;
