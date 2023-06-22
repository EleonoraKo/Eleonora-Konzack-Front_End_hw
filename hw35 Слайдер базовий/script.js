let slides = document.querySelector(".wrapper");
const leftButton = document.querySelector('.left-button');
const rightButton = document.querySelector('.right-button');
const slidesCount = document.querySelectorAll('.slider-wrapper').length;
const slides1 = document.querySelectorAll('.slider-wrapper')
let activeSlideIndex = 0;
leftButton.style.display = 'none';
leftButton.addEventListener('click', () => {
    changeSlide('left')
});

rightButton.addEventListener('click', () => {
    changeSlide('right')
});

function changeSlide(direction) {
    if (direction === 'right') {
        activeSlideIndex++
        if (activeSlideIndex === slidesCount - 1) {
            rightButton.style.display = 'none'
        } else {
            leftButton.style.display = 'block'

        }

    } else if (direction === 'left') {
        activeSlideIndex--
        if (activeSlideIndex === 0) {
            leftButton.style.display = 'none'
        }
        else {
            rightButton.style.display = 'block'
        }
    }

    for (let i = 0; i < slidesCount; i++) {
        if (i === activeSlideIndex) {
            slides1[i].style.display = 'flex'
        } else {
            slides1[i].style.display = 'none'
        }
    }
}
