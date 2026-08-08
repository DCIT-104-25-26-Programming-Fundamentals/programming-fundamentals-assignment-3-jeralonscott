// =============================================================================
// PROGRAMMING FUNDAMENTALS — Assignment 7
// =============================================================================
//
// TASK: Console-Based To-Do List Application
//
// Build a simple to-do list program that runs entirely in the console and
// allows the user to manage their tasks interactively using a menu.
//
// -----------------------------------------------------------------------------
// HOW TO RUN THIS PROGRAM
// -----------------------------------------------------------------------------
// 1. Install the input library (only once):  npm install readline-sync
// 2. Run the program:                        node assignment_07_todo_list.js
//
// -----------------------------------------------------------------------------
// FEATURES YOUR PROGRAM MUST SUPPORT
// -----------------------------------------------------------------------------
//
//   1. Add a Task
//      - Prompt the user to type a task description.
//      - Add it to the array and confirm it was added.
//
//   2. View All Tasks
//      - Display all tasks currently in the array, numbered from 1.
//      - If the array is empty, print a friendly message saying so.
//
//   3. Delete a Task
//      - Show the list of tasks with their numbers.
//      - Ask the user which task number they want to remove.
//      - Remove the task and confirm the deletion.
//      - If the task number is invalid, print an error message.
//
//   4. Quit
//      - End the program with a farewell message.
//
// -----------------------------------------------------------------------------
// HOW THE MENU SHOULD LOOK
// -----------------------------------------------------------------------------
//
//   ============================
//        TO-DO LIST MENU
//   ============================
//   1. Add task
//   2. View tasks
//   3. Delete task
//   4. Quit
//   Enter your choice (1-4):
//
// -----------------------------------------------------------------------------
// EXPECTED INTERACTION EXAMPLE
// -----------------------------------------------------------------------------
//
//   Enter your choice (1-4): 1
//   Enter task: Buy groceries
//   Task added: "Buy groceries"
//
//   Enter your choice (1-4): 2
//   Your Tasks:
//   1. Buy groceries
//   2. Study for exams
//
//   Enter your choice (1-4): 3
//   Enter task number to delete: 1
//   Task "Buy groceries" has been removed.
//
//   Enter your choice (1-4): 4
//   Goodbye!
//
// -----------------------------------------------------------------------------
// REQUIREMENTS
// -----------------------------------------------------------------------------
// - Store tasks in a JavaScript array (e.g. let tasks = []).
// - Use a loop to keep the menu running until the user chooses to quit.
// - Each feature MUST be implemented in its own function (see scaffold below).
// - Handle invalid menu choices gracefully (print an error, do not crash).
// - To remove an item from an array by index, use: tasks.splice(index, 1)
//
// =============================================================================

const readlineSync = require('readline-sync');

let tasks = [];

// Shows the menu of options.
function showMenu() {
  console.log('\n============================');
  console.log('     TO-DO LIST MENU');
  console.log('============================');
  console.log('1. Add task');
  console.log('2. View tasks');
  console.log('3. Delete task');
  console.log('4. Quit');
}

// FEATURE 1 — Adds a new task to the list.
// Rejects blank input so the list doesn't fill up with empty entries.
function addTask() {
  const task = readlineSync.question('Enter task: ').trim();

  if (task === '') {
    console.log('Error: Task cannot be empty.');
    return;
  }

  tasks.push(task);
  console.log('Task added: "' + task + '"');
}

// FEATURE 2 — Displays every task, numbered from 1.
function viewTasks() {
  if (tasks.length === 0) {
    console.log('You have no tasks yet.');
    return;
  }

  console.log('Your Tasks:');
  tasks.forEach((task, i) => {
    console.log((i + 1) + '. ' + task);
  });
}

// FEATURE 3 — Removes a task by its displayed number.
function deleteTask() {
  if (tasks.length === 0) {
    console.log('You have no tasks to delete.');
    return;
  }

  viewTasks();
  const taskNumber = readlineSync.questionInt('Enter task number to delete: ');
  const index = taskNumber - 1;

  if (index < 0 || index >= tasks.length) {
    console.log('Error: Invalid task number.');
    return;
  }

  const [removedTask] = tasks.splice(index, 1);
  console.log('Task "' + removedTask + '" has been removed.');
}

// Maps menu choices to their handler functions, keeping main() free of a
// long if/else-if chain.
const MENU_ACTIONS = {
  1: addTask,
  2: viewTasks,
  3: deleteTask,
};

function main() {
  let running = true;

  while (running) {
    showMenu();
    const choice = readlineSync.questionInt('Enter your choice (1-4): ');

    if (choice === 4) {
      console.log('Goodbye!');
      running = false;
    } else if (MENU_ACTIONS[choice]) {
      MENU_ACTIONS[choice]();
    } else {
      console.log('Error: Please enter a number between 1 and 4.');
    }
  }
}

main();