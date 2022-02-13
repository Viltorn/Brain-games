import { cons, car, cdr } from '@hexlet/pairs';
import { getRandomElement, getRandomNumber } from '../src/utils.js';

const symbols = ['+', '-', '*'];

const playCalcGame = () => {
  const firstNumber = getRandomNumber();
  const secondNumber = getRandomNumber();
  const randomSign = getRandomElement(symbols);
  if (randomSign === '+') {
    const result = String(firstNumber + secondNumber);
    const expression = `${firstNumber} + ${secondNumber}`;
    const pair = [expression, result];
    return pair;
  }
  if (randomSign === '-') {
    const result = String(firstNumber - secondNumber);
    const expression = `${firstNumber} - ${secondNumber}`;
    const pair = [expression, result];
    return pair;
  } const result = String(firstNumber * secondNumber);
  const expression = `${firstNumber} * ${secondNumber}`;
  const pair = [expression, result];
  return pair;
};
export default playCalcGame;
