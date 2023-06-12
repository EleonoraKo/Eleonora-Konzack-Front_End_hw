// // Вивести таблицю 10 × 10, заповнену числами від 1 до 100 (таблиця створюється динамічно)

let table = document.createElement('table');

for (let i = 1; i <= 10; i++) {
  let row = table.insertRow();
  for (let j = 1; j <= 10; j++) {
    let cell = row.insertCell();
    cell.innerText = (i - 1) * 10 + j;
  }
}

document.body.append(table);
