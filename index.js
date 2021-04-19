const WEEK = ['domingo', 'lunes', 'martes', 'miercoles', 'jueves', 'viernes', 'sábado'];
const MONTH = [
  'enero',
  'febrero',
  'marzo',
  'abril',
  'mayo',
  'junio',
  'julio',
  'agosto',
  'septiembre',
  'octubre',
  'noviembre',
  'diciembre',
];
const TODAY = new Date();
const CURRENT_DATE = document.getElementById('date');
CURRENT_DATE.textContent = `Hoy es ${WEEK[TODAY.getDay()]} ${TODAY.getDate()} de ${
  MONTH[TODAY.getMonth()]
} de ${TODAY.getFullYear()}`;

function addNewTask() {
  const listTask = document.getElementById('list_task');
  const newTask = document.getElementById('task').value;
  let listItems = document.createElement('li');
  let deleteBtn = document.createElement('button');
  let collectionTask = [];

  if (newTask === '') {
    alert('Ingresa una nueva tarea');
  } else {
    collectionTask.push(newTask);
    listItems.className = 'book-body__list__items';
    deleteBtn.className = 'delete-btn';
    deleteBtn.textContent = '\u00D7';

    let nodes = collectionTask.map((task) => {
      listItems.textContent = task;
      listItems.append(deleteBtn);
      return listItems;
    });

    listItems.addEventListener('click', () => listItems.classList.toggle('completed'));
    deleteBtn.addEventListener('click', () => listItems.remove());
    listTask.append(...nodes);
  }
  document.getElementById('task').value = '';
}
const ADD_TASK = document.getElementById('btn_add_task');
ADD_TASK.addEventListener('click', addNewTask);
