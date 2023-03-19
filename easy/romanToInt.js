/**
 * @param {string}
 * @return {number}
 */

const romansIntegers = new Map([
  ["I", 1],
  ["V", 5],
  ["X", 10],
  ["L", 50],
  ["C", 100],
  ["D", 500],
  ["M", 1000],
]);

const romanToInt = (s) => {
  let value = 0;

  for (i = 0; i < s.length; i++) {
    if (romansIntegers.get(s[i]) < romansIntegers.get(s[i + 1])) {
      continue;
    }

    if (romansIntegers.get(s[i - 1]) < romansIntegers.get(s[i])) {
      value += romansIntegers.get(s[i]) - romansIntegers.get(s[i - 1]);
      continue;
    }

    value += romansIntegers.get(s[i]);
  }

  return value;
};
