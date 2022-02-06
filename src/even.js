import readlineSync from 'readline-sync';
import greetings from './cli.js';

const randomNumber = () => Math.floor(Math.random() * 99 + 1);
console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('Answer "yes" if the number is even, otherwise answer "no".');

function evenNumber(param) {
  let counter = 1;
  while (counter <= param) {
    const currentNumber = randomNumber();
    console.log(`Question: ${currentNumber}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    const correctAnswer = (currentNumber % 2 === 0) ? 'yes' : 'no';
    if (correctAnswer === playerAnswer) {
      console.log('Correct!');
      counter += 1;
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${userName}`);
      return;
    }
  }
  console.log(`Congratulations, ${userName}!`);
}
export default evenNumber;
