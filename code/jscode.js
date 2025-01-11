function acceptCookies() {
    var popup = document.getElementById('cookiePopup');
    popup.style.display = 'none';
}

const form = document.getElementById('orderForm');
  const submitButton = document.getElementById('submitButton');

  form.addEventListener('input', () => {
    const isValid = form.checkValidity(); // Перевірка валідності всіх полів
    submitButton.disabled = !isValid; // Деактивація кнопки, якщо форма не валідна
  });

  form.addEventListener('submit', (event) => {
    if (!form.checkValidity()) {
      event.preventDefault(); // Заборонити відправку форми, якщо вона не валідна
    }
  });


// Функція для відкриття спливаючого вікна
function showPopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'flex';
}

// Функція для закриття спливаючого вікна
function closePopup() {
  const popup = document.getElementById('popup');
  popup.style.display = 'none';
}

// Відкриваємо спливаюче вікно при завантаженні сторінки
window.onload = function() {
  showPopup();
};

// Встановлюємо подію для закриття вікна при натисканні на кнопку
document.getElementById('close-btn').addEventListener('click', function() {
  closePopup();
  // Показуємо спливаюче вікно знову через 2 хвилини
  setTimeout(showPopup, 120000);  // 120000 мілісекунд = 2 хвилини
});

// Встановлюємо подію для закриття вікна при натисканні на хрестик
document.getElementById('popup-close').addEventListener('click', closePopup);
