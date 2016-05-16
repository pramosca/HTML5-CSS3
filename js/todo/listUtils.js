function reloadTasksList() {

	APIClient.getTasks(function(data) {
				console.log("TASK LIST!", data);
				var html = "";
				for (var i in data) {
					var task = data[i];
					html += '<li data-task-id="'+task.id+'" data-task-text="'+task.task+'">';
					html += '<input type="text" value="'+task.task+'">';
					html += ' <button class="deleteTask">x</button>';
					html += '</li>';
				}
				$("#tasks-list").html(html);
			},
			function(data) {
				console.log("TASK LIST ERROR!", data);
			}
		);
}