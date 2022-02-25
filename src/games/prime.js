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
  return devider === number;
};

const generateRound = () => {
  const currentNumber = getRandomNumber(1, 100);
  const correctAnswer = isPrime(currentNumber) ? 'yes' : 'no';
  return [currentNumber, correctAnswer];
};

const runPrimeGame = () => runGameEngine(generateRound, primeDescription);
export default runPrimeGame;
