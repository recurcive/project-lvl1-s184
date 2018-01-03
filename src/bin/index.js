import readlineSync from 'readline-sync';

const greetingUser = () => {
  console.log('Welcome to the Brain Games!\n');

  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
};

export default greetingUser;
