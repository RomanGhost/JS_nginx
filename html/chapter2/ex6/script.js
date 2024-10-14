class FairyTaleCharacter {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    introduce() {
        return `Я персонаж сказки. Меня зовут ${this.name}. Мне ${this.age} лет.`;
    }
}

class Dragon extends FairyTaleCharacter {
    constructor(name, age, fireBreath) {
        super(name, age);
        this.fireBreath = fireBreath;
    }

    introduce() {
        return `${super.introduce()} Я дракон, и я ${this.fireBreath ? 'умею' : 'не умею'} дышать огнем.`;
    }
}

const character = new FairyTaleCharacter("Заяц", 5);
const dragon = new Dragon("Дракон", 100, true);

document.getElementById('result').innerHTML = `
    ${character.introduce()}<br>
    ${dragon.introduce()}
`;
