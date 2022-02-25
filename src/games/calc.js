import getRandomNumber from '../utils.js';
import runGameEngine from '../index.js';

const calcDescription = 'What is the result of the expression?';
const operators = ['+', '-', '*'];

const calculate = (num1, num2, operator) => {
  switch (operator) {
    case '+':
      return num1 + num2;
    case '-':
      return num1 - num2;
    case '*':
      return num1 * num2;
    default:
      throw new Error('Unsupported operator');
  }
};

const generateRound = () => {
  const firstNumber = getRandomNumber(0, 100);
  const secondNumber = getRandomNumber(0, 100);
  const randomOperator = operators[getRandomNumber(0, operators.length - 1)];
  const currentExpression = `${firstNumber} ${randomOperator} ${secondNumber}`;
  const correctAnswer = String(calculate(firstNumber, secondNumber, randomOperator));
  return [currentExpression, correctAnswer];
};

const runCalcGame = () => runGameEngine(generateRound, calcDescription);
export default runCalcGame;
