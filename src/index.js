import readlineSync from 'readline-sync';


const greetUser = () => {
  const nameUser = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${nameUser}`);
  return nameUser;
};

export default greetUser;
