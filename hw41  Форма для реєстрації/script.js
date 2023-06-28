
let table = document.createElement('table');

for (let i = 1; i <= 6; i++){
   let row = table.insertRow();
    for (let j = 1; j <= 2; j++){
let cell = row.insertCell();
}
}




document.body.appendChild(table);

function fname (){
    const name = document.querySelector('#name').value;
    const surnamename = document.querySelector('#surname').value;
    cell1.innerHTML = 'Ваше імя';
    cell2.innerHTML = name
}
document.querySelector('.btn').onclick = fname;





