export const MAX_VALUE = 1001;

export const getRandom = (maxValue = MAX_VALUE) => Math.floor(Math.random() * maxValue);

export const isEven = value => value % 2 === 0;
