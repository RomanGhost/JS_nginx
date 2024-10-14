function collectMessages() {
    const count = document.getElementById('count').value;
    const messages = [];

    for (let i = 0; i < count; i++) {
        const date = prompt("Введите дату сообщения (в формате ГГГГ-ММ-ДД):");
        const sender = prompt("Введите отправителя:");
        messages.push({ date: new Date(date), from: sender });
    }

    sortMessages(messages);
}

function sortMessages(messages) {
    messages.sort((a, b) => {
        if (a.date < b.date) return -1;
        if (a.date > b.date) return 1;
        return a.from.localeCompare(b.from);
    });

    const sortedDiv = document.getElementById('sortedMessages');
    sortedDiv.innerHTML = messages.map(msg => `${msg.date.toISOString().slice(0, 10)} - ${msg.from}`).join('<br>');
}
