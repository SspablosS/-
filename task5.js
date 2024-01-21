import { generateRandomRealNumbers } from './GenerateArray.js';

let array = generateRandomRealNumbers(10, -10, 10);
console.log(array);
const realNumbers = (arr) => {
  let count = 0;
  let negSum = 0;
  for (const num of arr) {
    if (num >= 0) {
      console.log(num);
      count += 1;
    } else {
      negSum += num;
    }
  }

  return `Положительные - ${count}\nСумма отрицательных = ${negSum}`;
};

console.log(realNumbers(array));
