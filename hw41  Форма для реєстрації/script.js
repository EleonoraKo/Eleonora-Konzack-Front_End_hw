
// let table = document.createElement('table');

// for (let i = 1; i <= 6; i++){
//    let row = table.insertRow();
//     for (let j = 1; j <= 2; j++){
// let cell = row.insertCell();(
// }
// }

function addRow(text, value) {
    let table = document.querySelector('#tbl');
    let row = table.insertRow();
    let cText = row.insertCell();
    let cValue = row.insertCell();
    cText.innerHTML = text;
    cValue.innerHTML = value;
}



//document.body.appendChild(table);

function fname() {
    const name = document.querySelector('#name').value;
    const surnamename = document.querySelector('#surname').value;
    addRow('Name', document.querySelector('#name').value);
    //cell1.innerHTML = 'Ваше імя';
    //cell2.innerHTML = name
}
document.querySelector('.btn').onclick = fname;