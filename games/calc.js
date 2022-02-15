import { getRandomNumber } from '../src/utils.js';

export const calcDescription = 'What is the result of the expression?';
const symbols = ['+', '-', '*'];

export const playCalcGame = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const randomSign = symbols[getRandomNumber(0, symbols.length - 1)];
  if (randomSign === '+') {
    const expression = `${firstNumber} + ${secondNumber}`;
    const expressionResult = String(firstNumber + secondNumber);
    const result = [expression, expressionResult];
    return result;
  }
  if (randomSign === '-') {
    const expression = `${firstNumber} - ${secondNumber}`;
    const expressionResult = String(firstNumber - secondNumber);
    const result = [expression, expressionResult];
    return result;
  } const expression = `${firstNumber} * ${secondNumber}`;
  const expressionResult = String(firstNumber * secondNumber);
  const result = [expression, expressionResult];
  return result;
};
