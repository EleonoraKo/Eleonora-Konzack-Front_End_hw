// У папці images є зображення 1.jpg, 2.jpg, 3.jpg, 4.jpg, 5 .jpg, 6.jpg, 7.jpg, 8.jpg, 9.jpg Вивести зображення з цієї папки, отримане випадковим чином (Math.random)
let images = ["1.jpg", "2.jpg", "3.jpg", "4.jpg", "5.jpg", "6.jpg", "7.jpg", "8.jpg", "9.jpg"];

function getRandomImage() {
  let randomIndex = Math.floor(Math.random() * images.length); 
  return images[randomIndex]; 
}

let randomImage = getRandomImage();
let imgElement = document.createElement("img");
imgElement.src = 'images/' + randomImage;
document.body.appendChild(imgElement);


