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

export default createConcludeButton;
