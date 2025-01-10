console.log("Hello from Script!");

let inputTask = document.getElementById("task-input");
let clearBtn = document.getElementById("clear-button");
let saveBtn = document.getElementById("save-button");

let tasks = [];

// Enable/Disable buttons based on input value
inputTask.addEventListener("input", () => {
    const isInputEmpty = inputTask.value.trim() === "";
    saveBtn.classList.toggle("disabled", isInputEmpty);
    clearBtn.classList.toggle("disabled", isInputEmpty);
});

// Save the task and reset input field
saveBtn.addEventListener("click", () => {
    if (inputTask.value.trim() === "") {
        return;
    }
    addTask(inputTask.value.trim());
    inputTask.value = "";
    saveBtn.classList.add("disabled");
    clearBtn.classList.add("disabled");
});

// Clear input field
clearBtn.addEventListener("click", () => {
    inputTask.value = "";
    saveBtn.classList.add("disabled");
    clearBtn.classList.add("disabled");
});

// Add task in todo
function addTask(taskDescription) {
    tasks.push({ description: taskDescription, status: "In-Progress" });
    renderTasks();
}

let taskList = document.getElementById("task-list");
// Render all the tasks
function renderTasks() {
    let taskContainer = taskList.querySelector("#task-container");
    taskContainer.innerHTML = "";

    tasks.forEach((task, index) => {
        let taskRow = document.createElement("div");
        taskRow.className = "row d-flex justify-content-evenly align-items-center mb-2";

        taskRow.innerHTML =
            `
        <div class="col-1 fw-bold">${index + 1}</div>
        <div class="col-6">${task.description}</div>
        <div class="col-2">${task.status}</div>
        <div class="col-2 d-flex flex-wrap flex-md-nowrap gap-2">
        <button class="btn btn-success btn-sm" onclick="editTask(${index})">Edit</button>
        <button class="btn btn-danger btn-sm" onclick="deleteTask(${index})">Delete</button>
        </div>
        <hr>
        `;

        taskContainer.appendChild(taskRow);
    });
}

// Edit a task
function editTask(index) {
    const newDescription = prompt("Edit Task:", tasks[index].description);
    if (newDescription) {
        tasks[index].description = newDescription.trim();
        renderTasks();
    }
}

// Delete a task
function deleteTask(index) {
    tasks.splice(index, 1);
    renderTasks();
}