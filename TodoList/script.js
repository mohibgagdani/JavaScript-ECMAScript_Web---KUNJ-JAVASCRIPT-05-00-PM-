document.getElementById('add-btn').addEventListener('click', function() {
    const input = document.getElementById('todo-input');
    const todoText = input.value.trim();
    if (todoText !== '') {
        addTodoItem(todoText);
        input.value = '';
        showSuccessMessage();
    }
});

function addTodoItem(text) {
    const todoList = document.getElementById('todo-list');
    const todoItem = document.createElement('div');
    todoItem.className = 'bg-gray-100 p-2 rounded-lg flex items-center justify-between mb-2';
    todoItem.innerHTML = `
        <span class="text-gray-700">${text}</span>
        <div class="flex items-center">
            <button class="edit-btn text-gray-600 mr-2">
                <i class="fas fa-pen"></i>
            </button>
            <button class="delete-btn text-gray-600">
                <i class="fas fa-trash"></i>
            </button>
        </div>
    `;
    todoList.appendChild(todoItem);

    todoItem.querySelector('.delete-btn').addEventListener('click', function() {
        todoItem.remove();
    });

    todoItem.querySelector('.edit-btn').addEventListener('click', function() {
        const newText = prompt('Edit your item:', text);
        if (newText !== null && newText.trim() !== '') {
            todoItem.querySelector('span').textContent = newText.trim();
            showSuccessMessage();
        }
    });
}

function showSuccessMessage() {
    const message = document.getElementById('success-message');
    message.classList.remove('hidden');
    setTimeout(() => {
        message.classList.add('hidden');
    }, 2000);
}