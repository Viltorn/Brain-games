import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const evenDescription = 'Answer "yes" if the number is even, otherwise answer "no".';

const isEven = (number) => number % 2 === 0;

const generateRound = () => {
  const currentNumber = getRandomNumber(0, 100);
  const correctAnswer = isEven(currentNumber) ? 'yes' : 'no';
  return [currentNumber, correctAnswer];
};

const runEvenGame = () => runGameEngine(generateRound, evenDescription);
export default runEvenGame;
