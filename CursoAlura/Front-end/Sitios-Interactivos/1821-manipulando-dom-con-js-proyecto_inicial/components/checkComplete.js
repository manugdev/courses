const checkComplete = (id) => {
    const i = document.createElement("i");
    i.classList.add("far", "fa-check-square", "icon");
    i.addEventListener("click", (evento) => completeTask(evento, id));
    return i;
};

const completeTask = (evento, id) => {
    const element = evento.target;
    element.classList.toggle("far");
    element.classList.toggle("fas");
    element.classList.toggle("completeIcon");
    const task = JSON.parse(localStorage.getItem("task"));
    const index = task.findIndex(item => item.id === id);
    task[index]["complete"] = !task[index]["complete"];
    localStorage.setItem("task", JSON.stringify(task));
}

export default checkComplete;