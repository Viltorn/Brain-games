import greetings from '../src/cli.js';
import { randomNumber, gameChain } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

const evenNumber = (param) => {
  let counter = 1;
  while (counter <= param) {
    const currentNumber = randomNumber();
    const correctAnswer = (currentNumber % 2 === 0) ? 'yes' : 'no';
    if (gameChain(currentNumber, correctAnswer, userName) === false) {
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default evenNumber;
