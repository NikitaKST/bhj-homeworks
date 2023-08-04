const clickerCounter = document.getElementById('clicker__counter');
const imgCookie = document.getElementById('cookie');

let isEnlarged = false; 

function changeSize() {
    if (isEnlarged) {
        imgCookie.width = 200; // Уменьшаем размер
        imgCookie.height = 200;
    } else {
        imgCookie.width = 220; // Увеличиваем размер
        imgCookie.height = 220;
    }
    
    isEnlarged = !isEnlarged;
    clickerCounter.textContent = Number(clickerCounter.textContent) + 1;      
}

imgCookie.onclick = changeSize;

