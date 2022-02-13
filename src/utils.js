const minRandomNumber = 1;
const maxRandomNumber = 100;
export const getRandomNumber = () => Math.floor(Math.random() * (maxRandomNumber - minRandomNumber) + minRandomNumber);
export const getRandomElement = (array) => {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};