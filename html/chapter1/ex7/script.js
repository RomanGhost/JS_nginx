function SetWrapper(set) {
    this.set = set;

    this.map = function(callback) {
        const newSet = new Set();
        this.set.forEach((value) => {
            newSet.add(callback(value));
        });
        return newSet;
    };

    this.filter = function(callback) {
        const newSet = new Set();
        this.set.forEach((value) => {
            if (callback(value)) {
                newSet.add(value);
            }
        });
        return newSet;
    };

    this.forEach = function(callback) {
        this.set.forEach(callback);
    };
}

let mySet = new Set(); // Инициализируем mySet
const setWrapper = new SetWrapper(mySet);

function getSet(){
    const inputArray = document.getElementById('set').value.split(',').map(Number);
    mySet = new Set(inputArray); // Создаем новое множество
    const updatedSetWrapper = new SetWrapper(mySet); // Создаем новый экземпляр SetWrapper

    const mappedSet = updatedSetWrapper.map(value => value * 2);
    const filteredSet = updatedSetWrapper.filter(value => value > 2);
    const forEachResult = [];

    updatedSetWrapper.forEach(value => forEachResult.push(value));

    document.getElementById('result').innerHTML = `
        Исходное множество: ${Array.from(mySet)}<br>
        Применение map: ${Array.from(mappedSet)}<br>
        Применение filter: ${Array.from(filteredSet)}<br>
        Применение forEach: ${forEachResult}
    `;
}
