let messages = [];
let currentUser = '';

function sendMessage() {
    const username = document.getElementById('username').value;
    const messageInput = document.getElementById('messageInput').value;

    // Проверка на пустые поля
    if (!username || !messageInput) {
        alert("Пожалуйста, заполните все поля!");
        return;
    }

    currentUser = username; // Сохраняем текущее имя пользователя

    // Добавление нового сообщения в массив
    messages.push({ text: messageInput, from: currentUser, read: false });
    document.getElementById('messageInput').value = ''; // Очищаем поле ввода сообщения
    displayMessages(); // Обновляем отображение сообщений
}

function displayMessages() {
    const messagesContainer = document.getElementById('messages');
    messagesContainer.innerHTML = ''; // Очистка контейнера перед отображением

    messages.forEach((message, index) => {
        const messageElement = document.createElement('div');
        messageElement.className = 'message';
        messageElement.innerText = `${message.from}: ${message.text}`;

        // Создание элемента для статуса
        const statusElement = document.createElement('span');
        statusElement.className = 'status';
        statusElement.innerText = message.read ? ' - статус: прочитано' : ' - статус: не прочитано';

        // Добавление статуса к сообщению
        messageElement.appendChild(statusElement);

        // Обработчик события наведения
        messageElement.addEventListener('mouseenter', () => {
            if (!message.read) {
                message.read = true;
                statusElement.innerText = ' - статус: прочитано'; // Обновление статуса
            }
        });

        // Обработчик события двойного нажатия
        messageElement.addEventListener('dblclick', () => {
            messages.splice(index, 1); // Удаление сообщения из массива
            displayMessages(); // Обновление отображения сообщений
        });

        messagesContainer.appendChild(messageElement);
    });
}

// Инициализация отображения сообщений
displayMessages();
