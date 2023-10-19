
// Event listener for page load
window.addEventListener('load', showTasks);

// DOM elements
const addBtn = document.querySelector('.addBtn');
const taskList = document.querySelector('.tasklist');
const input = document.querySelector('input');
let tasks = [];

// Check if there are tasks stored in local storage
if (localStorage.getItem('todo')) {
    tasks = JSON.parse(localStorage.getItem('todo'));
    updateTasksView();
}

// Add event listeners
addBtn.addEventListener('click', addTask);
taskList.addEventListener('click', handleTaskClick);


// ---------------------------------------------------


// Function to add a new task
function addTask() {
    const text = input.value.trim();
    if (text) {
        tasks.push({ text, done: false });
        saveTasks();
        input.value = "";
        updateTasksView();
    }
}

// Function to handle task click events
function handleTaskClick(e) {
    if (e.target.classList.contains('fa-trash')) {
        const taskIndex = Array.from(taskList.children).indexOf(e.target.parentElement.parentElement);
        tasks.splice(taskIndex, 1);
        saveTasks();
        updateTasksView();
    } else if (e.target.nodeName === 'LI') {
        const taskIndex = Array.from(taskList.children).indexOf(e.target);
        tasks[taskIndex].done = !tasks[taskIndex].done;
        saveTasks();
        updateTasksView();
    }
}

// Function to save tasks to local storage
function saveTasks() {
    localStorage.setItem('todo', JSON.stringify(tasks));
}

// Function to display tasks on the page
function showTasks() {
    updateTasksView();
}

// Function to update the tasks view
function updateTasksView() {
    taskList.innerHTML = '';
    tasks.forEach((task, index) => {
        const taskElement = document.createElement('li');
        taskElement.textContent = task.text;

        if (task.done) {
            taskElement.classList.add('done', 'checked');
        }
        taskElement.innerHTML += '<span class="closeBtn"><i class="fa-solid fa-trash"></i></span>';
        taskList.appendChild(taskElement);
    });
}
