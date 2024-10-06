document.getElementById("addTaskButton").addEventListener("click", function() {
    const taskInput = document.getElementById("taskInput");
    const taskText = taskInput.value.trim();

    if (taskText) {
        const li = document.createElement("li");
        li.textContent = taskText;

        // Create a checkbox
        const checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        checkbox.addEventListener("change", function() {
            li.classList.toggle("completed");
        });

        // Create a delete button
        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", function() {
            li.remove();
        });

        li.appendChild(checkbox);
        li.appendChild(deleteButton);
        document.getElementById("taskList").appendChild(li);

        // Clear input
        taskInput.value = '';
    }
});
