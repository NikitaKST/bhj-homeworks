// Получаем ссылку на элемент загрузки и контейнер для данных
const loader = document.getElementById('loader');
const itemsContainer = document.getElementById('items');

// Функция для выполнения XMLHttpRequest и получения данных о курсах валют
function fetchCurrencyData() {
  // Показываем загрузчик
  loader.classList.add('loader_active');

  // Создаем новый объект XMLHttpRequest
  const xhr = new XMLHttpRequest();
  
  // Настраиваем GET-запрос к API
  xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses', true);

  // Устанавливаем обработчик события onload, который сработает при успешном завершении запроса
  xhr.onload = function() {
    // Проверяем статус ответа
    if (xhr.status === 200) {
      // Скрываем загрузчик
      loader.classList.remove('loader_active');

      // Извлекаем данные о курсах валют из ответа
      const data = JSON.parse(xhr.responseText);
      const valute = data.response.Valute;

      // Перебираем валюты и создаем HTML-элементы
      for (const currencyCode in valute) {
        if (valute.hasOwnProperty(currencyCode)) {
          const currencyInfo = valute[currencyCode];
          const item = document.createElement('div');
          item.className = 'item';

          const codeElement = document.createElement('div');
          codeElement.className = 'item__code';
          codeElement.textContent = currencyInfo.CharCode;

          const valueElement = document.createElement('div');
          valueElement.className = 'item__value';
          valueElement.textContent = currencyInfo.Value.toFixed(4);

          const currencyElement = document.createElement('div');
          currencyElement.className = 'item__currency';
          currencyElement.textContent = 'руб.';

          item.appendChild(codeElement);
          item.appendChild(valueElement);
          item.appendChild(currencyElement);

          itemsContainer.appendChild(item);
        }
      }
    } else {
      console.error('Ошибка при загрузке данных. Статус:', xhr.status);
      // Обрабатываем ошибку, например, отображаем сообщение об ошибке
    }
  };

  // Устанавливаем обработчик события onerror, который сработает при ошибке запроса
  xhr.onerror = function() {
    console.error('Ошибка при выполнении запроса.');
    // Обрабатываем ошибку, например, отображаем сообщение об ошибке
  };

  // Отправляем запрос
  xhr.send();
}

// Вызываем функцию fetchCurrencyData для загрузки данных о курсах валют
fetchCurrencyData();
