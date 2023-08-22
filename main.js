let listButtons = document.querySelectorAll('.buttons button');
let lastReturn = document.querySelector('.screen .last');
let newReturn = document.querySelector('.screen .new');

let firstNum = null;
let newNum = null;
let calc = '+';

function reloadScreen(){
    lastReturn.textContent = firstNum ? firstNum + calc : '';
    newReturn.textContent = newNum ? newNum : '';
}
reloadScreen();

listButtons.forEach(button => {
    button.addEventListener('click', ()=> {
        let value = button.textContent;
        switch(value){
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                newNum = newNum ? newNum + value : value;
                break;

            case'.':
            newNum = newNum ? newNum + value : '0.';
            break;

            case '%':
            newNum = 0.01 * newNum;
            break;

            case '+':
            case '-':
            case '×':
            case '÷':
                if(newNum){
                    if(firstNum){
                        applyCalc();
                    }
                    calc = value;
                    firstNum = newNum;
                    newNum = null;
                }
                break;

            case '=':
                applyCalc();
                firstNum = null;
                break;

            case 'AC':
                firstNum = null;
                newNum = null;
                calc = '+';
                break;
        }
        reloadScreen();
    })
})
function applyCalc(){
    switch (calc){
        case '÷':
            newNum = (firstNum / newNum).toFixed(4);
            break;

        case '×':
            newNum = newNum * firstNum;
            break;

        case '-':
            newNum = firstNum - newNum;
            break;

        case '+':
            newNum = Number(firstNum) + Number(newNum);
            break;
    }
}