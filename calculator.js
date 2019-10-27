// Javascript

const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');
const zero = document.getElementById('zero');

const decimal = document.getElementById('decimal');
const clear = document.getElementById('clear');
let displayValElement = document.getElementById('display');

var numBtns = document.getElementsByClassName('num');
var operatorBtns = document.getElementsByClassName('operator');

let displayVal = '0';
let pendingVal; // stored number
var evalStringArray = []; // array where operands and operator will be pushed. joined, then computed

var updateDisplayVal = (clickObj) => {
  var btnText = clickObj.target.innerHTML;
  
  if(displayVal === '0') {
    displayVal = '';
  }
  
  displayVal += btnText;
  displayValElement.innerText = displayVal;
}

var performOperation = (clickObj) => {
  var operator = clickObj.target.innerText;
  
  switch (operator) {
      case '+':
        pendingVal = displayVal; // store currently displayed val
        displayVal = '0'; // reset displayVal
        displayValElement.innerText = '+'; // show operation being performed on display screen
        evalStringArray.push(pendingVal); // push stored val to array as first operand
        evalStringArray.push('+'); // push operator to array
        break;
      
    case '-':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = '-';
        evalStringArray.push(pendingVal);
        evalStringArray.push('-');
        break;
       
    case '×':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = '×';
        evalStringArray.push(pendingVal);
        evalStringArray.push('x');
        break;
      
    case '÷':
        pendingVal = displayVal;
        displayVal = '0';
        displayValElement.innerText = '÷';
        evalStringArray.push(pendingVal);
        evalStringArray.push('/');
        break;
      
    case '=':
        evalStringArray.push(displayVal); // push currently displayed val (the second operand) to array
        var evaluation = eval(evalStringArray.join(' '));
        displayVal = evaluation + '';
        displayValElement.innerText = displayVal;
        evalStringArray = []; 
        break;
  }
    
}
  

for (let i = 0; i < numBtns.length; i++) {
  numBtns[i].addEventListener('click', updateDisplayVal, false);
}

for (let i = 0; i < operatorBtns.length; i++) {
    operatorBtns[i].addEventListener('click', performOperation, false);
}

clear.onclick = () => {
    displayVal = '0';
    pendingVal = undefined;
    displayValElement.innerHTML = displayVal;
}

// Need to fix this.. currently allows more than one decimal point
decimal.onclick = () => {
  if(!displayVal.includes('.')) {
    displayVal += '.'; }
    displayValElement.innerText = displayVal;
  
}


