(() => {
  const createTask = (event) => {
    event.preventDefault();

    const list = document.querySelector("[data-list]");

    const input = document.querySelector("[data-form-input]");
    const inputValue = input.value;

    const task = document.createElement("li");
    task.classList.add("task");

    const content = `<p class="content">${inputValue}</p>`;

    task.innerHTML = content;

    task.appendChild(createConcludeButton());
    task.appendChild(createDeleteTaskButton());
    list.appendChild(task);
    input.value = " ";
  };

  const newTask = document.querySelector("[data-form-button]");

  newTask.addEventListener("click", createTask);

  const createConcludeButton = () => {
    const concludeButton = document.createElement("button");
    concludeButton.classList.add("check-button");
    concludeButton.innerText = "Conclude";
    concludeButton.addEventListener("click", concludeTask);

    return concludeButton;
  };

  const concludeTask = (event) => {
    const concludeButton = event.target;

    const taskComplete = concludeButton.parentElement;

    taskComplete.classList.toggle("done");
  };

  const createDeleteTaskButton = () => {
    const deleteTaskButton = document.createElement("button");

    deleteTaskButton.innerText = "Delete";
    deleteTaskButton.addEventListener("click", deleteTask);

    return deleteTaskButton;
  };

  const deleteTask = (event) => {
    const deleteTaskButton = event.target;

    const taskComplete = deleteTaskButton.parentElement;
    taskComplete.remove();
    return deleteTaskButton;
  };
})();
