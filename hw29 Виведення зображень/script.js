var images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5 .jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

var randomImage = images[Math.floor(Math.random()*images.length)];

document.getElementById("myImage").src = "images/" + randomImage; // замінити "myImage" на id вашого тегу зображення.