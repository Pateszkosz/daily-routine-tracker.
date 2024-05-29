document.addEventListener('DOMContentLoaded', () => {
    const routineContainer = document.getElementById('routine-container');

    fetch('routines.json')
        .then(response => response.json())
        .then(routines => {
            routines.forEach(routine => {
                const routineElement = document.createElement('div');
                routineElement.className = 'routine';

                const dateElement = document.createElement('h2');
                dateElement.textContent = `Dátum: ${routine.date}`;
                routineElement.appendChild(dateElement);

                const tasksElement = document.createElement('ul');
                routine.tasks.forEach((task, taskIndex) => {
                    const taskElement = document.createElement('li');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = getTaskStatus(routine.date, taskIndex);
                    checkbox.addEventListener('change', () => {
                        setTaskStatus(routine.date, taskIndex, checkbox.checked);
                    });
                    taskElement.appendChild(checkbox);
                    taskElement.appendChild(document.createTextNode(task.text));
                    tasksElement.appendChild(taskElement);
                });
                routineElement.appendChild(tasksElement);

                const notesElement = document.createElement('p');
                notesElement.textContent = `Jegyzetek: ${routine.notes}`;
                routineElement.appendChild(notesElement);

                routineContainer.appendChild(routineElement);
            });
        })
        .catch(error => console.error('Error loading routines:', error));
});

function getTaskStatus(date, taskIndex) {
    const storedRoutine = JSON.parse(localStorage.getItem(date)) || {};
    return storedRoutine[taskIndex] || false;
}

function setTaskStatus(date, taskIndex, status) {
    const storedRoutine = JSON.parse(localStorage.getItem(date)) || {};
    storedRoutine[taskIndex] = status;
    localStorage.setItem(date, JSON.stringify(storedRoutine));
}
