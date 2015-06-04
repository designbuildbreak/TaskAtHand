$(document).ready(function(){
	
	app = new TaskAtHandApp();
	app.start();
	
	function TaskAtHandApp()
	{
		var version = "1.0";
		
		this.start = function()
		{
			$("#new-task-name").keypress(function(e){
				if(e.which==13)//This is the enter key
				{
					addTask();
					return false; //return false so the .keypress function doesn't do any other stuff.
				}
			})
			.focus();
			
			$("#app>header").append(version);
			setStatus("ready");
		
			function addTask()
			{
				var taskName = $("#new-task-name").val();
				if(taskName)
				{
					addTaskElement(taskName);
					$("#new-task-name").val("").focus;//Resets the text field
				}
			};
			
			function setStatus(message)
			{
				$("#app>footer").text(message);
			};
			
			function addTaskElement(taskName)
			{
				var $task = $("<li></li>");
				var $delete = $("<button class='delete'>Delete</button>");
				//$("#task-list").append(($delete).append($task.text(taskName)));
				$("#task-list").append(($task.text(taskName + " ")).append($delete));
				
				$delete.click(function()
				{
					$task.remove();
				});
			};
		};
		
		
	};
	
});