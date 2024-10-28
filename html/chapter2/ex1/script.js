const countries = {
    'Россия': ['Москва', 'Санкт-Петербург', 'Новосибирск', 'Самара'],
    'США': ['Вашингтон', 'Нью-Йорк', 'Лос-Анджелес'],
    'Германия': ['Берлин', 'Мюнхен', 'Гамбург'],
};

city_country = {}
for (let country in countries){
    for (let city in countries[country] ){
        city_country[city] = country;
    }
}

function findCountry() {
    const city = document.getElementById('city').value;
    let foundCountry = city_country[city];

    const resultDiv = document.getElementById('result');
    resultDiv.innerText = foundCountry ? `Город ${city} находится в стране ${foundCountry}.` : `Город ${city} не найден в базе данных.`;
}
