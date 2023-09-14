// Функция для выполнения GET-запросов с использованием XMLHttpRequest
function fetchData(url, callback) {
	const xhr = new XMLHttpRequest();
	xhr.open('GET', url, true);
  
	xhr.onreadystatechange = function () {
	  if (xhr.readyState === 4) {
		if (xhr.status === 200) {
		  const data = JSON.parse(xhr.responseText);
		  callback(data);
		} else {
		  console.error('Error', xhr.status);
		}
	  }
	};
  
	xhr.send();
  }
  
  // Функция для отображения опроса
  function displayPoll() {
	const pollTitleElement = document.getElementById('poll__title');
	const pollAnswersElement = document.getElementById('poll__answers');
  
	fetchData('https://students.netoservices.ru/nestjs-backend/poll', function (pollData) {
	  // Отображаем вопрос
	  pollTitleElement.textContent = pollData.data.title;
  
	  // Ответы в виде кнопок
	  pollData.data.answers.forEach(answer => {
		const answerButton = document.createElement('button');
		answerButton.className = 'poll__answer';
		answerButton.textContent = answer;
		answerButton.addEventListener('click', () => {
		  alert('Спасибо, ваш голос засчитан!');
		});
		pollAnswersElement.appendChild(answerButton);
	  });
	});
  }
  
  //Для отображения опроса при загрузке страницы
  displayPoll();
  