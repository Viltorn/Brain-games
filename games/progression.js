import greetings from '../src/cli.js';
import { randomNumber, gameChain } from '../src/index.js';

console.log('Welcome to the Brain Games!');
const userName = greetings();
console.log('What number is missing in the progression?');

const makeProgression = () => {
  const minLength = 5;
  const maxLength = 10;
  const currentProgressionLength = Math.floor(Math.random() * (maxLength - minLength)) + minLength;
  const maxProgressionStep = 5;
  const currentProgressionStep = Math.floor(Math.random() * maxProgressionStep) + 1;
  let currentValue = randomNumber();
  const randomProgression = [];
  for (let i = 1; i <= currentProgressionLength; i += 1) {
    randomProgression.push(currentValue);
    currentValue += currentProgressionStep;
  }
  return randomProgression;
};

const mathProgression = (param) => {
  let counter = 1;
  while (counter <= param) {
    const progression = makeProgression();
    const lostValue = progression[Math.floor(Math.random() * progression.length)];
    const correctAnswer = String(lostValue);
    progression[progression.indexOf(lostValue)] = '..';
    const separator = ' ';
    const currentExpression = progression.join(separator);
    if (gameChain(currentExpression, correctAnswer, userName) === false) {
      return;
    }
    counter += 1;
  }
  console.log(`Congratulations, ${userName}!`);
};
export default mathProgression;
