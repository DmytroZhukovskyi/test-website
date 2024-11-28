const aboutLink = document.getElementById('about-link');
const popup = document.getElementById('popup');
const closeBtn = document.querySelector('.close-btn');


aboutLink.addEventListener('click', (e) => {
    e.preventDefault(); // Отключаем стандартное поведение ссылки
    popup.style.display = 'flex'; // Показываем попап
});

// Закрытие попапа
closeBtn.addEventListener('click', () => {
    popup.style.display = 'none';
});

// Закрытие попапа при клике вне его
window.addEventListener('click', (e) => {
    if (e.target === popup) {
        popup.style.display = 'none';
    }
});

function sayHello1() {
    alert('Хороша кнопка :)');
}

function sayHello2() {
    alert('Погана кнопка -_-');
}