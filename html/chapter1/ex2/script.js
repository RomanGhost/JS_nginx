function getDaysInMonth() {
    const monthNames = {
        'январь': 31,
        'февраль': 28,
        'март': 31,
        'апрель': 30,
        'май': 31,
        'июнь': 30,
        'июль': 31,
        'август': 31,
        'сентябрь': 30,
        'октябрь': 31,
        'ноябрь': 30,
        'декабрь': 31
    };

    const monthInput = document.getElementById('month').value.toLowerCase();
    const days = monthNames[monthInput];
    const resultDiv = document.getElementById('result');

    if (days) {
        resultDiv.innerText = `В месяце ${monthInput.charAt(0).toUpperCase() + monthInput.slice(1)} ${days} дней.`;
    } else {
        resultDiv.innerText = "Некорректное название месяца!";
    }
}
