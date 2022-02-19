import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const progressionDescription = 'What number is missing in the progression?';

const genProgression = (minStartValue, maxStartValue, minLength, maxLength, minStep, maxStep) => {
  const progressionLength = getRandomNumber(minLength, maxLength);
  const progressionStep = getRandomNumber(minStep, maxStep);
  let valueOfProgression = getRandomNumber(minStartValue, maxStartValue);
  const progressionArray = [];
  for (let i = 1; i <= progressionLength; i += 1) {
    progressionArray.push(valueOfProgression);
    valueOfProgression += progressionStep;
  }
  return progressionArray;
};

const generateRound = () => {
  const currentProgressionArray = genProgression(0, 100, 5, 10, 1, 5);
  const lostValue = currentProgressionArray[getRandomNumber(0, currentProgressionArray.length - 1)];
  currentProgressionArray[currentProgressionArray.indexOf(lostValue)] = '..';
  const separator = ' ';
  const currentExpression = currentProgressionArray.join(separator);
  const correctAnswer = String(lostValue);
  const resultExpression = [currentExpression, correctAnswer];
  return resultExpression;
};

const runProgressionGame = () => runGameEngine(generateRound, progressionDescription);
export default runProgressionGame;
