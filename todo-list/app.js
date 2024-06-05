const inputBox = document.getElementById("input-box");
const todoList = document.getElementById("todo-list");
const filterOption = document.querySelector(".filter-todo");

inputBox.addEventListener("keydown", function (event) {
    if (event.key === "Enter") {
        addTask();
    }
});

function addTask() {
    if (inputBox.value === '') {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;

        let timestamp = document.createElement("div");
        timestamp.className = "timestamp";
        let now = new Date();
        timestamp.innerHTML = now.toLocaleString();
        li.appendChild(timestamp);

        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        todoList.appendChild(li);
        storeData();
    }
    inputBox.value = "";
    filterTodo();
}

todoList.addEventListener("click", function (e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        storeData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        storeData();
    }
    filterTodo();
}, false);

filterOption.addEventListener("change", filterTodo);

function filterTodo() {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch (filterOption.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("checked")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });
}

function storeData() {
    localStorage.setItem("data", todoList.innerHTML);
}

function displayList() {
    todoList.innerHTML = localStorage.getItem("data") || "";
    filterTodo();
}

displayList();
