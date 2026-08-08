// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 1
// =============================================================================
//
// TASK: Prime Number Checker
//
// Write a JavaScript program that checks whether a given number is prime.
//
// A prime number is a whole number greater than 1 that has no divisors
// other than 1 and itself (e.g., 2, 3, 5, 7, 11, 13 ...).
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_01_prime_checker.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter a number: 7
//   7 is a prime number.
//
//   Enter a number: 10
//   10 is NOT a prime number.
//
//   Enter a number: 1
//   1 is NOT a prime number.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST implement the logic inside a function (see scaffold below).
// - Numbers less than 2 are NOT prime — handle this inside the function.
// - The main() function must call isPrime() and print the result.
// - Use readlineSync.questionInt() to read integer input from the user.
//
// =============================================================================

const readlineSync = require('readline-sync');

// Checks whether a number is prime.
// Returns true if it is prime, false if it is not.
function isPrime(number) {
  // Numbers less than 2 are never prime.
  if (number < 2) {
    return false;
  }

  // 2 is the only even prime — handle it directly.
  if (number === 2) {
    return true;
  }

  // Any other even number can't be prime.
  if (number % 2 === 0) {
    return false;
  }

  // Only need to check odd divisors up to the square root of the number.
  // If no divisor is found by then, none exists beyond it either.
  for (let i = 3; i * i <= number; i += 2) {
    if (number % i === 0) {
      return false;
    }
  }

  // No divisors were found, so it IS prime.
  return true;
}

function main() {
  const number = readlineSync.questionInt('Enter a number: ');

  if (isPrime(number)) {
    console.log(number + ' is a prime number.');
  } else {
    console.log(number + ' is NOT a prime number.');
  }
}

main();