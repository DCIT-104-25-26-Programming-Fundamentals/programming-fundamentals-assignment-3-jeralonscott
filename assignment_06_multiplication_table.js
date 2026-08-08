// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 6
// =============================================================================
//
// TASK: Multiplication Table Generator
//
// Write a JavaScript program that generates multiplication tables using loops
// and functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_06_multiplication_table.js
//
// -----------------------------------------------------------------------------
// PART A — Single Table
// -----------------------------------------------------------------------------
// - Ask the user to enter a number.
// - Print the multiplication table for that number from 1 to 12.
//
// Expected output (if user enters 5):
//
//   Multiplication Table for 5:
//   5  x  1  =  5
//   5  x  2  =  10
//   5  x  3  =  15
//   ...
//   5  x  12 =  60
//
// -----------------------------------------------------------------------------
// PART B — Bonus: Tables from 1 to N
// -----------------------------------------------------------------------------
// - Ask the user to enter a number N.
// - Print the full multiplication table for every number from 1 to N.
// - Add a separator line (e.g. "---") between each table.
//
// Expected output (if user enters 3):
//
//   Multiplication Table for 1:
//   1  x  1  =  1
//   ...
//   1  x  12 =  12
//   ---------------------------
//   Multiplication Table for 2:
//   2  x  1  =  2
//   ...
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - N must be a positive integer. If the user enters an invalid value,
//   print an error message and stop.
// - Each part must be in its own function (see scaffold below).
// - Complete Part A before attempting Part B.
//
// =============================================================================

const readlineSync = require('readline-sync');

// Reads a positive integer, printing an error and returning null if the
// value entered isn't positive. Keeps the "must be positive" check in one
// place instead of repeating it after every prompt.
function askPositiveInt(prompt) {
  const value = readlineSync.questionInt(prompt);

  if (value <= 0) {
    console.log('Error: Please enter a positive number.');
    return null;
  }

  return value;
}

// PART A — Prints the multiplication table for a single number, 1 to 12.
// Right-pads the factor so results line up even once the product hits
// double digits.
function printTable(number) {
  console.log('Multiplication Table for ' + number + ':');
  for (let i = 1; i <= 12; i++) {
    const factor = String(i).padEnd(2);
    console.log(number + '  x  ' + factor + '  =  ' + (number * i));
  }
}

// PART B — Prints the multiplication tables for every number from 1 to n.
function printTablesUpTo(n) {
  for (let number = 1; number <= n; number++) {
    printTable(number);
    console.log('---------------------------');
  }
}

function main() {
  // ----- PART A -----
  const number = askPositiveInt('Enter a number: ');
  if (number === null) {
    return;
  }

  printTable(number);

  // ----- PART B (Bonus) -----
  const n = askPositiveInt('\nEnter N to print tables from 1 to N: ');
  if (n === null) {
    return;
  }

  printTablesUpTo(n);
}

main();