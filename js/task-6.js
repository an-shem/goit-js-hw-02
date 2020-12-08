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
  numbers.push(i);
} while (input !== null);

for (const number of numbers) {
  total += number;
}
alert(`Общая сумма чисел равна ${total}`);
