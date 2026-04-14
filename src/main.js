import { Task } from "./models/Task";
import "./style.css";

// Lista med punkter som ska göras
let tasks = [
  new Task("Clean my desk", false),
  new Task("Do the dishes", false),
  new Task("Fold laundry", false),
];

// Hämta element
const app = document.getElementById("app");
const form = document.getElementById("task-form");

//Kunna visa händelser som är klara och klicka tillbaka så att de blir oklara igen
//Lägg till klickevent som flyttar tillbaka uppgifterna till listan med icke-avklarade tasks

// Visa listor på skärmen
const renderTaskList = (ulId, isDone) => {
  // Skapa element
  const ul = document.getElementById(ulId);
  // Töm uls innehåll
  ul.innerHTML = "";

  tasks.forEach((task) => {
    // Om en task är färdig
    if (task.done === isDone) {
      // Skapa element
      const li = document.createElement("li");
      const checkbox = document.createElement("input");
      checkbox.type = "checkbox";

      li.classList.add("task", "my-2", "p-2", "rounded");
      checkbox.classList.add("me-1");
      // Sätt checkboxen till checked
      checkbox.checked = isDone;

      // Event listener som kollar ifall checkboxen inte är ikryssad
      checkbox.addEventListener("change", () => {
        task.done = !task.done;
        updateLists();
      });

      // Visa allt på skärmen
      li.appendChild(checkbox);
      li.append(task.task);
      ul.appendChild(li);
    }
  });
};

// Uppdaterar todo på skärmen
const updateLists = () => {
  renderTaskList("todo-list", false);
  renderTaskList("done-list", true);
};

// Lägg till ny task i listan
const addTask = (e) => {
  // Hindra formulärets default funktion
  e.preventDefault();

  // Hämta element
  const userInput = document.getElementById("new-task");
  const inputValue = userInput.value.trim();

  // Lägger till userinput i task listan
  if (inputValue.length !== 0) {
    tasks.push(new Task(inputValue, false));
    updateLists();
  }

  // Tömmer input
  userInput.value = "";
};

// Sorterar tasks i alfabetisk ordning
const sortTasks = () => {
  tasks.sort((a, b) => {
    if (a.task > b.task) {
      return 1;
    } else if (b.task > a.task) {
      return -1;
    } else {
      return 0;
    }
  });

  updateLists();
};

// Skapa knapp för att sortera
const sortBtn = document.createElement("button");
sortBtn.classList.add("btn", "btn-primary", "mt-1");
sortBtn.id = "sort-btn";
sortBtn.textContent = "Sort alphabetically";

sortBtn.addEventListener("click", sortTasks);
app.append(sortBtn);

// Lägger till submit event
form.addEventListener("submit", addTask);

// Visar lista
renderTaskList("todo-list", false);
