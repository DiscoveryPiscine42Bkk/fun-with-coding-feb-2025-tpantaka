const ftList = document.getElementById('ft_list');
const newTaskBtn = document.getElementById('new-task-btn');

// Load tasks from cookie
window.addEventListener('load', () => {
  const tasks = getCookie('tasks');
  if (tasks) {
    tasks.split(',').forEach(task => {
      createTask(task);
    });
  }
});

newTaskBtn.addEventListener('click', () => {
  const task = prompt('Enter new task:');
  if (task) {
    createTask(task);
    saveTasksToCookie();
  }
});

function createTask(task) {
  const newTask = document.createElement('div');
  newTask.textContent = task;
  newTask.addEventListener('click', () => {
    if (confirm('Are you sure you want to delete this task?')) {
      newTask.remove();
      saveTasksToCookie();
    }
  });
  ftList.insertBefore(newTask, ftList.firstChild);
}

function saveTasksToCookie() {
  const tasks = Array.from(ftList.children).map(task => task.textContent);
  setCookie('tasks', tasks.join(','));
}

function setCookie(name, value) {
  document.cookie = `${name}=${value};path=/`;
}

function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
}