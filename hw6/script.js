let yearOfBirth = +prompt("Write your year of birth");
let city = prompt("Write your city");
let favouriteSport = prompt("Який вид спорта тобі подобається: футбол, тенис або хокей?");


let age = 2023 - yearOfBirth;
if (yearOfBirth == null || yearOfBirth == ''){
     age = 'Шкода, що Ви не захотіли ввести свій вік';
}

let yourCity = '';
if (city == 'Київ') {
    yourCity = 'Ти живеш у столиці України';
}
else if (city == 'Вашингтон') {
    yourCity = 'Ти живеш у столиці США';
}
else if (city == 'Лондон') {
    yourCity = 'Ти живеш у столиці Великобританії';
}
else if (city == null || city == '') {
    yourCity = 'Шкода, що Ви не захотіли ввести своє місто'
}
else {
    yourCity = `ти живеш у місті ${city}`;
}


let champion = '';
if (favouriteSport == 'футбол') {
    champion = 'Круто! Хочеш стати Рональдо?';
}
else if (favouriteSport == 'тенис') {
    champion = 'Круто! Хочеш стати Новаком Джоковичем';
}
else if (favouriteSport == 'хокей') {
    champion = 'Круто! Хочеш стати Уейном Грецки?';
}
else if (favouriteSport == null || favouriteSport == '') {
   champion = 'Шкода, що Ви не захотіли ввести свій улюблений спорт'
}
else {
    champion = 'Обери спорт ще раз';
};


alert(`${age}
${yourCity}
${champion}`
)
