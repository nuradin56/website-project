// Replace with your OpenWeatherMap API key
const API_KEY = "c310c2d0a61c9322d0de5f9abbdac16a";

// Weather and time elements
const temperatureElement = document.querySelector(".temperature");
const timeElement = document.querySelector(".time");

// Get weather data for Somalia
async function getWeatherData() {
    const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=Mogadishu,SO&appid=${API_KEY}&units=metric`
    );

    if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
    }

    const weatherData = await response.json();
    return weatherData;
}

// Display weather data
getWeatherData()
    .then((weatherData) => {
        const temperature = weatherData.main.temp.toFixed(1);
        temperatureElement.textContent = `${temperature}°C`;
    })
    .catch((error) => {
        console.error(error);
    });

// Update time every second
function updateTime() {
    const now = new Date();
    const localOffset = now.getTimezoneOffset() * 60 * 1000;
    const somaliaOffset = 3 * 60 * 60 * 1000; // Somalia is GMT+3
    const somaliaTime = new Date(now.getTime() + localOffset + somaliaOffset);

    const hours = String(somaliaTime.getHours()).padStart(2, "0");
    const minutes = String(somaliaTime.getMinutes()).padStart(2, "0");
    const seconds = String(somaliaTime.getSeconds()).padStart(2, "0");

    timeElement.textContent = `${hours}:${minutes}:${seconds}`;
}

updateTime();
setInterval(updateTime, 1000);
