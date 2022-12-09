// Selectors

var searchMainEl = document.querySelector('#search-main');
var searchMainBtnEl = document.querySelector('#search-main-btn');

// API

let map;
var longitude = -74.0060;
var latitude = 40.7128;


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 8,
  });
}

window.initMap = initMap;





// ATTOM Fetch request
