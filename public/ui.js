class UI {
    constructor() {
      this.location = document.getElementById('w-location');
      this.desc = document.getElementById('w-desc');
      this.temperature = document.getElementById('w-temperature');
      this.icon = document.getElementById('w-icon');

      this.cloudiness = document.getElementById('w-cloudiness');
      this.humidity = document.getElementById('w-humidity');
      this.windSpeed = document.getElementById('w-wind-speed');
      this.windDirection = document.getElementById('w-wind-direction');
    }
  
    paint(weather) {
      this.location.textContent = weather.name;
      this.desc.textContent = weather.weather[0].main;
      this.temperature.textContent = `${weather.main.temp} °C`;
      this.icon.setAttribute('src', `https://openweathermap.org/img/wn/${weather.weather[0].icon}.png`);

      this.cloudiness.textContent = `Cloudiness: ${weather.clouds.all}%`;
      this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}%`;
      this.windSpeed.textContent = `Wind Speed: ${weather.wind.speed} m/s`;this.windDirection.textContent = `Wind Direction: ${weather.wind.deg} degrees`;
    }
  }