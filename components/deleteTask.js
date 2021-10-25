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

export default createDeleteTaskButton;
