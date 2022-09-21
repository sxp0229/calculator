// const firstNumber = Number(prompt("First number: "));
// const operator = prompt("Operator: ");
// // const secondNumber = Number(prompt("Second number: "));
// let secondNumber;

// if (operator != "√") {
//   secondNumber = Number(prompt("Second number: "));
//   alert(`${firstNumber} ${operator} ${secondNumber}`);
// } else {
//   alert(`${firstNumber} ${operator}`);
// }


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
