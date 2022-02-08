import { cons, car, cdr } from '@hexlet/pairs';
import greetings from '../src/cli.js';
import { randomNumber, gameChain } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('What is the result of the expression?');

const randomExpression = () => {
  const firstNumber = randomNumber();
  const secondNumber = randomNumber();
  const symbols = ['+', '-', '*'];
  const randomSign = symbols[Math.floor(Math.random() * symbols.length)];
  if (randomSign === '+') {
    const result = String(firstNumber + secondNumber);
    const expression = `${firstNumber} + ${secondNumber}`;
    const pair = cons(expression, result);
    return pair;
  }
  if (randomSign === '-') {
    const result = String(firstNumber - secondNumber);
    const expression = `${firstNumber} - ${secondNumber}`;
    const pair = cons(expression, result);
    return pair;
  } const result = String(firstNumber * secondNumber);
  const expression = `${firstNumber} * ${secondNumber}`;
  const pair = cons(expression, result);
  return pair;
};

const calculate = (param) => {
  let counter = 1;
  while (counter <= param) {
    const currentPair = randomExpression();
    const currentExpression = car(currentPair);
    const correctResult = cdr(currentPair);
    if (gameChain(currentExpression, correctResult, userName) === false) {
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default calculate;
