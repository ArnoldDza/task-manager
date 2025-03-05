function addTask() {
    let task = document.getElementById('task').value;
    if (task.trim() === '') {
        alert('Please enter a task');
        return;
    }
    let li = document.createElement('li');
    li.innerText = task;
    document.getElementById('taskList').appendChild(li);
    document.getElementById('task').value = ''; // Clear input
}
