const apikey = "2b80dff3409567bb9aaff1c4720d942a"
const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchbox = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button");

async function checkweather(city) {
    // console.log(city);
    const weathericon = document.querySelector(".weather-icon");
    const response = await fetch(apiurl + city+ `&appid=${apikey}`);
    // console.log(response);
    var data = await response.json();
    console.log(data);

    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
    document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
    document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    document.querySelector(".min").innerHTML = Math.round(data.main.temp_min) + "°C";
    document.querySelector(".max").innerHTML = Math.round(data.main.temp_max) + "°C";


    if(data.weather[0].main == "Clouds"){
        weathericon.src = 'assets/partly-cloudy.png';
    }
    else if(data.weather[0].main == "Clear"){
        weathericon.src = "assets/sun.png";
    }
    else if(data.weather[0].main == "Rain"){
        weathericon.src = "assets/heavy-rain.png";
    }
    else if(data.weather[0].main == "Drizzle"){
        weathericon.src = "assets/cloudy.png";
    }
    else if(data.weather[0].main == "Mist"){
        weathericon.src = "assets/fog.png";
    }
    else if(data.weather[0].main == "Snow"){
        weathericon.src = "assets/snow.png";
    };
    document.querySelector(".weather").style.display = "block";
    document.querySelector(".error").style.display = "none";
}

searchbtn.addEventListener("click", () => {
    checkweather(searchbox.value.trim());
})

searchbox.addEventListener('keydown',(event)=>{
    if(event.key === 'Enter'){
        checkweather(searchbox.value.trim());
    }
})
