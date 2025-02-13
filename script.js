document.addEventListener("DOMContentLoaded", () => {
    const input = document.getElementById("User");
    const addButton = document.querySelector("button");
    const container = document.querySelector(".container");
    
    const taskList = document.createElement("ul");
    taskList.style.listStyle = "none";
    taskList.style.width = "100%";
    taskList.style.padding = "10px";
    container.appendChild(taskList);
    
    addButton.addEventListener("click", () => {
        const taskText = input.value.trim();
        
        if (taskText === "") return;
        
        const taskItem = document.createElement("li");
        taskItem.style.display = "flex";
        taskItem.style.justifyContent = "space-between";
        taskItem.style.fontSize = "1.5rem";
        taskItem.style.alignItems = "center";
        taskItem.style.background = "#fff";
        taskItem.style.margin = "5px 0";
        taskItem.style.padding = "10px";
        taskItem.style.borderRadius = "10px";
        taskItem.style.border = "1px solid #bdbdbd";
        
        const taskSpan = document.createElement("span");
        taskSpan.textContent = taskText;
        
        const removeButton = document.createElement("button");
        removeButton.textContent = "-";
        removeButton.style.width = "8vh";
        removeButton.style.height = "4vh";
        removeButton.style.marginLeft = "10px";
        removeButton.style.padding = "5px";
        removeButton.style.background = "#ff4d4d";
        removeButton.style.color = "white";
        removeButton.style.border = "none";
        removeButton.style.borderRadius = "10px";
        removeButton.style.cursor = "pointer";
        
        removeButton.addEventListener("click", () => {
            taskList.removeChild(taskItem);
        });
        
        taskItem.appendChild(taskSpan);
        taskItem.appendChild(removeButton);
        taskList.appendChild(taskItem);
        
        input.value = "";
    });
});
