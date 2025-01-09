console.log("Hello From JS!");

let todoArray = [];
let userInput = document.getElementById("exampleFormControlInput1");
let saveBtn = document.getElementById("save-btn");
let clearBtn = document.getElementById("clear-btn");

userInput.addEventListener("keyup", function toggleInputBtns() {
    if (userInput.value.length === 0) {
        if (saveBtn.classList.contains("disabled")) {
            return;
        }
        if (clearBtn.classList.contains("disabled")) {
            return;
        }
        else {
            saveBtn.classList.add("disabled");
            clearBtn.classList.add("disabled");
        }
    }
    else {
        if (saveBtn.classList.contains("disabled")) {
            saveBtn.classList.remove("disabled");
        }
        if (clearBtn.classList.contains("disabled")) {
            clearBtn.classList.remove("disabled");
        }
    }
});

saveBtn.addEventListener("click", function saveAndCreateTodo() {
    let taskToPerform = userInput.value;
    if (taskToPerform.length === 0) return;
    else {
        createTodo(taskToPerform);
        userInput.value = "";
        saveBtn.classList.add("disabled");
        clearBtn.classList.add("disabled");
    }
});

clearBtn.addEventListener("click", function clearTodo() {
    let taskToPerform = userInput.value;
    if (taskToPerform.length === 0) return;
    else {
        userInput.value = "";
        saveBtn.classList.add("disabled");
        clearBtn.classList.add("disabled");
    }
});

let taskSection = document.getElementById("tasks");
function createTodo(taskToPerform) {
    let colDiv = document.createElement("div");
    let rowDiv = document.createElement("div");
    let todoNumber = document.createElement("div");
    let todoDetail = document.createElement("div");
    let todostatus = document.createElement("div");
    let todoActions = document.createElement("div");
    let editBtn = document.createElement("button");
    let deleteBtn = document.createElement("button");
    let hr = document.createElement("hr");

    todoArray.push(taskToPerform);

    todoNumber.textContent = `${todoArray.length}`;
    todoDetail.textContent = taskToPerform;
    todostatus.textContent = "In-Progress";
    editBtn.textContent = "Edit";
    deleteBtn.textContent = "Delete";

    taskSection.appendChild(colDiv);
    colDiv.appendChild(rowDiv);
    rowDiv.appendChild(todoNumber);
    rowDiv.appendChild(todoDetail);
    rowDiv.appendChild(todostatus);
    rowDiv.appendChild(todoActions);
    todoActions.appendChild(editBtn);
    todoActions.appendChild(deleteBtn);
    rowDiv.appendChild(hr);

    // Add CSS
    taskSection.classList.add("row", "tasks", "mt-3");
    colDiv.classList.add("col-12");
    rowDiv.classList.add("row", "d-flex", "justify-content-evenly", "align-items-center")
    todoNumber.classList.add("todo-no", "col-1", "fw-bold", "pb-2");
    todoDetail.classList.add("todo-detail", "col-6", "pb-2");
    todostatus.classList.add("todo-status", "col-2", "pb-2");
    todoActions.classList.add("col-2", "todo-actions", "d-md-flex", "flex-column", "flex-md-row", "justify-content-start", "align-items-md-center", "gap-1", "gap-md-2")
    editBtn.classList.add("edit-btn", "btn", "btn-success", "mb-2");
    deleteBtn.classList.add("delete-btn", "btn", "btn-danger", "mb-2");
}