// task1 Вивести на сторінку в один рядок через кому числа від 10 до 20.
let task1 = '';
for (let i = 10; i <= 20; i++){
    task1 += i + ',';
}
console.log(task1);

// task 2 Вивести квадрати чисел від 10 до 20.
let task2 = '';
for (let i = 10; i <= 20; i++){
    task2 += i ** 2 + ','
}
console.log(task2);

// task 3 Вивести таблицю множення на 7.
let mult = 7;
for (let i = 1; i <= 10; i++){
  console.log(`${i} * ${mult} = ${i*mult}`)   
}

// task 4 Знайти суму всіх цілих чисел від 1 до 15.
let task4 = '';
let sum = 0;
for (let i = 1; i <= 15; i++){
    task4=sum +=i
}
console.log(task4)

// task 5 Знайти добуток усіх цілих чисел від 15 до 35.
let task5 = '';
let mult5 = 15;
for (let i = 16; i <= 35; i++){
    task5=mult5 *= i
}
console.log(task5)

// task 6 Знайти середнє арифметичне всіх цілих чисел від 1 до 500.
let task6 = '';
sum = 0;
for(let i = 1; i <= 500; i++){
    task6 = sum +=i;
}
console.log(task6/500)
// task 7 Вивести суму лише парних чисел в діапазоні від 30 до 80.

let task7 = '';
let sum7 = 0
for (let i = 30; i <= 80; i++){
    if(i % 2 === 0){
 task7 =  sum7 += i;
    }
}
console.log(task7)

// task 8 Вивести всі числа в діапазоні від 100 до 200 кратні 3.
let task8 = '';
for (let i = 100; i <= 200; i++){
   if(i % 3 === 0){
    task8 += i + ',';
   }
}
console.log(task8)

// tasks 9-11 Дано натуральне число. Знайти та вивести на сторінку всі його дільники.
// Визначити кількість його парних дільників.
// Знайти суму його парних дільників.

let nr = 282;
let amnt = 0;
let summ = 0;
for (let i = 1; i <= nr; i++){
    if (nr % i === 0){
        console.log(i);
        if(i%2===0){
            amnt++;
            summ+=i;
        }
    }
}
console.log(amnt);
console.log(summ);

// task 12 Надрукувати повну таблицю множення від 1 до 10.
let task12 = ''
for(let i = 1; i <= 10; i++){
    for (let k = 1; k <= 10; k++){
task12  += `${i}*${k}=${k * i} \n`;
    }
}
    console.log(task12)