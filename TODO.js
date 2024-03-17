function showTodoInput() {
    var todoInput = document.getElementById("todo-input");
    todoInput.style.display = "block";
  }
  function addTodo() {
    var todoInput = document.getElementById("todo-text");
    var todoText = todoInput.value.trim();
    if (todoText !== "") {
      var todoList = document.getElementById("todo-list");
      var li = document.createElement("li");
      li.textContent = todoText;
      li.onclick = function() { // Add onclick function to select or deselect
        if (this.style.backgroundColor === "lightgrey") {
          this.style.backgroundColor = "";
        } else {
          this.style.backgroundColor = "lightgrey";
        }
      };
      todoList.appendChild(li);
      todoInput.value = "";
      var todoDiv = document.getElementById("todo-input");
      todoDiv.style.display = "none";
    } else {
      alert("Please enter a TODO!");
    }
  }
  function showTodoList() {
    var todoList = document.getElementById("todo-list");
    if (todoList.style.display === "none") {
      todoList.style.display = "block";
    } else {
      todoList.style.display = "none";
    }
  }
  function deleteTodoList() {
    var todoList = document.getElementById("todo-list");
    var todos = todoList.getElementsByTagName("li");
    for (var i = todos.length - 1; i >= 0; i--) {
      if (todos[i].style.backgroundColor === "lightgrey") {
        todoList.removeChild(todos[i]);
      }
    }
  }