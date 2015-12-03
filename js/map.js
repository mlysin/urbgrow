var map,
    userloc = {"lat": 38.5725, "lon": -121.4680, "acc": 0};

function GetLocation(location) {
    "use strict";
    // Get the location from the web browser if user approves
    userloc = {"lat": location.coords.latitude, "lon": location.coords.longitude, "acc": location.coords.accuracy};
    // alert(loc);
}


$(document).ready(function () {
    "use strict";
    // Get the location from the web browser if user approves
    navigator.geolocation.getCurrentPosition(GetLocation);
    
    // Initialize the map
    //map = L.map('map').setView([38.5725, -121.4680], 13);
    map = L.map('map').setView([userloc.lat, userloc.lon], 13);
    

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([38.5725, -121.4680]).addTo(map)
        .bindPopup('An Urban Farm<br> Grow!')
        .openPopup();
    
});