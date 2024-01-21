import { generate2DArray } from './GenerateArray.js';

const maxMatrixElement = () => {
  const matrix = generate2DArray(4, 4);
  console.log(matrix);
  let maxNumber = 0;
  let index = '';

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] > maxNumber) {
        maxNumber = matrix[i][j];
        index = `${i} ${j}`;
      }
    }
  }

  return `Максимальный элемент - ${maxNumber}\nЕго индексы = ${index}`;
};

console.log(maxMatrixElement());
