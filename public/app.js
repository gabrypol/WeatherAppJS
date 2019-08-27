// Init storage
const storage = new Storage();
// Get stored location data
const weatherLocation = storage.getLocationData();
// Init weather object
const weather = new Weather(weatherLocation.lat, weatherLocation.lon);
// Init UI
const ui = new UI();

// Get weather on DOM load
document.addEventListener('DOMContentLoaded', getWeather);

const input = document.querySelector('#location');
const searchBox = new google.maps.places.SearchBox(input);
const latLon = searchBox.addListener('places_changed', () => {
    const places = searchBox.getPlaces()[0];
    if (places.length == 0) return;
    const latitude = places.geometry.location.lat();
    const longitude = places.geometry.location.lng();
    document.getElementById('w-change-btn').addEventListener('click', (e) => {
      const lat = latitude;
      const lon = longitude;
    
      // Change location
      weather.changeLocation(lat, lon);
    
      // Set location in LS
      storage.setLocationData(lat, lon);
    
      // Get and display weather
      getWeather();
    
      // Close modal
      $('#locModal').modal('hide');
    
      e.preventDefault();
    });
});

function getWeather(){
  weather.getWeather()
    .then(results => {
      ui.paint(results);
    })
    .catch(err => console.log(err));
}
