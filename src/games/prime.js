import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const primeDescription = 'Answer "yes" if given number is prime. Otherwise answer "no".';

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

const generateRound = () => {
  const currentNumber = getRandomNumber(1, 100);
  const correctAnswer = (isPrime(currentNumber) === true) ? 'yes' : 'no';
  const resultExpression = [currentNumber, correctAnswer];
  return resultExpression;
};

const runPrimeGame = () => runGameEngine(generateRound, primeDescription);
export default runPrimeGame;
