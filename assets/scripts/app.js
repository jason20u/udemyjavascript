const defaultResult = 0;
let currentResult = defaultResult;
let logEntries = [];

// Gets input from input field
function getUserNumberInput() {
  return parseInt(usrInput.value);
}

// Generates and writes calculation log
function createAndWriteOutput(operator, resultBeforeCalc, calcNumber) {
  const calcDescription = `${resultBeforeCalc} ${operator} ${calcNumber}`;
  outputResult(currentResult, calcDescription); // from vendor file
}

function writeToLog(
  operationIdentifier,
  prevResult,
  operationNumber,
  newResult
) {
  const logEntry = {
    operation: operationIdentifier,
    prevResult: prevResult,
    number: operationNumber,
    result: newResult
  };
  logEntries.push(logEntry);
  console.log(logEntries);
}

function calcLoop(calcParameter) {
  const enteredNumber = getUserNumberInput();
  const initialResult = currentResult;
  let loopOperator;
  if (calcParameter === 'ADD') {
    currentResult += enteredNumber;
    loopOperator = '+';
  } else if (calcParameter === 'SUBTRACT'){
    currentResult -= enteredNumber;
    loopOperator = '-';
  } else if (calcParameter === 'MULTIPLY'){
    currentResult *= enteredNumber;
    loopOperator = '*';
  } else if (calcParameter === 'DIVIDE'){
    currentResult /= enteredNumber;
    loopOperator = '/';
  } 


  createAndWriteOutput(loopOperator, initialResult, enteredNumber);
  writeToLog(calcParameter, initialResult, enteredNumber, currentResult);

}

function add() {
  calcLoop('ADD');

//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult += enteredNumber;
//   createAndWriteOutput('+', initialResult, enteredNumber);
//   writeToLog('ADD', initialResult, enteredNumber, currentResult);
}

function subtract() {
  calcLoop('SUBTRACT');
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult -= enteredNumber;
//   createAndWriteOutput('-', initialResult, enteredNumber);
//   writeToLog('SUBTRACT', initialResult, enteredNumber, currentResult);
}

function multiply() {
  calcLoop('MULTIPLY');
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult *= enteredNumber;
//   createAndWriteOutput('*', initialResult, enteredNumber);
//   writeToLog('MULTIPLY', initialResult, enteredNumber, currentResult);
}

function divide() {
  calcLoop('DIVIDE');
//   const enteredNumber = getUserNumberInput();
//   const initialResult = currentResult;
//   currentResult /= enteredNumber;
//   createAndWriteOutput('/', initialResult, enteredNumber);
//   writeToLog('DIVIDE', initialResult, enteredNumber, currentResult);
}

addBtn.addEventListener('click', add);
subtractBtn.addEventListener('click', subtract);
multiplyBtn.addEventListener('click', multiply);
divideBtn.addEventListener('click', divide);
