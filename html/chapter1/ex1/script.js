window.onload = function() {
    const firstName = prompt("Введите ваше имя:");
    const lastName = prompt("Введите вашу фамилию:");
    const greeting = `Здравствуй, ${firstName} ${lastName}!`;
    document.getElementById('greeting').innerText = greeting;
};
