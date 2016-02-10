/* Map of GeoJSON data from MegaCities */

function createMap() {
  var map = L.map('map').setView([0, 0], 2);
  L.tileLayer('http://stamen-tiles-{s}.a.ssl.fastly.net/watercolor/{z}/{x}/{y}.{ext}', {
  	attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  	subdomains: 'abcd',
  	minZoom: 1,
  	maxZoom: 16,
  	ext: 'png'
  }).addTo(map);
  loadData(map);
}

function loadData(map) {
  $.ajax("data/MegaCities.geojson", {
    dataType: "json",
    success: function(data) {
      console.log(data);
      L.geoJson(data).addTo(map);
    }
  });
}

$(document).ready(createMap);
