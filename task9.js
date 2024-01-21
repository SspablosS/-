import { generate2DArray } from './GenerateArray.js';

const sumOfMatrix = () => {
  const matrix = generate2DArray(3, 3);
  console.log(matrix);
  let result = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      result += matrix[i][j];
    }
  }

  return result;
};

console.log(sumOfMatrix());
