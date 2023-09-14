const form = document.getElementById('form');
const progress = document.getElementById('progress');

form.addEventListener('submit', (e) => {
    e.preventDefault(); // Предотвращаем стандартное поведение отправки формы

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);

    xhr.upload.addEventListener('progress', (event) => {
        if (event.lengthComputable) {
            const percentComplete = (event.loaded / event.total) * 100;
            progress.value = percentComplete; // Обновляем значение прогресса
        }
    });

    xhr.onreadystatechange = () => {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            if (xhr.status === 200) {
                // Файл успешно загружен
                console.log('Файл успешно загружен');
            } else {
                // Возникла ошибка при загрузке файла
                console.error('Ошибка загрузки файла');
            }
        }
    };

    xhr.send(formData); // Отправляем форму через AJAX
});
