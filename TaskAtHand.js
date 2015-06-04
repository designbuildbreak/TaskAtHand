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
			
			function addTaskElement(taskName) //This function will add the user Input to the <span class="task-name"></span> element
			{
				
				var $task = $("#task-template.task").clone();
				$("span.task-name").append("<p>Hello</p>");
				//$("span.task-name").append($task.text);
				
				//$("#task-list").append($task);				
			};
			
			/* function addTaskElement(taskName)
			{
				var $task = $("<li></li>");
				var $delete = $("<button class='delete' style='display:inline;'>Delete</button>");
				var $moveUp = $("<button class='move-up' style='display:inline;'>Move Up</button>");
				var $moveDown = $("<button class='move-down' style='display:inline;'>Move Down</button>");
				$("#task-list").append(($task.text(taskName + " ")).append($delete).append($moveUp).append($moveDown));
				
				$delete.click(function()
				{
					$task.remove();
				});
				$moveUp.click(function()
				{
					$task.insertBefore($task.prev());
				});
				$moveDown.click(function()
				{
					$task.insertAfter($task.next());
				});
				
			}; */
		};
		
		
	};
	
});