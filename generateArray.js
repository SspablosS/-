const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

export { generateArray };

const generateRandomRealNumbers = (length, min, max) =>
  [...new Array(length)]
    .fill()
    .map(() => +(Math.random() * (max - min) + min).toFixed(1));

export { generateRandomRealNumbers };

const generateRandomNumbers = (length, min, max) =>
  [...new Array(length)]
    .fill()
    .map(() => +(Math.random() * (max - min) + min).toFixed(0));

export { generateRandomNumbers };

const generate2DArray = (rows, columns) => {
  const result = [];

  for (let i = 0; i < rows; i += 1) {
    const row = [];
    for (let j = 0; j < columns; j += 1) {
      const randomNUmber = Math.floor(Math.random() * 30) + 1;
      row.push(randomNUmber);
    }
    result.push(row);
  }

  return result;
};

export { generate2DArray };
