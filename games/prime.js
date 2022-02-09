import greetings from '../src/cli.js';
import { randomNumber, gameChain } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

const isPrime = (number) => {
  if (number <= 1) {
    return false;
  }
  let devider = 2;
  while (number % devider !== 0) {
    devider += 1;
  }
  const result = (devider === number);
  return result;
};

const primeNumber = (param) => {
  let counter = 1;
  while (counter <= param) {
    const currentNumber = randomNumber();
    const correctAnswer = (isPrime(currentNumber) === true) ? 'yes' : 'no';
    if (gameChain(currentNumber, correctAnswer, userName) === false) {
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default primeNumber;
