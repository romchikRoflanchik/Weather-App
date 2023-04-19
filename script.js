const text_area = document.querySelector('.text_area');
const btn = document.querySelector('.serch_btn');
const img = document.querySelector('.weather_img img');
const temp = document.querySelector('.temp');
const city = document.querySelector('.city');
const humidity = document.querySelector('.top');
const wind = document.querySelector('.right_top')
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?q=lviv&appid=6dfdfe1fa9ff9493053fe9bc88850e78&units=metric';
const apiKey = '6dfdfe1fa9ff9493053fe9bc88850e78';
const appBody = document.querySelector('.app_body')


async function getData(cityValue) {
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityValue}&appid=${apiKey}&units=metric`);
    let data = await response.json()
    console.log(data);
    temp.innerHTML = data.main.temp + '°C';
    city.innerHTML = data.name;
    humidity.innerHTML = data.main.humidity + '%';
    wind.innerHTML = data.wind.speed + 'км/год';
    document.querySelector('.info_box').style.display = 'block';
    if (data.weather[0].main == 'Clouds') {
        img.src = 'images/clouds.png';
        appBody.style.backgroundImage = 'url(./images/vQJxxY.gif)'
    } else if (data.weather[0].main == 'Drizzle') {
        img.src = 'images/drizzle.png';
        appBody.style.backgroundImage = 'url(./images/e1b4a60876593bc5c849b2a8e9029bec.gif)'
    } else if (data.weather[0].main == 'Mist') {
        img.src = 'images/mist.png';
        appBody.style.backgroundImage = 'url(./images/mist.gif)'
    } else if (data.weather[0].main == 'Rain') {
        img.src = 'images/rain.png';
        appBody.style.backgroundImage = 'url(./images/rain.gif)'
    } else if (data.weather[0].main == 'Clear') {
        img.src = 'images/clear.png';
        appBody.style.backgroundImage = 'url(./images/giphy.gif)'

    } else if (data.weather[0].main == 'Snow') {
        img.src = 'images/snow.png';
        appBody.style.backgroundImage = 'images/snow-white.gif'
    }

}



btn.addEventListener('click', function () {
    getData(text_area.value)
})