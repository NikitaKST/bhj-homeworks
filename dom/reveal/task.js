function isVisible(el) {
	//находим top и bottom элемента
	const { top, bottom } = el.getBoundingClientRect();
	//возвращаем tru или false
	return bottom >= 0 && top <= window.innerHeight;
  }
  //находим все элементы оранжевые
  const revealElements = document.querySelectorAll('.reveal');
  //событие scroll
  //вешаем обработчик
  window.addEventListener('scroll', () => {
	//перебираем эти 2 элемента
	revealElements.forEach((element) => {
		//если из функции tru
	  if (isVisible(element)) {
		element.classList.add('reveal_active');
		//если false
	  } else {
		element.classList.remove('reveal_active');
	  }
	});
  });
  