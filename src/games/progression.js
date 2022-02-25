import runGameEngine from '../index.js';
import getRandomNumber from '../utils.js';

const progressionDescription = 'What number is missing in the progression?';

const genProgression = (startValue, progressionStep, progressionLength) => {
  const progression = [];
  let value = startValue;
  for (let i = 1; i <= progressionLength; i += 1) {
    progression.push(value);
    value += progressionStep;
  }
  return progression;
};

const generateRound = () => {
  const startValue = getRandomNumber(0, 100);
  const progressionStep = getRandomNumber(1, 5);
  const progressionLength = getRandomNumber(5, 10);
  const lostValueIndex = getRandomNumber(0, progressionLength - 1);
  const progression = genProgression(startValue, progressionStep, progressionLength);
  const correctAnswer = String(progression[lostValueIndex]);
  progression[lostValueIndex] = '..';
  const separator = ' ';
  const currentExpression = progression.join(separator);
  return [currentExpression, correctAnswer];
};

const runProgressionGame = () => runGameEngine(generateRound, progressionDescription);
export default runProgressionGame;
