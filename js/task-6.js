let input;
const numbers = [];
let total = 0;

//

do {
  input = prompt('Введите чило:');
  let i = Number(input);

  if (Number.isNaN(i)) {
    alert(`Было введено не число, попробуйте еще раз`);
    continue;
  }
  numbers.push(input);
  console.log(numbers);
} while (input !== null);

// alert(`Общая сумма чисел равна ${total}`);
