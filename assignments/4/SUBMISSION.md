# Assignment 4: The Exciting World of JavaScript - Part 1

## Student Information

*   **Name:** Gokul Krishna Radhakrishnan Nair
*   **Student ID:** 924469621

## Project Links

*   **GitHub Repository:** https://github.com/gokulkrishnaradhakrishnannair/CSC317/tree/main/assignments/4
*   **Live GitHub Pages URL:** https://gokulkrishnaradhakrishnannair.github.io/CSC317/assignments/4

## Implementation Description

This project implements a fully functional calculator with a user interface cloned from modern iOS/Android calculator apps, using vanilla HTML, CSS Grid, and JavaScript. The application manages the calculator state (current display value, first operand, awaiting second operand, and the active operator) within a single `calculator` object to maintain a clean structure. Event listeners are used to capture button clicks and keyboard input, directing them to functions that manage number input, operations (add, subtract, multiply, divide), and utility functions (AC, +/-, %). A lookup object (`performCalculation`) handles the core arithmetic logic and essential error cases like division by zero. The display is updated after every interaction, ensuring a responsive user experience.

## Challenges Faced

One significant challenge was managing the state transitions correctly—specifically, determining when a new number input should append to the current display versus starting a fresh number (e.g., after an operator is pressed). This was solved using the `waitingForSecondOperand` boolean flag within the state object.

Another challenge involved handling the precision of floating-point arithmetic in JavaScript. This was addressed by using `parseFloat(result.toFixed(7))` to limit the number of decimal places for display purposes and to prevent common math errors like `0.1 + 0.2` not equaling `0.3`.

## Additional Features and Improvements

*   **Full Keyboard Support:** The calculator is fully operable using a physical keyboard (numbers, operators, enter/equals, backspace/escape for clear).
*   **Division by Zero Handling:** Division by zero results in an "Error" message on the display and resets the calculator state to prevent further invalid calculations.
*   **Responsive Styling:** The CSS utilizes a mobile-first approach and a media query to ensure the calculator looks correct on both desktop views and smaller mobile screens.
