const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const apikey = "2694d74048c03badb32b60d7f626be02"
const searchbox = document.querySelector(".search_name input")
const searchBtn = document.querySelector('.search_name button')
const weatherIcon = document.querySelector('.weather-icon')

async function changeWeather(city_name) {
    try {
        const response = await fetch(`${apiurl}${city_name}&appid=${apikey}`);
        if (response.status == 404) {
            document.querySelector('.error').style.display = 'block';
            document.querySelector('.weather').style.display = 'none';
        }
        else {

            const data = await response.json();
            console.log(data)
            document.querySelector('.city').innerText = data.name;
            document.querySelector('.temp').innerText = Math.round(data.main.temp) + "°c";
            document.querySelector('.humidity').innerText = data.main.humidity + "%";
            document.querySelector('.wind').innerText = data.wind.speed + "km/h";
            document.querySelector('.visible').innerText = (data.visibility) / 1000 + "km";
            if (data.weather[0].main == "Sun") {
                weatherIcon.src = 'https://th.bing.com/th/id/OIP.kblQEo5yU-lQKm2VmrxO6AHaHa?pid=ImgDet&rs=1'
            }
            else if (data.weather[0].main == "Rain") {
                weatherIcon.src = 'https://webstockreview.net/images/clipart-rain-summer-10.png'
            }
            else if (data.weather[0].main == "Clouds") {
                weatherIcon.src = 'https://cdn2.iconfinder.com/data/icons/weather-flat-14/64/weather03-512.png'
            }
            else if (data.weather[0].main == "Mist") {
                weatherIcon.src = 'images/mist.webp'
            }
            else if (data.weather[0].main == "Clear") {
                weatherIcon.src = 'https://th.bing.com/th/id/R.33d870ad3c516406168aa9f1a358b480?rik=hNYgSqsrZk0Klw&riu=http%3a%2f%2fjawjahboy.com%2fGraphics%2ficons%2fweather%2fwunderground%2fArtboard_31.png&ehk=zn8mt4EOB%2fpy9jBGXLxVbAI0M6y%2fBOlXe%2bZLZ5tCORI%3d&risl=&pid=ImgRaw&r=0'
            }
            else if (data.weather[0].main == "Drizzle") {
                weatherIcon.src = 'images/drizzle.png'
            }
            document.querySelector('.weather').style.display = 'block';
            document.querySelector('.error').style.display = 'none';


        }

    } catch (error) {
        console.error('Error:', error);
    }
}

searchBtn.addEventListener("click", () => {
    changeWeather(searchbox.value);
})
