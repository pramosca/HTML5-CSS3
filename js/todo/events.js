$(document).ready(function() {

	// configuración de los manejadores de eventos

	$("#add-task-form").on("submit", function(evt) {
		var taskName = $("#task").val();
		var task = { task: taskName};
		APIClient.createTask( task  ,function(data) {
				console.log("TASK SAVED!", data);
				reloadTasksList();
				$("#task").val("").focus();
			}, function(data) {
				console.log("TASK ERROR!", data);
			});

		return false; // esto en jquery es el evt.preventDefault()
	});

	// manejador de eventos para el borrado de tareas
	// dejamos de encargado del evento al #tasks-list para que
	// cuando aparezcan en sus <li> los botones con la clase
	// deleteTask capturen el evento click
	$("#tasks-list").on("click", ".deleteTask", function(evt) {
		var task = { id: $(this).parent().data("taskId")};
		console.log("TRYING TO DELETE TASK", task);
		APIClient.deleteTask(task, function(data) {
			console.log("TASK DELETED", task);
			reloadTasksList();
		}, function(data) {
			console.error("ERROR WHILE DELETING TASK", task);
		});
	});

	$("#tasks-list").on("blur", "input", function(evt) {
		var oldValue = $(this).parent().data("taskText");
        var currentValue = $(this).val();
        if (oldValue != currentValue) {
            $(this).parent().data("taskText", currentValue);
            var task = {
                id: $(this).parent().data("taskId"),
                task: $(this).val() // cojo el valor del input
            };
            console.log("TRYING TO UPDATE TASK", task);
            APIClient.updateTask(task, function(data){
                console.log("TASK UPDATED", task);
            }, function(data){
                console.error("ERROR WHILE UPDATING TASK", task);
            });
        }
	});

});