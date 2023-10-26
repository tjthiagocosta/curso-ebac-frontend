$(document).ready(function () {
    $("#taskForm").on("submit", function (e) {
        e.preventDefault();
        let taskName = $("#taskInput").val().trim();

        if (taskName) {
            let taskText = $("<span></span>").addClass("task-text").text(taskName);
            let editBtn = $("<button></button>").addClass("btn btn-sm edit-btn").text("✏️");
            let deleteBtn = $("<button></button>").addClass("btn btn-sm delete-btn").text("🗑️");

            let listItem = $("<li></li>").addClass("list-group-item");
            listItem.append(taskText);
            listItem.append(editBtn);
            listItem.append(deleteBtn);

            $("#taskList").append(listItem);
            $("#taskInput").val("");
        }
    });

    $("#taskList").on("click", ".task-text", function () {
        $(this).toggleClass("strike");
    });

    $("#taskList").on("click", ".edit-btn", function (e) {
        let currentTextElement = $(this).siblings(".task-text");
        let currentText = currentTextElement.text();
        let newTask = prompt("Editar Tarefa:", currentText);

        if (newTask) {
            currentTextElement.text(newTask);
        }
    });

    $("#taskList").on("click", ".delete-btn", function () {
        $(this).parent().remove();
    });
});
