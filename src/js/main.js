// module
function bindModal(trigger, modal, close) {
    trigger = document.querySelector(trigger),
        modal = document.querySelector(modal),
        close = document.querySelector(close)

    const body = document.body

    trigger.addEventListener('click', e => {
        e.preventDefault()
        modal.style.display = 'flex'
        body.classList.add('locked')
    });

    bindModal('.modal__btn', '.modal__wrapper', '.modal__close')
}

/* Home btn active */
document.addEventListener('DOMContentLoaded', function () {
    if (document.body.classList.contains('main__body')) {
        const homeBtn = () => {
            const btnHome = document.querySelector('.home__btn')
            const bodelWrapper = document.querySelector('.modal__wrapper')
            btnHome.addEventListener('click', () => {
                bodelWrapper.style.display = 'flex'
            })
        }
        homeBtn();
    }
})


const choosingFigure = () => {
    const victorious = [
        [0, 1, 2], [3, 4, 5], [6, 7, 8],
        [0, 3, 6], [1, 4, 7], [2, 5, 8],
        [0, 4, 8], [6, 4, 2]
    ];

    const signItem = document.querySelectorAll('.modal__item');
    const gameItems = document.querySelectorAll('.game__item');
    const gameTitle = document.querySelector('.game__title');
    let resultSing = localStorage.getItem('result');
    
    let victory = localStorage.getItem('resultVin');
    let userTests  = []
    const resultsHistoryJSON = localStorage.getItem('resultsHistory');


    
    const getResultsHistory = () => {
        return resultsHistoryJSON ? JSON.parse(resultsHistoryJSON) : [];
    };


    const updateResultsHistory = (result) => {
        const resultsHistory = getResultsHistory();
        resultsHistory.push(result);

        localStorage.setItem('resultsHistory', JSON.stringify(resultsHistory));
        
    };

        /* selecting symbol */
        signItem.forEach((item, indx) => {
            item.addEventListener('click', () => {
              
                if (indx === 0) {
                    resultSing = 'clouse';
                } else {
                    resultSing = 'zero';
                }
                //localStorage
                localStorage.setItem('result', resultSing);
            });
        });



    if (document.body.classList.contains('main__result')) {
        const resultReset = document.querySelector('.result__reset');
        const resultPlay = document.querySelector('.result__restart');
       
        resultReset.addEventListener('click', () => {
            localStorage.clear();
    
            window.location.href = 'index.html';
        });
        resultPlay.addEventListener('click', () => {
            window.location.href = 'game.html';
        });



        const resutViner = () => {
            let arrClouse = [];
            let arrZero = [];
            const resutTitle = document.querySelector('.resut__title');
            const resutWinner = document.querySelector('.result__winner');
            let a = [...resultsHistoryJSON]
            
            let onlyNumbers = a.map(Number).filter(item => !isNaN(item));

         
            
            for (let i = 0; i < onlyNumbers.length; i++) {
                if (onlyNumbers[i] === 1) {
                    arrClouse.push(1);
                    arrZero.push(0);
                } else if (onlyNumbers[i] === 0) {
                    arrClouse.push(0);
                    arrZero.push(1);
                }
            }
            
           
            function updateResultItems(arr, resultClass) {
                const resultItems = document.querySelector(`.result__items-${resultClass}`);
                
          
                resultItems.innerHTML = `${resultClass === 'clouse' ? 'Хрестики': 'Hулики'}`;
                
           
                arr.forEach(item => {
                    const li = document.createElement('li');
                    li.classList.add('result__item');
                    li.textContent = item === 1 ? '1' : '0';
                    resultItems.appendChild(li);
                });
            }
            
    
            updateResultItems(arrClouse, 'clouse');
            updateResultItems(arrZero, 'zero');



            function countTotalWins(arr) {
                return arr.reduce((totalWins, result) => totalWins + result, 0);
            }
            
            
            const totalWinsClouse = countTotalWins(arrClouse);
            const totalWinsZero = countTotalWins(arrZero);
            
         
            document.querySelector('.result__result-clouse').textContent = `Загальна кількість перемог Хрестики: ${totalWinsClouse}`;
            document.querySelector('.result__result-zero').textContent = `Загальна кількість перемог Hулики: ${totalWinsZero}`;


            if (victory === 'clouse') {
                resutWinner.textContent = 'Перемога хрестиків';

            } else if (victory === 'zero') {
                resutWinner.textContent = 'Перемога нуликів';
            } else if (victory === 'draw') {
                resutWinner.textContent = 'Нічия';
            }
        }

        resutViner();

    }

    if (document.body.classList.contains('main__game')) {

 
        const tableGame = () => {
            resultSing === 'zero' ? gameTitle.textContent = 'Хід гравця нулик' : gameTitle.textContent = 'Хід гравця хрестик';
        }

        tableGame()

     
        gameItems.forEach((item, idx) => {
            item.addEventListener('click', (e) => {

                const checkWinner = (symbol) => {
                    for (let i = 0; i < victorious.length; i++) {
                        const combination = victorious[i];
                        const isWinner = combination.every(cellIndex => gameItems[cellIndex].classList.contains(symbol));
                        if (isWinner) {
                            return true;
                        }
                    }

                    return false;
                };

                /*  victoryClouse  */
                const victoryClouse = () => {
                    userTests .push(idx);
                    if (checkWinner('clouse') && !checkWinner('zero')) {
                        alert('Перемога хрестиків');
                        victory = 'clouse'
                        updateResultsHistory(1);
                        location.href = 'result.html';
                    }
                    localStorage.setItem('resultVin', victory);

                }
                /*  victoryZero */
                const victoryZero = () => {
                    userTests .push(idx);

                    if (checkWinner('zero') && !checkWinner('clouse')) {
                        alert('Перемога нуликів');
                        victory = 'zero'
                        updateResultsHistory(0);
                        location.href = 'result.html';
                    }
                    localStorage.setItem('resultVin', victory);

                }
                /*  victory draw */
                const draw = () => {
                    const itemUsed = document.querySelectorAll('.used');
                    if (itemUsed.length === 8) {
                        alert('Нічия')
                        victory = 'draw'
                        location.href = 'result.html';

                    }
                    localStorage.setItem('resultVin', victory);

                }
                draw()


                if (item.classList.contains('used')) {
                    e.preventDefault();
                    return;
                }

                const newImgElement = document.createElement('img');

                if (resultSing === 'clouse') {
                    gameTitle.textContent = 'Хід гравця нулик'
                    newImgElement.src = 'img/game/clouse.png';
                    newImgElement.alt = '';
                    newImgElement.classList.add('game__item-imageClouse');
                    item.classList.add('clouse');
                    victoryClouse()

                } else {
                    gameTitle.textContent = 'Хід гравця хрестик';
                    newImgElement.src = 'img/game/zero.png';
                    newImgElement.alt = '';
                    newImgElement.classList.add('game__item-imageZero');
                    item.classList.add('zero');
                    victoryZero()

                }

                // Update the content of the clicked item
                item.innerHTML = '';
                item.appendChild(newImgElement);
                item.classList.add('used');
                // Toggle between 'clouse' and 'zero'
                resultSing = resultSing === 'clouse' ? 'zero' : 'clouse';

            });

        });
    }

}
choosingFigure()














