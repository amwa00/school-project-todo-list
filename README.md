# Task Tracker - Todo List Application
<img width="999" height="713" alt="project_todo_img" src="https://github.com/user-attachments/assets/d9727bc8-7cb5-434c-b4c0-c5354ff62834" />

## 📌 Overview
This is a simple task tracker / todo list application built as part of a frontend assignment. The focus of the project was mainly on JavaScript logic, DOM manipulation, and working with dynamic data - not styling.

The user can add tasks, mark them as completed, move tasks between lists, and sort them alphabetically.

## 🚀 Features
- 📝 Add new tasks
- ✅ Mark tasks as done/undone
- 🔄 Move tasks between "To Do" and "Finished" lists
- 🔠 Sort tasks alphabetically
- ⚡ Dynamic DOM updates without page reload
- 📋 Simple in-memory state management (no backend)

## 🛠️ Tech Stack
- **HTML5**
- **JavaScript** (ES Modules)
- **Bootstrap** (layout only)
- **CSS** (basic styling)
- **Vite** (development environment)

## 🧠 How it works
The app stores tasks in a simple array of objects.

Each task has:

- a text value
- a boolean (_done_) to track its state

The UI is fully generated and updated using JavaScript:
- Tasks are rendered dynamically into two lists:
  - To Do
  - Finished tasks
- Checking/unchecking a task updates its state
- The DOM is re-rendered whenever data changes

## 📚 Key Learnings
### JavaScript logic
- Working with arrays of objects as application state
- Updating state and reflecting changes in the UI
- Sorting and filtering data

### DOM manipulation
- Creating elements dynamically with JavaScript
- Adding event listeners to generated elements
- Updating the DOM efficiently

### Application structure
- Separating logic into functions (render, update, sort, add task)
- Managing UI updates through a single update function

## 🌱 Future Improvements
- Add localStorage to save tasks between sessions
- Add delete button for tasks
- Add editing functionality for tasks
- Improve accessibility (keyboard navigation, ARIA labels)
- Add drag and drop reordering
- Improve visual design (this was not the focus of the assignment)

## 📎 Project Context

This project was created as a learning assignment to practice JavaScript fundamentals, especially DOM manipulation and state handling.

The focus was functionality rather than design, which is why the UI is very minimal and uses mostly default Bootstrap styling.
