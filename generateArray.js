const generateArray = (length, max) =>
  [...new Array(length)].map(() => Math.round(Math.random() * max));

export { generateArray };

const generateRandomRealNumbers = (length, min, max) =>
  [...new Array(length)]
    .fill()
    .map(() => +(Math.random() * (max - min) + min).toFixed(1));

export { generateRandomRealNumbers };
