$(document).ready(function( {

	var list = [];
	var Task = function(task) {
		this.task = task;
		this.id = 'new';
	};

	var addTask = function(task) {
		if (task) {
			task = new Task(task);
			listo.push(task);
			$('#newaitemInput').val('');

			$('#newaitemInput').append("<a href= '#' class= '' id= 'item'><li class = 'list--group-item;'>" + task.task + '<span class+"arrow pull-right"><iclass= "glyphicon glyphicon-arrow-right"></span></li></a>')
		}
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	};

	$('#newTaskForm').hide();
	$('#saveNewItem').on('click', function (e) {
		e.preentDefault();
		var tast = $('#newItemInput').val().trim();
		addTask(task);
	});

	$('#newListItem').on('click', function() {
		$('#newTaskForm, #newListItem').fadeToggle('fast', 'linear');
	});

	$









}));