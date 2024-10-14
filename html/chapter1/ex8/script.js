function union(set1, set2) {
    return new Set([...set1, ...set2]);
}

function intersection(set1, set2) {
    return new Set([...set1].filter(x => set2.has(x)));
}

function difference(set1, set2) {
    return new Set([...set1].filter(x => !set2.has(x)));
}

function getSet(){
    const inputArrayA = document.getElementById('setA').value.split(',').map(Number);
    const inputArrayB = document.getElementById('setB').value.split(',').map(Number);
    const setA = new Set(inputArrayA);
    const setB = new Set(inputArrayB);

    const unionSet = union(setA, setB);
    const intersectionSet = intersection(setA, setB);
    const differenceSetA_B = difference(setA, setB);
    const differenceSetB_A = difference(setB, setA);

    document.getElementById('result').innerHTML = `
        Множество A: ${Array.from(setA)}<br>
        Множество B: ${Array.from(setB)}<br>
        Объединение: ${Array.from(unionSet)}<br>
        Пересечение: ${Array.from(intersectionSet)}<br>
        Разность A-B: ${Array.from(differenceSetA_B)}<br>
        Разность B-A: ${Array.from(differenceSetB_A)}
    `;
}