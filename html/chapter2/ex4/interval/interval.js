function isPrime(num) {
    if (num < 2) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function printNumbersWithInterval(from, to) {
    let current = from;
    const resultDiv = document.getElementById('result');
    resultDiv.innerHTML = ""; // Очистка

    const intervalId = setInterval(() => {
        if (current > to) {
            clearInterval(intervalId); // Остановить интервал
            return;
        }
        if (isPrime(current)) {
            resultDiv.innerHTML += current + "<br>";
            console.log(current);
        }
        current++;
    }, 2000);
}

function startPrinting() {
    const from = parseInt(document.getElementById('from').value, 10);
    const to = parseInt(document.getElementById('to').value, 10);
    printNumbersWithInterval(from, to);
}
