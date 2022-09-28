//variables from html

// Get all the number button values into array
const numberTexts = document.querySelectorAll(".number");
const resultsScreen = document.querySelectorAll(".input-box")[0];
const operatorTexts = document.querySelectorAll(".operator");
const clear = document.getElementById("clear")
const equalsSign = document.querySelector("#equals");
const deleteOne = document.querySelectorAll("backspace")[0];

//declaring empty variables
let firstNumber;
let secondNumber;
let operator;
let equation;
let answer;

// add clicked numbers to input section of the calculator and enable operators
numberTexts.forEach((num) => {
    num.addEventListener ("click", (event) => {
        resultsScreen.innerHTML += num.innerHTML;
        console.log(resultsScreen);
    });
})

operatorTexts.forEach((operatorButton) => {
    operatorButton.addEventListener ("click", (event) => {
      //if I want to display operator on results screen
        firstNumber = resultsScreen.innerHTML;
        resultsScreen.innerHTML = firstNumber + operatorButton.innerHTML;
        operator=operatorButton.innerHTML;
        resultsScreen.innerHTML="";
        //for debugging
        console.log("First Number" + firstNumber);
        console.log("Results Screen" + resultsScreen); 
        console.log("Operator:" + operator);
        console.log("Operator Button:" + operatorButton.innerHTML);

    })
});

equalsSign.addEventListener ("click", (event) => {
    secondNumber = resultsScreen.innerHTML;
    console.log("Second Number" + secondNumber);
});


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
const calculate = () => {
  firstOperand = Number(firstNumber);
  secondOperand = Number(secondNumber);
  console.log("First Operand: "+firstOperand);
  console.log("Second Operand: "+ secondOperand);
  console.log("Operator: "+ operator);

    if (operator == "+") {
    resultsScreen.innerHTML=  addNumbers (firstOperand, secondOperand);
  } else if (operator == "-") {
    resultsScreen.innerHTML = subtractNumbers(firstOperand, secondOperand);
  } else if (operator == "*") {
    resultsScreen.innerHTML =  multiplyNumbers(firstOperand, secondOperand);
  } else if (operator == "/") {
    resultsScreen.innerHTML =  divideNumbers (firstOperand, secondOperand);
  } else if (operator == "%") {
    resultsScreen.innerHTML =  calcPercentage (firstOperand, secondOperand);
  } else if (operator == "√") {
    resultsScreen.innerHTML =  calcSquareRoot (firstOperand);
  }
}

equalsSign.addEventListener ("click", calculate);
answer = Number(resultsScreen.innerHTML);
console.log(`Answer is $(answer)`);

// console.log(calculate(firstNumber,operator,secondNumber));


