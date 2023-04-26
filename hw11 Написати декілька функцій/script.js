// task 1 Дано масив з елементами різних типів. Створити функцію яка вираховує середнє арифметичне лише числових елементів даного масиву.

let arr1 = [4, 8, 'hello', 105, 'hi', true, 15, 99];
let counter = 0;
let sum = 0;
for (let i = 0; i < arr1.length; i++) {
  if ((typeof arr1[i] === "number")) {
    counter++;
    sum += arr1[i]
  }
}
console.log(sum / counter)

// task 2 Написати функцію doMath(x, znak, y), яка отримує 3 аргументи: числа x і y, рядок znak. У змінній znak може бути: +, -, *, /, %, ^ (ступінь ).Вивести результат математичної дії, вказаної в змінній znak.Обидва числа і знак виходять від користувача.

let doMath = function (x, y, sign) {
  let result
  switch (sign) {
    case '+':
      result = x + y;
      break;
    case '-':
      result = x - y;
      break;
    case '*':
      result = x * y;
      break;
    case '/':
      result = x / y;
      break;
    case '**':
      result = x ** y;
      break;
    case '%':
      result = x % y;
      break;
  }
  return result
}
console.log(doMath(5, 8, '+'))
console.log(doMath(5, 8, '-'));
console.log(doMath(5, 8, '/'));
console.log(doMath(5, 8, '*'));
console.log(doMath(5, 8, '%'))
console.log(doMath(5, 8, '**'))


// task 3 Написати функцію заповнення даними користувача двомірного масиву. Довжину основного масиву і внутрішніх масивів задає користувач. Значення всіх елементів всіх масивів задає користувач.

function addArray(rows, columns) {
  let array = [];
  for (let i = 0; i < rows; i++) {
    let insideArray = [];
    for (let j = 0; j < columns; j++) {
      let value = prompt(`Введіть значення елементу масива [${i}][${j}]`);
      insideArray.push(value);
    }
    array.push(insideArray);
  }
  return array;
}
console.log(addArray(2, 2));

// task 4 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.

const words = prompt('Введите текст:');
const symbolDel = prompt('Введите символы которые вы хотите] удалить:');

function cutWords(userTypeWords, symbolDelete) {
  let cutUserWords = '';
  for (let i = 0; i < userTypeWords.length; i += 1) {
    let countSame = 0;
    for (let j = 0; j < symbolDelete.length; j += 1) {
      if (userTypeWords[i] === symbolDelete[j]) {
        countSame += 1;
      }
    }
    if (countSame === 0) {
      cutUserWords += userTypeWords[i];
    }
  }
  return cutUserWords;
}
const cutWord = cutWords(words, symbolDel);

console.log(cutWord);

