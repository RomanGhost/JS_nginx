function isPrime(num) {
    if (num <= 1) return false;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) return false;
    }
    return true;
}

function recursiveTimeout() {
    if (current > to) return;
    if (isPrime(current)) {
        console.log(current);
    }
    current++;
    setTimeout(recursiveTimeout, 2000);
}

function printNumbers(from, to) {

    let current = from;
    const intervalId = setInterval(() => {
        if (current > to) {
            clearInterval(intervalId); // Очистка setInterval
        } else if (isPrime(current)) {
            console.log(current);
        }
        current++;
    }, 2000);

    recursiveTimeout();
}

printNumbers(1, 20);
