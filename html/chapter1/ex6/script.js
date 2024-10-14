function calculateRange() {
    const arrayInput = document.getElementById('array').value.split(',').map(Number);
    const max = arrayInput.reduce((acc, curr) => Math.max(acc, curr), -Infinity);
    const min = arrayInput.reduce((acc, curr) => Math.min(acc, curr), Infinity);
    const range = max - min;

    document.getElementById('result').innerText = `Размах массива: ${range}`;
}
