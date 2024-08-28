const slider = document.querySelector('.slider');
const prevButton = document.querySelector('.prev-button');
const nextButton = document.querySelector('.next-button');
const slides = Array.from(slider.querySelectorAll('.sliders'));
const slideCount = slides.length;
let slideIndex = 0;

prevButton.addEventListener('click', () => {
    slideIndex = (slideIndex - 1 + slideCount) % slideCount;
    slide();
});

nextButton.addEventListener('click', () => {
    slideIndex = (slideIndex + 1) % slideCount;
    slide();
});

const slide = () => {
    const slideWidth = slider.clientWidth; // Ширина слайдера
    const slideOffset = -slideIndex * slideWidth; // Смещение слайда
    slider.style.transform = `translateX(${slideOffset}px)`; // Применение смещения
}

// Инициализация слайдера при загрузке страницы
window.addEventListener('load', () => {
    slide();
});