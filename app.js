const form = document.getElementById('todo-form');
const input = document.getElementById('todo-input');
const list = document.getElementById('todo-list');

function createTodoItem(text) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.textContent = text;

  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'delete-btn';
  button.textContent = '삭제';
  button.addEventListener('click', () => {
    li.remove();
  });

  li.appendChild(span);
  li.appendChild(button);
  return li;
}

form.addEventListener('submit', (event) => {
  event.preventDefault();

  const text = input.value.trim();
  if (!text) {
    return;
  }

  list.appendChild(createTodoItem(text));
  input.value = '';
  input.focus();
});
