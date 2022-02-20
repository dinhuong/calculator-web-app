
import { factorial } from 'mathjs'

function f(num) {
    return factorial(num)
}

var expression = ""
var ans = 0

function input(button) {
    console.log('key')
    expression += button.value
    document.getElementById('result').value = expression
    document.getElementById('expression').value = 'Ans = ' + ans
}

function clean(button) {
    console.log('clean')
    expression = ""
    document.getElementById('result').value = expression
    document.getElementById('expression').value = 'Ans = ' + ans
}

function solve() {
    if (expression) {
        ans = eval(expression)
        ans = +(Math.round(ans + "e+8") + "e-8")
        document.getElementById('expression').value = expression + ' ='
        document.getElementById('result').value = ans
        expression = ""
    }
}

function fact(button) {
    expression += '!'
    document.getElementById('result').value = expression
    document.getElementById('expression').value = 'Ans = ' + ans
    console.log(f(2))
}
