import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const gcdDescription = 'Find the greatest common divisor of given numbers.';

const getBiggestDevider = (numberOne, numberTwo) => {
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

const generateRound = () => {
  const firstNumber = getRandomNumber(1, 100);
  const secondNumber = getRandomNumber(1, 100);
  const currentExpression = `${firstNumber} ${secondNumber}`;
  const correctAnswer = String(getBiggestDevider(firstNumber, secondNumber));
  const resultExpression = [currentExpression, correctAnswer];
  return resultExpression;
};

const runGcdGAme = () => runGameEngine(generateRound, gcdDescription);
export default runGcdGAme;
