const resultElement = document.getElementById('result')
const input1 = document.getElementById('input1')
const input2 = document.getElementById('input2')
const submitBtn = document.getElementById('submit')
const plusBtn = document.getElementById('plus')
const minusBtn = document.getElementById('minus')
const multiBtn = document.getElementById('multi')
const divisionBtn = document.getElementById('division')
const percentBtn = document.getElementById('percent')
const degreeBtn = document.getElementById('degree')
let action = '+'

plusBtn.onclick = function() {
    action = '+'
}

minusBtn.onclick = function() {
    action = '-'
}

multiBtn.onclick = function(){
    action = '*'
}

divisionBtn.onclick = function() {
    action = '/'
}
percentBtn.onclick = function() {
    action = '%'
}
degreeBtn.onclick = function() {
    action = 'x<sup>y</sup>'
}


function printResult(result) {
    if (result < 0){
        resultElement.style.color = 'red'
    }  else {
        resultElement.style.color = 'green'
    }
    resultElement.textContent = result
}

function computeNumbersWithAction(inp1, inp2, actionSymbol) {
    const num1 = Number(inp1.value)
    const num2 = Number(inp2.value)
    if (actionSymbol == '+') {
        return num1 + num2
    }
    if (actionSymbol == '-') {
        return num1 - num2
    }
    if (actionSymbol == '*') {
        return num1 * num2
    }
    if (actionSymbol == '%') {
        return num1 / 100 * num2
    }
    if (actionSymbol == 'x<sup>y</sup>') {
        return num1 ** num2
    }
    else if (actionSymbol == '/') {
        return num1 / num2
    }
}

submitBtn.onclick = function() {
    const result = computeNumbersWithAction(input1, input2, action)
    printResult(result)
}

