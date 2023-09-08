//1. Создание элемента подсказки
const tooltip = document.createElement('div');
tooltip.className = 'tooltip';
document.body.appendChild(tooltip); // Добавляем элемент подсказки в DOM

//2. Поиск всех элементов с классом "has-tooltip"
const links = Array.from(document.querySelectorAll('.has-tooltip'));

//3. Добавление обработчика события на каждый элемент "has-tooltip":
links.forEach((link) => {
  link.addEventListener('click', (e) => {
    e.preventDefault();

    // Получите текст подсказки из атрибута "title" ссылки
    const tooltipText = link.getAttribute('title');

    // Установите текст подсказки в элемент подсказки
    tooltip.textContent = tooltipText;

    // Позиционируйте подсказку рядом с ссылкой
    const linkRect = link.getBoundingClientRect();
    tooltip.style.left = linkRect.left + 'px';
    tooltip.style.top = linkRect.bottom + 'px';

    // Показать подсказку
    tooltip.classList.toggle('tooltip_active');

    // Закрыть подсказку при клике вне нее
    const closeTooltip = (event) => {
		if (!tooltip.contains(event.target) && !link.contains(event.target)) {
		  tooltip.classList.remove('tooltip_active');
		  document.removeEventListener('click', closeTooltip);
		}
	  };
  
	  document.addEventListener('click', closeTooltip);
  });
});
