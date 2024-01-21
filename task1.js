import { generateArray } from './GenerateArray.js';

const divThree = (n) => {
  const arr = generateArray(n, 100);
  console.log(arr);
  let result = '';

  for (let i = 0; i < arr.length; i += 1) {
    if (arr[i] % 3 === 0) {
      result = `${result} Число ${arr[i]} Индекс ${i}\n`;
    }
  }
  return result;
};

console.log(divThree(10));
