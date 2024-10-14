class FormatError extends SyntaxError {
    constructor(message) {
        super(message);
        this.name = 'FormatError';
    }
}

function createError() {
    const err = new FormatError("ошибка форматирования");
    document.getElementById('result').innerHTML = `
        ${err.message} <br>
        ${err.name} <br>
        ${err.stack}
    `;
}
