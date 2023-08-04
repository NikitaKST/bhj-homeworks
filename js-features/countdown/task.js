const addTimer = function() {
    const timer = document.getElementById('timer');
    timer.textContent -= 1;

    if (timer.textContent < 0) {
        alert('Вы победили в конкурсе!');
        clearInterval(timerId);
        timer.textContent = 0;
    } 
    
}

const timerId = setInterval(addTimer, 1000);






