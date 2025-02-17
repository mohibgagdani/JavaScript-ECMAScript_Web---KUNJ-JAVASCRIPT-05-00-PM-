class Task {
    constructor(name, description, dueDate) {
        this.name = name;
        this.description = description;
        this.dueDate = dueDate;
        this.status = 'Pending';
    }

    markAsCompleted() {
        this.status = 'Completed';
    }
}

class TaskManager {
    constructor() {
        this.tasks = [];
    }

    addTask(name, description, dueDate) {
        const newTask = new Task(name, description, dueDate);
        this.tasks.push(newTask);
        this.renderTasks();
    }

    markTaskAsCompleted(index) {
        if (this.tasks[index]) {
            this.tasks[index].markAsCompleted();
            this.renderTasks();
        }
    }

    deleteTask(index) {
        if (this.tasks[index]) {
            this.tasks.splice(index, 1);
            this.renderTasks();
        }
    }

    renderTasks() {
        const taskList = document.getElementById('task-list');
        taskList.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskDiv = document.createElement('div');
            taskDiv.className = 'task';
            taskDiv.innerHTML = `
                <div>
                    <strong class="${task.status === 'Completed' ? 'completed' : ''}">${task.name}</strong>
                    <p>${task.description}</p>
                    <small>Due: ${task.dueDate}</small>
                </div>
                <div>
                    <button onclick="taskManager.markTaskAsCompleted(${index})">Complete</button>
                    <button onclick="taskManager.deleteTask(${index})">Delete</button>
                </div>
            `;
            taskList.appendChild(taskDiv);
        });
    }
}

const taskManager = new TaskManager();

document.getElementById('task-form').addEventListener('submit', function(event) {
    event.preventDefault();
    const taskName = document.getElementById('task-name').value;
    const taskDescription = document.getElementById('task-description').value;
    const taskDueDate = document.getElementById('task-due-date').value;

    taskManager.addTask(taskName, taskDescription, taskDueDate);
});
