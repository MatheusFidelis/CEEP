const createTask = (event) => {
  event.preventDefault();

  const input = document.querySelector("[data-form-input]");
  const inputValue = input.value;

  const task = document.querySelector("[data-task]");
  const content = `<p class="content">${inputValue}</p>`;
  task.innerHTML = content;
  input.value = " ";
};

const newTask = document.querySelector("[data-form-button]");

newTask.addEventListener("click", createTask);
