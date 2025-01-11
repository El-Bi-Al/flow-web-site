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