// Ссылка на контейнер, в котором будут отображаться задачи
const taskList = document.querySelector('.tasks__list');

// Функция добавления задачи
function addTask(event) {
  if (event.key === 'Enter' || event.type === 'click') {
    event.preventDefault(); // Отменяем действие по умолчанию (перезагрузку страницы или отправку формы)

    const taskInput = document.querySelector('#task__input');
    const taskText = taskInput.value.trim(); // Получаем текст задачи, удаляя лишние пробелы

    if (taskText !== '') { // Проверяем, что текст задачи не пустой
      const taskElement = document.createElement('div'); // Создаем элемент задачи
      taskElement.classList.add('task');

      const taskTitle = document.createElement('div'); // Создаем элемент для заголовка задачи
      taskTitle.classList.add('task__title');
      taskTitle.textContent = taskText; // Устанавливаем текст задачи

      const taskRemoveButton = document.createElement('a'); // Создаем кнопку удаления
      taskRemoveButton.classList.add('task__remove');
      taskRemoveButton.innerHTML = '&times;'; // Устанавливаем символ "×" для кнопки удаления

      taskRemoveButton.addEventListener('click', removeTask); // Добавляем обработчик события для кнопки удаления

      taskElement.appendChild(taskTitle); // Добавляем заголовок задачи в элемент задачи
      taskElement.appendChild(taskRemoveButton); // Добавляем кнопку удаления в элемент задачи

      taskList.appendChild(taskElement); // Добавляем элемент задачи в список задач

      taskInput.value = ''; // Очищаем поле ввода после добавления задачи
    }
  }
}

// Функция удаления задачи
function removeTask(event) {
  const taskElement = event.target.closest('.task'); // Находим ближайший родительский элемент задачи
  if (taskElement) {
    taskElement.remove(); // Удаляем задачу из списка
  }
}

// Обработчики событий для поля ввода и кнопки "Добавить"
const inputField = document.querySelector('#task__input');
const addButton = document.querySelector('#tasks__add');

inputField.addEventListener('keydown', addTask);
addButton.addEventListener('click', addTask);

