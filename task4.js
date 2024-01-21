const reverseFirstLast = (str) => {
  let words = str.split(' ');

  for (let i = 0; i < words.length; i += 1) {
    let word = words[i];

    if (word.length >= 2) {
      let reversedWord =
        word.charAt(word.length - 1) + word.slice(1, -1) + word.charAt(0);
      words[i] = reversedWord;
    }
  }

  return words.join(' ');
};

console.log(reverseFirstLast('В лесу родилась елочка'));
