var map;

$(document).ready(function () {

    map = L.map('map').setView([38.5725, -121.4680], 13);

    L.tileLayer('http://{s}.tile.osm.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    L.marker([38.5725, -121.4680]).addTo(map)
        .bindPopup('An Urban Farm<br> Grow!')
        .openPopup();
    
});