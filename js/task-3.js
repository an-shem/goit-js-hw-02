const findLongestWord = function (string) {
  const array = string.split(' ');
  let longestWord = '';
  for (const arr of array) {
    longestWord = longestWord.length > arr.length ? longestWord : arr;
  }
  return longestWord;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
