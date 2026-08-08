// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 2
// =============================================================================
//
// TASK: Student Grade System
//
// Write a JavaScript program that reads a student's score and outputs the
// corresponding letter grade based on the scale below.
//
// Grading Scale:
//   Score 80 – 100  →  Grade A
//   Score 70 – 79   →  Grade B
//   Score 60 – 69   →  Grade C
//   Score 50 – 59   →  Grade D
//   Score below 50  →  Grade F
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_02_student_grade_system.js
//
// -----------------------------------------------------------------------------
// EXPECTED INPUT / OUTPUT EXAMPLES
// -----------------------------------------------------------------------------
//
//   Enter student score (0-100): 85
//   Grade: A
//
//   Enter student score (0-100): 73
//   Grade: B
//
//   Enter student score (0-100): 45
//   Grade: F
//
//   Enter student score (0-100): 110
//   Error: Score must be between 0 and 100.
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - You MUST use functions (see scaffold below).
// - Validate the score inside getGrade(). If it is out of range, return null
//   and let main() print the error message.
// - Use if / else if / else to determine the grade.
//
// =============================================================================

const readlineSync = require('readline-sync');

// Grade cutoffs, ordered from highest to lowest.
// Keeping this as data (instead of a long if/else chain) makes it easy
// to add or adjust grade bands later.
const GRADE_BANDS = [
  { min: 80, letter: 'A' },
  { min: 70, letter: 'B' },
  { min: 60, letter: 'C' },
  { min: 50, letter: 'D' },
  { min: 0,  letter: 'F' },
];

// Works out the letter grade for a score.
// Returns null if the score is not between 0 and 100.
function getGrade(score) {
  if (score < 0 || score > 100) {
    return null;
  }

  for (const band of GRADE_BANDS) {
    if (score >= band.min) {
      return band.letter;
    }
  }

  // Should be unreachable, since GRADE_BANDS bottoms out at 0.
  return null;
}

function main() {
  const score = readlineSync.questionInt('Enter student score (0-100): ');
  const grade = getGrade(score);

  if (grade === null) {
    console.log('Error: Score must be between 0 and 100.');
  } else {
    console.log('Grade: ' + grade);
  }
}

main();