import readlineSync from 'readline-sync';
// eslint-disable-next-line import/no-unresolved
import greetings from './cli.js';

const numberOfRounds = 3;

const runGameEngine = (generateRound, gameDescription) => {
  console.log('Welcome to the Brain Games!');
  const userName = greetings();
  console.log(gameDescription);
  for (let i = 1; i <= numberOfRounds; i += 1) {
    const [question, answer] = generateRound();
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
export default runGameEngine;
