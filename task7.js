import { generateArray, generateRandomNumbers } from './GenerateArray.js';

const findHeight = () => {
  let arr1 = generateRandomNumbers(5, 170, 200);
  let arr2 = generateRandomNumbers(5, 170, 200);
  let count = 0;

  for (let i = 0; i < arr1.length; i += 1) {
    for (let j = 0; j < arr2.length; j += 1) {
      if (arr1[i] === arr2[j]) {
        count += 1;
      }
    }
  }

  return `${arr1}\n${arr2}\nВсего пар ${count}`;
};

console.log(findHeight());
