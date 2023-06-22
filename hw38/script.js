function generateList(array) {
let ul = document.createElement("ul");
for (let i = 0; i < array.length; i++) {
let li = document.createElement("li");
if (Array.isArray(array[i])) {
li.appendChild(generateList(array[i]));
} else {
li.innerHTML = array[i];
}
ul.appendChild(li);
}
return ul;
}
