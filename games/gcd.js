import greetings from '../src/cli.js';
import { randomNumber, gameChain } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('Find the greatest common divisor of given numbers.');

const BiggestDevider = (numberOne, numberTwo) => {
  let devider;
  if (numberOne === numberTwo) {
    devider = numberTwo;
  } else {
    devider = Math.min(numberOne, numberTwo);
    while ((numberOne % devider !== 0) || (numberTwo % devider) !== 0) {
      devider -= 1;
    }
  }
  return devider;
};

const randomNumbersDevider = (param) => {
  let counter = 1;
  while (counter <= param) {
    const firstNumber = randomNumber();
    const secondNumber = randomNumber();
    const correctAnswer = String(BiggestDevider(firstNumber, secondNumber));
    const numbers = `${firstNumber} ${secondNumber}`;
    if (gameChain(numbers, correctAnswer, userName) === false) {
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default randomNumbersDevider;
