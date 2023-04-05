const arr = [16, -37, 54, -4, 72, -56, 47, 4, -16, 25, -37, 46, 4, -51, 27, -63, 4, -54, 76, -4, 12, -35, 4, 47]

//  task 1 Знайти суму та кількість позитивних елементів.

let positiveElements = [];
let positiveSum = 0;
for (let i = 0; i < arr.length; i++) {
    if (
        arr[i] > 0) {
        positiveSum += arr[i];
        positiveElements.push(arr[i]);
    }
}
console.log('сумма позитивных элементов: ' + positiveSum);
console.log('количество позитивных элементов: ' + positiveElements.length);


// task 2. Знайти мінімальний елемент масиву та його порядковий номер.

let min = Math.min(...arr);
let minIndex = arr.indexOf(-63);
console.log('минимальный элемент массива: ' + min);
console.log('индекс минимального элемента ' + minIndex);

// task 3 Знайти максимальний елемент масиву та його порядковий номер.

let max = Math.max(...arr);
let maxIndex = arr.indexOf(76);
console.log('максимальный элемент массива: ' + max);
console.log('индекс мааксимального элемента ' + maxIndex);

// task 4 Визначити кількість негативних елементів.

let negativeElements = [];
for (let i = 0; i < arr.length; i++) {
    if (
        arr[i] < 0) {
        negativeElements.push(arr[i]);
    }
}
console.log('количество негативных элементов: ' + negativeElements.length);


// task 5 Знайти кількість непарних позитивних елементів.

let oddPositive = [];
for (let i = 0; i < arr.length; i++) {
    if (
        arr[i] > 0 && arr[i] % 2 !== 0
    ) {
        oddPositive.push(arr[i])

    }
}
console.log('количество парных негативных элементов ' + oddPositive.length);


// task 6 Знайти кількість парних позитивних елементів.

let evenPositive = [];
for (let i = 0; i < arr.length; i++) {
    if (
        arr[i] > 0 && arr[i] % 2 === 0
    ) {
        evenPositive.push(arr[i])

    }
}
console.log('количество парных позитивных элементов ' + evenPositive.length);

// task 7 Знайти суму парних позитивних елементів.
let sumEvenPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (
        arr[i] > 0 && arr[i] % 2 === 0
    ) {
        sumEvenPositive += arr[i];

    }
}
console.log('сумма парных позитивных элементов ' + sumEvenPositive);

// task 8 Знайти суму непарних позитивних елементів.

let sumOddPositive = 0;
for (let i = 0; i < arr.length; i++) {
    if (
        arr[i] > 0 && arr[i] % 2 !== 0
    ) {
        sumOddPositive += arr[i];

    }
}
console.log('сумма непарных позитивных элементов ' + sumOddPositive);


// task 9 Знайти добуток позитивних елементів.

let multPositiveElements = 1;
for (let i = 0; i < positiveElements.length; i++) {
    multPositiveElements *= positiveElements[i];
}
console.log('произведение позитивных элементов ' + multPositiveElements);


// task 10 Знайти найбільший серед елементів масиву, остальні обнулити.

arr.splice(19, 23)
arr.splice(0, 18)
console.log(arr)





