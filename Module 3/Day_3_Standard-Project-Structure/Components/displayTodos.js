export function displayTodos(data) {
    const container = document.getElementById("todoList");
    container.innerHTML = "";

    data.forEach(todo => {
        const div = document.createElement("div");
        div.style.border = "1px solid black";
        div.style.padding = "10px";
        div.style.margin = "5px";

        div.innerHTML = `
            <h3>${todo.title}</h3>
            <p>Status: ${todo.completed ? "Completed" : "Pending"}</p>
        `;

        container.appendChild(div);
    });
}
