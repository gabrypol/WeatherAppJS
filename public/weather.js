class Weather {
    constructor(lat, lon) {
      this.apiKey = 'e048080f354e419986ec2af729a4666e';
      this.lat = lat;
      this.lon = lon;
    }
  
    // Fetch weather from API
    async getWeather() {
      const response = await fetch(`https://cors-anywhere.herokuapp.com/http://api.openweathermap.org/data/2.5/weather?lat=${this.lat}&lon=${this.lon}&units=metric&APPID=${this.apiKey}`);

      const responseData = await response.json();
      return responseData;
    }
  
    // Change weather location
    changeLocation(lat, lon) {
      this.lat = lat;
      this.lon = lon;
    }
  }