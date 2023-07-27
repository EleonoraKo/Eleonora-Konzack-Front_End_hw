
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

    const gender = Array.prototype.slice.call(document.getElementsByName("gender")).filter(ch => ch.checked==true)[0].value;

    const languages = document.getElementsByClassName("language");
    let langString = '';
    for(let i = 0; i < languages.length; i++){
        if (languages[i].checked){
            langString += languages[i].value + " ";
        }
    }

    addRow('Name', document.querySelector('#name').value);
    addRow('Surname', document.querySelector('#surname').value);
    addRow('Birthdate', document.querySelector('#birth').value);
    addRow('Telephone', document.querySelector('#phone').value);
    addRow('Gender', gender);
    addRow('City', document.querySelector('#city').value);
    addRow('Adress', document.querySelector('#adress').value);
    addRow('Language', langString);
}
document.querySelector('.btn').onclick = fname;