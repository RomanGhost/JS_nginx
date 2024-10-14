function sum(a) {
    return function(b) {
        return a + b;
    };
}

function calculateSum() {
    const a = Number(document.getElementById('a').value);
    const b = Number(document.getElementById('b').value);
    const result = sum(a)(b);
    document.getElementById('result').innerText = `Сумма: ${result}`;
}
