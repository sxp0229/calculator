//variables from html

// const buttonTexts = document.getElementsByClassName("button");
const numberTexts = document.querySelectorAll("number")[0];
const operatorTexts = document.querySelectorAll("operator")[0];
const decimalPoint = document.querySelectorAll("decimal-point")[0];
const deleteOne = document.querySelectorAll("backspace")[0];
const deleteOne = document.querySelectorAll("equals")[0];
const equalsSign = document.getElementsByClassName("input-box")[0];
console.log (`display box result has ${resultsScreen}`)


// Get all the number button values into array
const numberTexts = document.getElementsById("number")

// Get all the operator button values into array
const operatorText = document.getElementsById("operator")

// Get the C button value - single value returned
const clear = document.getElementById("clear")

// Get the = button value - single value returned
const equals = document.getElementById("equals")

// Get the . button value
const decimal = document.getElementById("decimal-point")
// Get the <-- button value
const deleteOne = document.getElementByTagName("backspace")

// Get the input field answer value
const inputArea = document.getElementById("input-field")
//declaring empty variables
let firstNumber = "";
let secondNumber = "";
let operator = "";
let equation = "";
let answer = "";

// Build out basic mathematic functions
const addNumbers = (num1, num2) => (num1 + num2);
const subtractNumbers = (num1, num2) => (num1 - num2);
const multiplyNumbers = (num1, num2) => (num1 * num2);
const divideNumbers = (num1, num2) => {
  if (num2 === 0) {
    return "ERROR! Cannot divide by 0!"
  } else {
    return num1 / num2;
  }
}
const calcPercentage = (num1, num2) => ((num1/num2*100));
const calcSquareRoot = (num1) => Math.sqrt(num1);

// Calculate using basic math functions defined above
const calculate = (firstOperand, operator, secondOperand) => {
  if (operator == "+") {
    return addNumbers(firstOperand, secondOperand);
  } else if (operator == "-") {
    return subtractNumbers(firstOperand, secondOperand);
  } else if (operator == "*") {
    return multiplyNumbers(firstOperand, secondOperand);
  } else if (operator == "/") {
    return divideNumbers (firstOperand, secondOperand);
  } else if (operator == "%") {
    return calcPercentage (firstOperand, secondOperand);
  } else if (operator == "√") {
    return calcSquareRoot (firstOperand);
  }
}

// const appendNumber = (arg1, arg2) => `$(arg1)$(arg2)`;

// const createFirstOperand = (arg1, arg2) => {
//   // keep appending number until input is done
// }



console.log(calculate(firstNumber,operator,secondNumber));


