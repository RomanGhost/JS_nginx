function findIndices() {
    const arrayInput = document.getElementById('array').value.split(',').map(Number);
    const valueToFind = Number(document.getElementById('value').value);

    const indices = arrayInput.map((element, index) => element === valueToFind ? index : -1).filter(index => index !== -1);

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = indices.length > 0 ? `Индексы значения ${valueToFind}: ${indices.join(', ')}` : `Значение ${valueToFind} не найдено.`;
}
