import greetings from '../src/cli.js';
import { randomNumber, gameChain } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const isEven = (number) => number % 2 === 0;
const playEvenGame = (param) => {
  let counter = 1;
  while (counter <= param) {
    const currentNumber = randomNumber();
    const correctAnswer = (isEven(currentNumber)) ? 'yes' : 'no';
    if (gameChain(currentNumber, correctAnswer, userName) === false) {
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default evenNumber;
