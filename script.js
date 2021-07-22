const button = document.querySelector("#enter");
const input = document.querySelector("#userInput");
const divDone = document.querySelector("#done");
const divUndone = document.querySelector("#todo");
const todoForm = document.querySelector("#todo-form");
const hr = document.createElement("hr");

//LocalStorage
let todos = [];
let finish = [];


todoForm.addEventListener("submit", (event) => {
  event.preventDefault(); //Non-refresh form
  addTodoAfterClick(input.value);
});

//InputLength
const inputLength = () => {
  return input.value.length;
};

//Render HTML
const renderTodos = (todos) => {
  divDone.innerHTML = "";
  divUndone.innerHTML = "";

  todos.forEach((item) => {
    const div1 = document.createElement("div");
    if(item.done == true) {
        div1.className =
      "flex justify-between space-x-4 px-4 py-6 group text-xl border-b-2 transition duration-500 ease-in-out";
    }
    else {
        div1.className =
      "flex justify-between space-x-4 px-4 py-6 group text-xl bg-gray-300 bg-opacity-30 border-b-2 border-gray-300 transition duration-500 ease-in-out";
    }
    const li = document.createElement("li");
    li.setAttribute("class", "item");
    li.setAttribute("data-key", item.id);

    li.innerHTML = `${item.name}`;

    const divButton = document.createElement("div");
    divButton.className =
      "m-0 px-4 opacity-0 group-hover:opacity-100 space-x-1 transition duration-500 ease-in-out";
    const DoneButton = document.createElement("button");
    DoneButton.setAttribute("done-key", item.id);
    DoneButton.className =
      "done-button rounded-sm font-serif text-sm text-black font-thin px-4 bg-green-600 hover:bg-green-700 transition duration-200 ease-in-out";
    DoneButton.innerHTML = "Done";
    divButton.append(DoneButton);
    const DelButton = document.createElement("button");
    DelButton.setAttribute("delete-key", item.id);
    DelButton.className =
      "delete-button rounded-sm font-serif deletebtn text-sm text-black font-thin px-4 bg-red-700 hover:bg-red-800 transition duration-200 ease-in-out shadow-xl";
    DelButton.innerHTML = "Delete";
    divButton.append(DelButton);
    if (item.done == false) {
      div1.append(li);
      div1.append(divButton);
      divUndone.append(div1);
      divUndone.append(hr);
    }
    if (item.done == true) {
      li.classList.add("line-through");
      div1.append(li);
      divDone.append(div1);
      divUndone.append(hr);
    }
  });
};

const addToLocalStorage = (todos) => {
  localStorage.setItem("todos", JSON.stringify(todos));
  renderTodos(todos);
};

const getFromLocalStorage = () => {
  const ref = localStorage.getItem("todos");
  if (ref) {
    todos = JSON.parse(ref);
    renderTodos(todos);
  }
};

// Click
const addTodoAfterClick = (item) => {
  if (inputLength() > 0) {
    const todo = {
      id: Date.now(),
      name: item,
      done: false,
    };
    todos.unshift(todo);
    addToLocalStorage(todos);
    input.value = "";
  } else if (inputLength() === 0) {
    alert("Task cannot be empty!");
  }
};

// Press Enter
const addTodoAfterKeypress = (event) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    const todo = {
      id: Date.now(),
      name: item,
      done: false,
    };
    todos.unshift(todo);
    addToLocalStorage(todos);
    input.value = "";
  } else if (inputLength() === 0 && event.keyCode === 13) {
    alert("Task cannot be empty!");
  }
};

//Load from LocalStorage
getFromLocalStorage();

const checkDoneAndDel = (event) => {
  if (event.target.classList.contains("delete-button")) {
    // console.log(event.target);
    // console.log(event.target.getAttribute("delete-key"));
    deleteTodo(event.target.getAttribute("delete-key"));
  }

  if (event.target.classList.contains("done-button")) {
    // console.log(event.target);
    // console.log(event.target.getAttribute("done-key"));
    doneTodo(event.target.getAttribute("done-key"));
  }
};

const doneTodo = (id) => {
  todos.forEach((item) => {
    if (item.id == id) {
      item.done = true;
    }
  });
  addToLocalStorage(todos);
};

const deleteTodo = (id) => {
  todos = todos.filter((item) => {
    return item.id != id;
  });

  addToLocalStorage(todos);
};

divUndone.addEventListener("click", checkDoneAndDel);
