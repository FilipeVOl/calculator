let operator = ''
let previousValue = ''
let currentValue = ''



document.addEventListener("DOMContentLoaded", function() {
    //Store components on html in JS
    let clear = document.querySelector(".btn-clear")
    let equal = document.querySelector(".equal")
    let numbers = document.querySelectorAll(".number")
    let operators = document.querySelectorAll(".operator")
    let backspace = document.querySelector(".backspace")
    let decimal = document.querySelector(".decimal")

    let previousScreen = document.querySelector(".previous")
    let currentScreen = document.querySelector(".current")

        numbers.forEach((number) => number.addEventListener("click",function(e) {
            handleNumber(e.target.textContent)
            currentScreen.textContent = currentValue;
        }))

        operators.forEach((op) => op.addEventListener ('click', function(e) {
            handleOperator(e.target.textContent)
            previousScreen.textContent = previousValue + ' ' + operator
            currentScreen.textContent = currentValue
        }))

        clear.addEventListener("click", function() {
            currentValue = '';
            previousValue = '';
            operator = '';
            previousScreen.textContent = currentValue;
            currentScreen.textContent = currentValue;
        })

        equal.addEventListener("click", function() {
            if (currentValue != "" && previousValue != "") {
            calculate()
            previousScreen.textContent = '';
            currentScreen.textContent = previousValue;
            if(previousValue.length <= 5) {
                currentScreen.textContent = previousValue;
            } else {
                currentScreen.textContent = previousValue.slice(0,5) + "..."
            }
        }
        })

        backspace.addEventListener("click", function() {
            console.log('currentValue', currentValue)
            console.log('previousValue', previousValue)
            console.log('-------------')
            console.log('previousScreen', previousScreen)
            console.log('currentScreen', currentScreen)
            console.log('operator', operator)


            currentValue = ''
            currentScreen.textContent = ''
            if ((currentScreen.textContent = '' && currentValue == '') {
                operator = ''
            }
            else if(previousScreen.textContent != "") {
                currentScreen.textContent = previousScreen.textContent
                currentValue = previousValue
                previousValue = ''
                previousScreen.textContent = ''
            }

        })


    decimal.addEventListener('click', function(){
        addDecimal()
    })
})




function handleNumber(num) {
    if(currentValue.length <= 5) {
        currentValue += num;
    }
}

function handleOperator(op) {
    operator = op;
    previousValue = currentValue;
    currentValue = '';
}

function calculate() {
    previousValue = Number(previousValue)
    currentValue = Number(currentValue)

    if (operator === "+") {
        previousValue += currentValue;
    } else if (operator === "-") {
        previousValue -= currentValue;
    } else if (operator === "x") {
        previousValue *= currentValue;
    } else if (operator === "/") {
        previousValue /= currentValue;
    }


previousValue = roundNumber(previousValue);
previousValue = previousValue.toString()
currentValue = previousValue.toString()

console.log (previousValue)

}

function roundNumber(num) {
    return Math.round(num * 1000) / 1000
}

function addDecimal() {
    if (!currentValue.includes(".")) {
        currentValue += '.';
    }
}