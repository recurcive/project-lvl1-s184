import { cons } from 'hexlet-pairs';
import * as common from '../games/common';
import runGame from '../index';

const PROGRESSION_RULE = 'What number is missing in this progression?';
const STEP_MAX_VALUE = 100;
const INDEX_MAX_VALUE = 10;

const getPartByIndex = (start, index, step) => start + ((index - 1) * step);

const generateData = () => {
  const startNum = common.getRandom();
  const step = common.getRandom(STEP_MAX_VALUE);
  const index = common.getRandom(INDEX_MAX_VALUE);

  const seq = Array.from({ length: INDEX_MAX_VALUE }, (v, i) => getPartByIndex(startNum, i, step));

  console.log(`DEBUG: ${seq}`);
  seq[index] = '..';

  return cons(`${seq.join(' ')}`, getPartByIndex(startNum, index, step));
};

const checkProgression = () => {
  runGame(PROGRESSION_RULE, generateData);
};

export default checkProgression;
