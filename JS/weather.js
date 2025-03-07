const API_KEY = "75d681d1ed582a1efefae89b164f6502";
const weather = document.querySelector("#weather span:first-child");

function onGeoOk(position){
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url).then(response => response.json()).then(data => {
        const city = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        weather.innerText = `${data.weather[0].main} / ${data.main.temp}℃`;
    });
}

function onGeoError(){
    weather.innerText = "";
    alert("Can't find you. No weather for you.")
}

if(localStorage.getItem("username") === null){
    weather.innerText = "Required log in";
} else{
    navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}