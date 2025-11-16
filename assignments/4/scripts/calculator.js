// script.js

// State object to keep track of the calculator's current status
const calculator = {
    displayValue: '0',
    firstOperand: null,
    waitingForSecondOperand: false,
    operator: null,
};

// Get the display element
const display = document.getElementById('display');

// Function to update the display
function updateDisplay() {
    display.textContent = calculator.displayValue;
}

// Function to handle number and decimal input
function inputNumber(input) {
    if (calculator.waitingForSecondOperand === true) {
        calculator.displayValue = input;
        calculator.waitingForSecondOperand = false;
    } else {
        // Handle initial '0' and prevent multiple decimals
        if (input === '.') {
            if (!calculator.displayValue.includes('.')) {
                calculator.displayValue += input;
            }
        } else {
            calculator.displayValue = calculator.displayValue === '0' ? input : calculator.displayValue + input;
        }
    }
}

// Function to handle operations (+, -, *, /)
function handleOperator(nextOperator) {
    const inputValue = parseFloat(calculator.displayValue);

    // If an operator exists and we haven't entered the second number, update the operator
    if (calculator.operator && calculator.waitingForSecondOperand) {
        calculator.operator = nextOperator;
        return;
    }

    // Store the input value as the first operand if it's the first operation
    if (calculator.firstOperand === null) {
        calculator.firstOperand = inputValue;
    } else if (calculator.operator) {
        // Perform the calculation using the previous operator
        const result = performCalculation[calculator.operator](calculator.firstOperand, inputValue);
        
        if (result === "Error") {
            clearAll();
            calculator.displayValue = "Error";
            return;
        }
        
        // Use `toFixed` to manage precision issues, then remove trailing zeros if possible
        calculator.displayValue = `${parseFloat(result.toFixed(7))}`; 
        calculator.firstOperand = result;
    }

    calculator.waitingForSecondOperand = true;
    calculator.operator = nextOperator;
}

// Object mapping actions to calculation functions for cleaner code
const performCalculation = {
    'divide': (firstOperand, secondOperand) => secondOperand === 0 ? "Error" : firstOperand / secondOperand,
    'multiply': (firstOperand, secondOperand) => firstOperand * secondOperand,
    'subtract': (firstOperand, secondOperand) => firstOperand - secondOperand,
    'add': (firstOperand, secondOperand) => firstOperand + secondOperand,
    // Equals does not need a calculation function here, it just finalizes the previous one
};

// Function to handle utility actions (AC, +/-, %)
function handleUtility(action) {
    const currentValue = parseFloat(calculator.displayValue);
    
    switch (action) {
        case 'clear':
            clearAll();
            break;
        case 'toggleSign':
            calculator.displayValue = (currentValue * -1).toString();
            break;
        case 'percentage':
            calculator.displayValue = (currentValue / 100).toString();
            break;
        case 'equals':
            // Trigger calculation for the current operator
            if (calculator.operator) {
                handleOperator(calculator.operator);
            }
            break;
    }
}

// Function to reset the entire calculator state
function clearAll() {
    calculator.displayValue = '0';
    calculator.firstOperand = null;
    calculator.waitingForSecondOperand = false;
    calculator.operator = null;
}

// Main event listener for button clicks
calculator.addEventListener('click', (event) => {
    const { target } = event;

    if (!target.matches('button')) {
        return;
    }

    if (target.classList.contains('number') || target.dataset.action === 'decimal') {
        inputNumber(target.textContent);
    } else if (target.classList.contains('operator')) {
        // Check for equals button specifically to handle it as a utility function
        if (target.dataset.action === 'equals') {
            handleUtility('equals');
        } else {
            handleOperator(target.dataset.action);
        }
    } else if (target.classList.contains('util')) {
        handleUtility(target.dataset.action);
    }

    updateDisplay();
});

// Initial display update when the script loads
updateDisplay();

// Optional: Keyboard Support (kept simple)
document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key >= '0' && key <= '9' || key === '.') {
        inputNumber(key);
    } else if (['+', '-', '*', '/'].includes(key)) {
        // Map common keys to data actions used internally
        const actionMap = { '+': 'add', '-': 'subtract', '*': 'multiply', '/': 'divide' };
        handleOperator(actionMap[key]);
    } else if (key === 'Enter' || key === '=') {
        handleUtility('equals');
    } else if (key === 'Backspace' || key === 'Escape') {
        handleUtility('clear');
    }
    updateDisplay();
});