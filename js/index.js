const deleteButtonText = 'delete todo';
const editButtonText   = 'edit todo';

function renderHeader() {
    const input = document.createElement('input');
    input.setAttribute('type', 'text');

    document.body.appendChild(input);

    const button            = document.createElement('button');
    button.innerHTML        = 'add todo';
    button.style.marginLeft = '50px';

    input.addEventListener('keyup', (e) => {
        button.disabled = !e.target.value.trim().length > 3;
    });

    button.addEventListener('click', () => {
        addTodo(input.value);
        input.value     = '';
        button.disabled = true;
    });
    button.disabled = true;

    document.body.appendChild(button);
}

function renderButtons() {
    const container = document.createElement('div');

    const deleteButton          = document.createElement('button');
    const editButton            = document.createElement('button');
    editButton.style.marginLeft = '10px';

    deleteButton.innerHTML = deleteButtonText;
    editButton.innerHTML   = editButtonText;

    container.appendChild(deleteButton);
    container.appendChild(editButton);

    return container;
}

function todoItem(text) {
    const container = document.createElement('div');
    const todo      = document.createElement('span');

    container.style.display        = 'flex';
    container.style.width          = '280px';
    container.style.justifyContent = 'space-between';
    container.style.marginTop      = '10px';

    container.appendChild(todo);
    container.appendChild(renderButtons());

    todo.innerHTML = text;

    return container;
}

function createContainer() {
    const container = document.createElement('div');
    container.id    = 'todo-container';

    return container;
}

function addTodo(text) {
    const todoContainer = document.getElementById('todo-container') || createContainer();

    todoContainer.addEventListener('click', ({ target }) => {
        const isButton = target.tagName === 'BUTTON';
        const isInput  = target.parentNode.previousSibling.tagName === 'INPUT';

        if (isButton && target.innerHTML === deleteButtonText) {
            todoContainer.removeChild(target.parentNode.parentNode);
        }

        if (isButton && target.innerHTML === editButtonText && isInput) {
            const container = target.parentNode.parentNode;
            container.removeChild(target.parentNode.previousSibling);

            const input = document.createElement('input');
            input.setAttribute('type', 'text');

            container.insertBefore(input, target.parentNode);
        }

        // if (isButton && target.innerHTML === editButtonText && !isInput) {
        // }
    });

    todoContainer.appendChild(todoItem(text));
    document.body.appendChild(todoContainer);
    document.body.style.minWidth = '250px';
}

renderHeader();
