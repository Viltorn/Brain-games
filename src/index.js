import readlineSync from 'readline-sync';

export const numberOfRounds = 3;

export const randomNumber = () => Math.floor(Math.random() * 99 + 1);

export const gameChain = (value, correct, user) => {
  console.log(`Question: ${value}`);
  const playerAnswer = readlineSync.question('Your answer: ');
  if (correct === playerAnswer) {
    console.log('Correct!');
  } else {
    console.log(`'${playerAnswer}' is wrong answer ;(. Correct answer was '${correct}'`);
    console.log(`Let's try again, ${user}`);
    return false;
  }
  return true;
};
