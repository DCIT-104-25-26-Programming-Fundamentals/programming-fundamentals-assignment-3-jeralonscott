// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 3
// =============================================================================
//
// TASK: Array Statistics Calculator
//
// Write a JavaScript program that reads a collection of numbers from the user
// and computes key statistical values using separate functions.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_03_array_statistics.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLE
// -----------------------------------------------------------------------------
//
//   How many numbers? 5
//   Enter number 1: 4
//   Enter number 2: 7
//   Enter number 3: 2
//   Enter number 4: 9
//   Enter number 5: 1
//
//   Results:
//   Sum:     23
//   Average: 4.6
//   Maximum: 9
//   Minimum: 1
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement each calculation in its own function (see scaffold).
// - You may NOT use JavaScript's built-in array methods like reduce(),
//   Math.max(), or Math.min(). Implement the logic yourself using loops.
// - N must be a positive integer. If the user enters 0 or a negative number,
//   print an error message and stop.
//
// =============================================================================

const readlineSync = require('readline-sync');

// Adds up every number in the array.
function calculateSum(numbers) {
  let sum = 0;
  for (const value of numbers) {
    sum += value;
  }
  return sum;
}

// Finds the average (mean) of the numbers in the array.
function calculateAverage(numbers) {
  return calculateSum(numbers) / numbers.length;
}

// Finds the largest and smallest numbers in a single pass and
// returns them together, so callers don't have to scan the array twice.
function findMinAndMax(numbers) {
  let min = numbers[0];
  let max = numbers[0];

  for (const value of numbers) {
    if (value > max) {
      max = value;
    }
    if (value < min) {
      min = value;
    }
  }

  return { min, max };
}

function main() {
  const count = readlineSync.questionInt('How many numbers? ');

  if (count <= 0) {
    console.log('Error: Please enter a positive number of values.');
    return;
  }

  const numbers = [];
  for (let i = 0; i < count; i++) {
    const value = readlineSync.questionInt('Enter number ' + (i + 1) + ': ');
    numbers.push(value);
  }

  const { min, max } = findMinAndMax(numbers);

  console.log('');
  console.log('Results:');
  console.log('Sum:     ' + calculateSum(numbers));
  console.log('Average: ' + calculateAverage(numbers));
  console.log('Maximum: ' + max);
  console.log('Minimum: ' + min);
}

main();