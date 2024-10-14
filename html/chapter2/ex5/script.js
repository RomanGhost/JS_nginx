function delay(f, ms) {
    return function(...args) {
        setTimeout(() => {
            f.apply(this, args);
        }, ms);
    };
}

function f(x) {
    alert(x);
}

const f1000 = delay(f, 1000);
const f1500 = delay(f, 1500);

function testDelay() {
    f1000("Тест через 1000 мс");
    f1500("Тест через 1500 мс");
}
