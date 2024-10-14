function invokeAfterDelay(func, ms) {
    return new Promise((resolve) => {
        setTimeout(() => {
            const result = func();
            resolve(result);
        }, ms);
    });
}

function randomNumber() {
    return Math.random();
}

const results = [];

function print_result(num){
    results.push(`Случайное число: ${num}`);
    document.getElementById('result').innerHTML = results.join('<br>');
}

async function invokeFunction() {
    const result = await invokeAfterDelay(randomNumber, 1000);
    console.log(result);

    print_result(result);
}
