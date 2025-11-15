// script.js

document.addEventListener('DOMContentLoaded', () => {
    // Select all necessary elements
    const display = document.getElementById('display');
    const numberButtons = document.querySelectorAll('.btn.number, .btn.decimal');
    const operatorButtons = document.querySelectorAll('.btn.operator');
    const utilityButtons = document.querySelectorAll('.btn.utility');
    const equalsButton = document.querySelector('.btn.equals');
    const clearButton = document.querySelector('.btn.clear'); // AC button

    // Calculator state variables
    let currentInput = '0';
    let firstOperand = null;
    let operator = null;
    let waitingForSecondOperand = false;

    // Update the display with the current input value
    function updateDisplay() {
        display.textContent = currentInput;
        // Limit display length for responsiveness/readability
        if (currentInput.length > 10) {
            display.textContent = currentInput.substring(0, 10) + '...';
        }
    }

    // Handle number and decimal button clicks
    function inputNumber(num) {
        if (waitingForSecondOperand === true) {
            currentInput = num;
            waitingForSecondOperand = false;
        } else {
            // Prevent multiple decimals in one number
            if (num === '.' && currentInput.includes('.')) return;
            // Replace '0' with number unless it's a decimal point right at the start
            if (currentInput === '0' && num !== '.') {
                currentInput = num;
            } else {
                currentInput += num;
            }
        }
        updateDisplay();
    }

    // Handle operator clicks (+, -, ×, ÷)
    function handleOperator(nextOperator) {
        const inputValue = parseFloat(currentInput);

        // If an operator is already waiting, update the operator to the new one
        if (operator && waitingForSecondOperand) {
            operator = nextOperator;
            // Visually update the active operator button (CSS handles active class)
            updateActiveOperator(nextOperator);
            return;
        }

        // Store the first operand if it hasn't been set yet
        if (firstOperand === null) {
            firstOperand = inputValue;
        } else if (operator) {
            // If we have both operands and an operator, calculate the result
            const result = calculate(firstOperand, inputValue, operator);
            currentInput = `${parseFloat(result.toFixed(7))}`; // Format result to prevent JS floating point issues
            firstOperand = result;
        }

        waitingForSecondOperand = true;
        operator = nextOperator;
        updateActiveOperator(nextOperator);
        updateDisplay();
    }

    // Function to perform calculations
    function calculate(op1, op2, operation) {
        if (operation === '+') return op1 + op2;
        if (operation === '-') return op1 - op2;
        if (operation === '×') return op1 * op2;
        if (operation === '÷') {
            if (op2 === 0) {
                // Handle division by zero edge case
                return "Error"; 
            }
            return op1 / op2;
        }
        return op2;
    }

    // Handle utility functions (AC, +/-, %)
    function handleUtility(type) {
        const currentValue = parseFloat(currentInput);

        if (type === 'AC') {
            currentInput = '0';
            firstOperand = null;
            operator = null;
            waitingForSecondOperand = false;
        } else if (type === '+/-') {
            // Toggle positive/negative
            currentInput = `${-currentValue}`;
        } else if (type === '%') {
            // Calculate percentage
            currentInput = `${currentValue / 100}`;
        }
        
        // Clear any active operator highlights after utility use
        clearActiveOperator();
        updateDisplay();
    }

    // Visual feedback helper: set the active operator highlight
    function updateActiveOperator(nextOperator) {
        clearActiveOperator();
        // Find the button corresponding to the new operator and add 'active' class
        const newActiveBtn = document.querySelector(`.btn.operator[data-value="${nextOperator}"]`);
        if (newActiveBtn) {
            newActiveBtn.classList.add('active');
        }
    }
    
    // Visual feedback helper: remove all active operator highlights
    function clearActiveOperator() {
        operatorButtons.forEach(btn => btn.classList.remove('active'));
    }

    // Add Event Listeners for buttons
    numberButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            inputNumber(event.target.textContent);
        });
    });

    operatorButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            handleOperator(event.target.textContent);
        });
    });

    utilityButtons.forEach(button => {
        button.addEventListener('click', (event) => {
            // Use a data attribute or similar for unique identification if text content varies (e.g., 'C' vs 'AC')
            handleUtility(event.target.textContent);
        });
    });

    equalsButton.addEventListener('click', () => {
        // Trigger calculation if we have a second operand waiting
        if (!waitingForSecondOperand) {
            // We reuse handleOperator logic here to finalize the calculation with the current inputs
            handleOperator(operator); 
            operator = null; // Calculation is final, clear operator
            clearActiveOperator();
            waitingForSecondOperand = true; // Next input starts a new calculation
        }
    });

    clearButton.addEventListener('click', () => {
        handleUtility('AC');
    });
    
    // Add Keyboard Support (Technical Requirement)
    document.addEventListener('keydown', (event) => {
        const key = event.key;
        
        if (/[0-9]/.test(key)) {
            inputNumber(key);
        } else if (key === '.') {
            inputNumber(key);
        } else if (key === '+' || key === '-' || key === '*' || key === '/') {
            // Map keyboard symbols to display symbols if necessary, otherwise use standard
            const displayOperator = { '+': '+', '-': '-', '*': '×', '/': '÷' }[key];
            handleOperator(displayOperator);
        } else if (key === 'Enter' || key === '=') {
            equalsButton.click(); // Trigger equals button logic
        } else if (key === 'Backspace' || key === 'Escape') {
            clearButton.click(); // Trigger AC button logic
        }
    });

    // Initialize display on load
    updateDisplay();
});
