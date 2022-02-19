import getRandomNumber from '../utils.js';
import runGameEngine from '../index.js';

const calcDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  let result;
  switch (operator) {
    case '+':
      result = num1 + num2;
      break;
    case '-':
      result = num1 - num2;
      break;
    default:
      result = num1 * num2;
  }
  return result;
};

const generateRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const currentExpression = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(calculate(firstNumber, secondNumber, randomOperator));
  const resultExpression = [currentExpression, correctAnswer];
  return resultExpression;
};

const runCalcGame = () => runGameEngine(generateRound, calcDescription);
export default runCalcGame;
