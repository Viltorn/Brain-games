import readlineSync from 'readline-sync';
import greetings from '../src/cli.js';

const numberOfRounds = 3;

const gameChain = (currentGame, currentDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = greetings();
  console.log(currentDescription);
  for (let i = 1; i <= numberOfRounds; i += 1) {
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
  }
  console.log(`Congratulations, ${userName}!`);
};
export default gameChain;
