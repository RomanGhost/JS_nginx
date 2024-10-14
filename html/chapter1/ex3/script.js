const test = "Это строка, которая формируется средствами JavaScript.";

const results = [];
results.push(`Исходная строка: "${test}"`);
results.push(`Подстрока с индексами 12-18: "${test.substring(12, 19)}"`);
results.push(`Подстрока с индексами 42-46: "${test.substring(42, 47)}"`);
results.push(`Первое вхождение буквы "а" в строке начинается с индекса ${test.indexOf('а')}`);
results.push(`Последнее вхождение буквы "а" в строке начинается с индекса ${test.lastIndexOf('а')}`);
results.push(`Первое вхождение "ми" в строке начинается с индекса ${test.indexOf('ми')}`);
results.push(`Первое вхождение "ст" в строке начинается с индекса ${test.indexOf('ст')}`);

document.getElementById('result').innerHTML = results.join('<br>');
