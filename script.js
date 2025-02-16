function addTodo() {
    const todoList = document.querySelector(".todo-list");
    const todoInput = document.getElementById("todoInput");
    const value = todoInput.value.trim();

    if (value === "") {
        alert("Please enter a task!");
        return;
    }

    // Create a new todo item
    const todoDiv = document.createElement("div");
    todoDiv.classList.add("todo");

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";

    // Create a paragraph for the task text
    const taskText = document.createElement("p");
    taskText.textContent = value;

    // Create a delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "DELETE";
    deleteBtn.onclick = function () {
        todoList.removeChild(todoDiv);
    };

    // Append elements to the todo item
    todoDiv.appendChild(checkbox);
    todoDiv.appendChild(taskText);
    todoDiv.appendChild(deleteBtn);

    // Append the new todo item to the list
    todoList.appendChild(todoDiv);

    // Clear the input field
    todoInput.value = "";
}
