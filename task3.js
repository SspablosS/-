const firstToUpper = (a) => {
  let s = '';

  for (let i = 0; i < a.length; i += 1) {
    s += a[i].charAt(0).toUpperCase() + a[i].slice(1);

    if (i < a.length - 1) s += ' ';
  }

  return s;
};

console.log(firstToUpper(['В', 'лесу', 'родилась', 'елочка']));
