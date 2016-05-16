var APIClient = {

	getTasks: function(successCallback, errorCallback) {
		$.ajax({
			url: "api/mytasks/",
			success: successCallback,
			error: errorCallback
		});
	},

	createTask: function(task, successCallback, errorCallback) {
		$.ajax({
			type: "post",
			url: "/api/mytasks/",
			contentType: 'application/json',
			data: JSON.stringify(task),
			success: successCallback,
			error: errorCallback
		});
	},

	deleteTask: function(task, successCallback, errorCallback) {
		$.ajax({
			type: "delete",
			url: "/api/mytasks/" + task.id,
			contentType: 'application/json',
			success: successCallback,
			error: errorCallback
		});
	},

	updateTask: function(task, successCallback, errorCallback) {
		$.ajax({
			type: "put",
			url: "/api/mytasks/" + task.id,
			contentType: 'application/json',
			data: JSON.stringify(task),
			success: successCallback,
			error: errorCallback
		});
	}

};



			