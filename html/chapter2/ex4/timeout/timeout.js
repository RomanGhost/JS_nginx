function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printNumbersWithTimeout(from, to) {
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; // Очистить содержимое

    function printNext(current) {
        if (current > to) {
            return;
        }
        if (isPrime(current)) {
            resultDiv.innerHTML += current + "<br>"; // Вывод числа
            console.log(current);
        }
        setTimeout(() => printNext(current + 1), 2000);
    }

    printNext(from); // Начинаем с начального числа
}

function startPrinting() {
    const from = parseInt(document.getElementById('from').value, 10);
    const to = parseInt(document.getElementById('to').value, 10);
    printNumbersWithTimeout(from, to);
}
