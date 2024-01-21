import { generateArray } from './GenerateArray.js';

const findInversion = () => {
  const arr = generateArray(10, 100);
  let count = 0;

  for (let i = 1; i < arr.length; i += 1) {
    if (arr[i] < arr[i - 1]) {
      count += 1;
    }
  }

  return `${arr} содержит ${count} инверсии`;
};

console.log(findInversion());
