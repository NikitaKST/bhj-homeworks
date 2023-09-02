// Получаем все элементы с классом 'rotator__case' и преобразуем их в массив
const rotatorElements = Array.from(document.querySelectorAll('.rotator__case'));

// Индекс текущего активного элемента
let currentIndex = 0;

// Функция для смены текстовых объявлений
function rotateText() {
  // Перебираем все элементы rotator__case
  rotatorElements.forEach((element, index) => {
    // Если текущий индекс совпадает с индексом элемента, делаем его активным
    if (index === currentIndex) {
      element.classList.add('rotator__case_active');
    } else {
      // В противном случае убираем активный класс
      element.classList.remove('rotator__case_active');
    }
  });

  // Увеличиваем индекс текущего элемента и обеспечиваем бесконечный цикл
  currentIndex = (currentIndex + 1) % rotatorElements.length;
}

// Запускаем функцию rotateText каждую секунду (1000 миллисекунд)
setInterval(rotateText, 1000);
