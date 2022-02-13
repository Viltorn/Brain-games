import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('What is the result of the expression?');

const numberOfRounds = 3;

const gameChain = (currentGame) => {
  let counter = 1;
  while (counter <= numberOfRounds) {
    const [question, answer] = currentGame();
    console.log(`Question: ${question}`);
    const playerAnswer = readlineSync.question('Your answer: ');
    if (answer === playerAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${answer}'`);
      console.log(`Let's try again, ${userName}!`);
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameChain;
