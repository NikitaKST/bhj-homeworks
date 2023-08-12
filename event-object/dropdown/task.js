// Получаем все элементы с классом "dropdown"
const dropdowns = document.querySelectorAll('.dropdown');

// Для каждого выпадающего списка выполняем следующие действия
dropdowns.forEach((dropdown) => {
    // Находим элементы "dropdown__value" и "dropdown__list"
    const valueElement = dropdown.querySelector('.dropdown__value');
    const listElement = dropdown.querySelector('.dropdown__list');

    // Добавляем обработчик события "click" на элемент "dropdown__value"
    valueElement.addEventListener('click', () => {
        // Переключаем класс "dropdown__list_active" для показа/скрытия списка
        listElement.classList.toggle('dropdown__list_active');
    });

    // Получаем все ссылки в выпадающем списке
    const links = listElement.querySelectorAll('.dropdown__link');

    // Для каждой ссылки добавляем обработчик события "click"
    links.forEach((link) => {
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Запрещаем переход по ссылке

            // Получаем новое значение из текста ссылки
            const newValue = link.textContent;

            // Устанавливаем новое значение в элемент "dropdown__value"
            valueElement.textContent = newValue;

            // Скрываем выпадающий список, удаляя класс "dropdown__list_active"
            listElement.classList.remove('dropdown__list_active');
        });
    });
});
