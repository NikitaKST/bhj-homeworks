document.addEventListener('DOMContentLoaded', function () {
	const fontSizeElements = Array.from(document.querySelectorAll('.font-size'));
  
	fontSizeElements.forEach((element) => {
	  element.addEventListener('click', (e) => {
		e.preventDefault();
		const dataSize = element.getAttribute('data-size');
  
		// Уберем класс "font-size_active" у всех элементов с классом "font-size"
		fontSizeElements.forEach((el) => {
		  el.classList.remove('font-size_active');
		});
  
		// Добавим класс "font-size_active" только текущему элементу
		element.classList.add('font-size_active');
  
		// Получим элемент с классом "book"
		const bookElement = document.querySelector('.book');
  
		// Уберем все классы размеров шрифта
		bookElement.classList.remove('book_fs-small', 'book_fs-big');
  
		// В зависимости от значения "data-size" добавим соответствующий класс размера
		if (dataSize === 'small') {
		  bookElement.classList.add('book_fs-small');
		} else if (dataSize === 'big') {
		  bookElement.classList.add('book_fs-big');
		}
	  });
	});
  });
  



