class Storage {
    constructor() {
      this.lat;
      this.lon;
      // Set Zurich as default location
      this.defaultLat = 47.3769;
      this.defaultLon = 8.5417;
    }
  
    getLocationData() {
      if(localStorage.getItem('lat') === null) {
        this.lat = this.defaultLat;
      } else {
        this.lat = localStorage.getItem('lat');
      }
  
      if(localStorage.getItem('lon') === null) {
        this.lon = this.defaultLon;
      } else {
        this.lon = localStorage.getItem('lon');
      }
  
      return {
        lat: this.lat,
        lon: this.lon
      }
    }
  
    setLocationData(lat, lon) {
      localStorage.setItem('lat', lat);
      localStorage.setItem('lon', lon);
    }
}