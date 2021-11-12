const api = {
    key: 'c4e78c0be3af60c2a6ecb359ce869ef1',
    baseurl: 'https://api.openweathermap.org/data/2.5/'
}

const weather_search = document.querySelector('.search-box');
weather_search.addEventListener('keypress', setQuery);

function setQuery(event) {
    if (event.keyCode == 13) {
        res(weather_search.value);
        console.log(weather_search.value);
    }
}

function res (query) {
    fetch(`${api.baseurl}weather?q=${query}&units=imperial&APPID=${api.key}`)
        .then(weather => {
            return weather.json()
        }) .then(displayResults)

}

function displayResults (weather){
    console.log(weather);
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;
    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°f</span>`
    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;
    let highLow = document.querySelector('.current .high-low');
    highLow.innerText = `${Math.round(weather.main.temp_min)}°f / ${Math.round(weather.main.temp_max)}°f`;
    let hum = document.querySelector('.current .humidity');
    hum.innerText = `Humidity: ${weather.main.humidity}`;

}