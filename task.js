let taskScheduler = [];

// Function to add tasks with due dates to the scheduler
function addTask(title, description, dueDate) {
  let task = {
    title: title,
    description: description,
    dueDate: dueDate,
    completed: false
  };
  taskScheduler.push(task);
}

// Function to display tasks sorted by their due dates
function displayTasksByDueDate() {
  let sortedTasks = taskScheduler.slice().sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));

  sortedTasks.forEach(task => {
    console.log(`Title: ${task.title}`);
    console.log(`Description: ${task.description}`);
    console.log(`Due Date: ${task.dueDate}`);
    console.log(`Completed: ${task.completed}`);
    console.log("----------------------");
  });
}

// Function to update task details or mark tasks as completed
function updateTask(title, newTitle, newDescription, newDueDate, markAsCompleted) {
  let task = taskScheduler.find(task => task.title === title);
  if (task) {
    task.title = newTitle || task.title;
    task.description = newDescription || task.description;
    task.dueDate = newDueDate || task.dueDate;
    if (markAsCompleted) {
      task.completed = true;
    }
    console.log(`${title} updated successfully.`);
  } else {
    console.log("Task not found.");
  }
}

// Function to remove tasks from the scheduler
function removeTask(title) {
  taskScheduler = taskScheduler.filter(task => task.title !== title);
  console.log(`${title} removed from the scheduler.`);
}

// Test the functions
addTask("Project 4 Task", "Implement Task Scheduler", "2024-02-28");
addTask("Meeting", "Discuss new project ideas", "2024-03-05");
addTask("Call client", "Follow up on project status", "2024-02-25");

console.log("Tasks sorted by due date:");
displayTasksByDueDate();

updateTask("Project 4 Task", "Finish Task Scheduler", null, null, true);
removeTask("Meeting");

console.log("Updated tasks sorted by due date:");
displayTasksByDueDate();
