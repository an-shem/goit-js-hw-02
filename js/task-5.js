const checkForSpam = function (message) {
  const checkSpam = message.toLowerCase().includes('spam');
  const checkSale = message.toLowerCase().includes('sale');
  return checkSpam === true || checkSale === true;
};

/*
 * Вызовы функции для проверки работоспособности твоей реализации.
 */
console.log(checkForSpam('Latest technology news')); // false

console.log(checkForSpam('JavaScript weekly newsletter')); // false

console.log(checkForSpam('Get best sale offers now!')); // true

console.log(checkForSpam('[SPAM] How to earn fast money?')); // true

// spam и sale
