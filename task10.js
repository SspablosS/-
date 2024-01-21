import { generate2DArray } from './GenerateArray.js';

const belowTenNumbers = () => {
  const matrix = generate2DArray(4, 3);
  console.log(matrix);
  let count = 0;

  for (let i = 0; i < matrix.length; i += 1) {
    for (let j = 0; j < matrix[i].length; j += 1) {
      if (matrix[i][j] < 10) count += 1;
    }
  }

  return count;
};

console.log(belowTenNumbers());
