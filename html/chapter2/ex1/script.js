const countries = {
    'Россия': ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Самара'],
    'США': ['Вашингтон', 'Нью-Йорк', 'Лос-Анджелес'],
    'Германия': ['Берлин', 'Мюнхен', 'Гамбург'],
};

function findCountry() {
    const city = document.getElementById('city').value;
    let foundCountry = '';

    for (let country in countries) {
        if (countries[country].includes(city)) {
            foundCountry = country;
            break;
        }
    }

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = foundCountry ? `Город ${city} находится в стране ${foundCountry}.` : `Город ${city} не найден в базе данных.`;
}
