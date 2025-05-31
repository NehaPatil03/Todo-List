# Todo List React App

A simple Todo List application built with React. It allows users to add, edit, complete, and delete tasks with an easy-to-use interface.

---

## Features

- Add new tasks
- Edit existing tasks
- Mark tasks as completed
- Delete tasks
- Toggle editing mode for tasks

---

## Getting Started

### Prerequisites

- Node.js and npm installed on your machine
- Basic knowledge of React

### Installation

1. Clone the repository:

```bash
git clone https://github.com/NehaPatil03/Todo-List.git
cd Todo-List
Install dependencies:

bash
Copy
Edit
npm install
Start the development server:

bash
Copy
Edit
npm start
Open your browser and go to http://localhost:3000

Project Structure
src/

TodoWrapper.js — Main component managing state and rendering todos

Todo.js — Component displaying individual todo items

TodoForm.js — Form component to add new todos

EditTodoForm.js — Form component to edit existing todos

index.js — Entry point of the React app

Usage
Enter a task in the input field and click "Add" to add a new todo.

Click the checkbox to mark a todo as completed.

Click the "Edit" button to modify a todo; after editing, save the changes.

Click the "Delete" button to remove a todo from the list.

Testing Guide
Since this is a simple React app without automated tests, follow these manual testing steps to ensure everything works correctly:

Add Todo

Type a task in the input field.

Click "Add".

Verify the new task appears in the list.

Complete Todo

Click the checkbox next to a task.

Verify the task text style changes to indicate completion.

Edit Todo

Click the "Edit" button on a task.

Modify the task text in the input field.

Click "Save" or confirm editing.

Verify the task updates in the list.

Delete Todo

Click the "Delete" button next to a task.

Verify the task is removed from the list.

UI and Responsiveness

Check the UI on different screen sizes to ensure usability.

Ensure no errors appear in the browser console during operations.

Troubleshooting
If you see a blank screen or errors, check the browser console for messages.

Make sure all components (Todo, TodoForm, EditTodoForm) are correctly imported and exported.

Ensure React and dependencies are installed properly with npm install.

Git Commands for Push
bash
Copy
Edit
git add .
git commit -m "Initial commit"
git push -u origin main
Replace main with your branch name if different.
