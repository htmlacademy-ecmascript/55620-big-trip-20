const getRandomInt = (min, max) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const getRandomeElem = (arr) => arr[Math.floor(Math.random() * arr.length)];

const capitalize = (str) => (str[0].toUpperCase() + str.slice(1));

export { getRandomInt, getRandomeElem, capitalize };
