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
                routine.tasks.forEach(task => {
                    const taskElement = document.createElement('li');
                    const checkbox = document.createElement('input');
                    checkbox.type = 'checkbox';
                    checkbox.checked = task.done;
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