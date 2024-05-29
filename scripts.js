// Firebase configuration object
import firebase from 'firebase/app';
import 'firebase/database';
const firebaseConfig = {
    apiKey: "AIzaSyBgIXuT834s5WjVG9dELnfzF3YzfzxghRM",
    authDomain: "daily-routine-76c7e.firebaseapp.com",
    databaseURL: "https://daily-routine-76c7e-default-rtdb.europe-west1.firebasedatabase.app",
    projectId: "daily-routine-76c7e",
    storageBucket: "daily-routine-76c7e.appspot.com",
    messagingSenderId: "464979044421",
    appId: "1:464979044421:web:59840434e323a55acb9b2c"
  };
firebase.initializeApp(firebaseConfig);

// Access the Firebase Realtime Database
const database = firebase.database();

// Perform database operations, such as reading or writing data
// Example: Reading data
database.ref('path/to/data').once('value')
  .then((snapshot) => {
    const data = snapshot.val();
    console.log('Data:', data);
  })
  .catch((error) => {
    console.error('Error:', error);
  });
ocument.addEventListener('DOMContentLoaded', () => {
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

    // Update the task status in the Firebase Realtime Database
    db.ref(`routines/${date}/${taskIndex}`).set(status);
}
