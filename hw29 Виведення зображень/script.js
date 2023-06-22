// var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5 .jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

// var randomImage = images[Math.floor(Math.random()*images.length)];

// document.getElementById("myImage").src = "images/" + randomImage; // замінити "myImage" на id вашого тегу зображення.

// var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

// // Отримуємо випадкове число в діапазоні від 0 до 8
// var randomIndex = Math.floor(Math.random() * images.length);

// // Створюємо новий об'єкт зображення
// var img = new Image();

// // Завантажуємо випадкове зображення з масиву
// img.src = "images/" + images[randomIndex];

// // Відображаємо зображення на сторінці
// document.body.appendChild(img);

// Создаем массив с названиями изображений
var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

// Функция для получения случайного элемента из массива
function getRandomImage(images) {
  var randomIndex = Math.floor(Math.random() * images.length); // Выбираем случайный индекс в диапазоне от 0 до images.length - 1
  return images[randomIndex]; // Возвращаем изображение с этим индексом из массива
}

// Подставляем случайное изображение в src атрибут img элемента
var randomImage = getRandomImage(images);
var imgElement = document.createElement("img");
imgElement.src = randomImage;
document.body.appendChild(imgElement);


