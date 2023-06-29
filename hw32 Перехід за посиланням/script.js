// function redirectToSite(url) {
//     // перевіряємо, чи вказаний протокол у посиланні
//     if (!/^https?:\/\//i.test(url)) {
//       // якщо протокол не вказаний - додаємо поточний протокол
//       url = location.protocol + '//' + url;
//     }
//     // переадресовуємо на інший сайт
//     window.location.href = url;
//   }



// var textField = document.getElementById("text-field");
// var sideDiv = document.createElement("div");

// textField.addEventListener("focus", function() {
// sideDiv.style.display = "block";
// });

// textField.addEventListener("blur", function() {
// sideDiv.style.display = "none";
// });

// document.body.appendChild(sideDiv);



let table = document.createElement('table')
for (let i = 1; i <= 10; i++){
    let a = table.insertRow()
    for (let j = 1; j <= 10; j++) {
        let cell = a.insertCell();
        cell.innerText = (i - 1) * 10;
      }
}
document.body.append(table);