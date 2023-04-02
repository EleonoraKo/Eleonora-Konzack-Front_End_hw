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

// task 4 Створити функцію, яка прибирає з рядка всі символи, які ми передали другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам "heo wor". Вихідний рядок та символи для видалення задає користувач.






// Написати функцію заповнення даними користувача двомірного масиву. ✅
// Довжину основного масиву і внутрішніх масивів задає користувач.
// Значення всіх елементів всіх масивів задає користувач.

function makeArr(a, b) {
  let arr = [];
  for (let x = 0; x < a; x++) {
    arr.push([]);
    for (let y = 0; y < b; y++) {
      arr[x].push(prompt(`Введіть елемент з iндексом [${x + 1}][${y}]`));
    }
  }
  console.log(arr);
}

let a = +prompt("Введіть висоту масиву", 4);
let b = +prompt("Введіть ширину масиву", 2);
makeArr(a, b);

// Створити функцію, яка прибирає з рядка всі символи, які ми передали ✅
// другим аргументом. 'func(" hello world", ['l', 'd'])' поверне нам
// "heo wor". Вихідний рядок та символи для видалення задає користувач.

function selected(str, arr) {
  for (let i = 0; i < str.length; i++) {
    for (let elem of arr) {
      if (str[i] == elem) {
        str = str.split(elem).join("");
      }
    }
  }
  console.log(str);
}

let str = prompt("Введіть рядок", "hehehehe hahahaha");
let letter;
let arr2 = [];

do {
  letter = prompt("Який символ прибрати? (будь-яка кількість)", "h");
  if (letter != null && letter != "") {
    arr2.push(letter);
  }
} while (letter != null && letter != "");

selected(str, arr2);