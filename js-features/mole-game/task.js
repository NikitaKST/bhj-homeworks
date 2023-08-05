const moleIsCaught = document.getElementById('caught');
const moleIsLost = document.getElementById('lost');
//функция счетчика пойманых кротов
function sumOfMolesCaught() {
    moleIsCaught.textContent = Number(moleIsCaught.textContent) + 1;
    checkGameResult(); //проверка результата      
}

moleIsCaught.onclick = sumOfMolesCaught;
//функция счетчика упущенных кротов
function sumOfMolesLost() {
    moleIsLost.textContent = Number(moleIsLost.textContent) + 1;
    checkGameResult(); //проверка результата      
}

moleIsLost.onclick = sumOfMolesLost;
//функция для проверки выйграл/проиграл
function checkGameResult() {
    const caught = Number(moleIsCaught.textContent);
    const lost = Number(moleIsLost.textContent);

    if (caught + lost > 10 && caught > lost) {
        alert("Вы победили!");
        moleIsCaught.textContent = 0;
        moleIsLost.textContent = 0;
    } else if (caught + lost > 10 && caught < lost) {
        alert("Вы проиграли!");
        moleIsCaught.textContent = 0;
        moleIsLost.textContent = 0;
    } else if (caught + lost > 10 && caught === lost) {
        alert("Ничья");
        moleIsCaught.textContent = 0;
        moleIsLost.textContent = 0;
    }
    
}

const holes = document.querySelectorAll('.hole'); //обращаемся к массиву с классом hole

// console.log(holes);
//перебираем массив 
holes.forEach(hole => {
    hole.addEventListener('click', () => { //вешаем обработчик событий
        if (hole.classList.contains('hole_has-mole')) {
            sumOfMolesCaught(); 
        } else {
            sumOfMolesLost();
        }
    });
});