import { generateArray } from './GenerateArray.js';

const coincidenceNum = () => {
  const arr = generateArray(10, 100);
  console.log(arr);
  const seen = {};

  for (let i = 0; i < arr.length; i += 1) {
    if (seen[arr[i]]) return true;
    seen[arr[i]] = true;
  }

  return false;
};

console.log(coincidenceNum());
