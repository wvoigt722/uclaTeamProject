
let map;
var latitude = 41.8781;
var longitude =  -87.6298;


// Selectors


// Search Selectors

var searchMainEl = document.querySelector('#search-main');
@@ -34,64 +41,93 @@ var weatherApiKey = '424b38ba3001e9ed90818dd50436deee';

// Event Listeners


// Map Event Listener

searchMainBtnEl.addEventListener('click', function() {
    mapEl.classList.remove('d-none');
  mapEl.classList.remove('d-none');
  marketInfoEl.classList.remove('d-none');
  educationInfoEl.classList.remove('d-none');
  weatherInfoEl.classList.remove('d-none');
  chartsContain.classList.remove('d-none');
  lineChartEl.classList.remove('d-none');
  barChartEl.classList.remove('d-none');
  nutChartEl.classList.remove('d-none');
});


// Chart Even Listeners

searchMainBtnEl.addEventListener('click', function() {
    nutChartEl.classList.remove('d-none');
});
searchMainBtnEl.addEventListener('click', function() {
    barChartEl.classList.remove('d-none');
});
searchMainBtnEl.addEventListener('click', function() {
    lineChartEl.classList.remove('d-none');
  });   
searchMainBtnEl.addEventListener('click', function() {
    chartsContain.classList.remove('d-none');
});
// Input Information



// Info Listeners

searchMainBtnEl.addEventListener('click', function() {
    marketInfoEl.classList.remove('d-none');
});
searchMainBtnEl.addEventListener('click', function() {
    educationInfoEl.classList.remove('d-none');
});
searchMainBtnEl.addEventListener('click', function() {
    weatherInfoEl.classList.remove('d-none');
});
  console.log(searchMainEl.value);


  var city = searchMainEl.value;



var requestOptions = {
  method: 'GET',
};

fetch(

  'https://api.geoapify.com/v1/geocode/search?text=' + city + '&apiKey=51181722fe3645919bd3cf77a3c846e9', 


requestOptions)
.then(response => response.json())
.then(result => { 

  console.log(result);

  console.log(result.features[0].bbox[0]);
  console.log(result.features[0].bbox[1]);

  // eventually to be stored in main lat and long vars
  latitude = result.features[0].bbox[1];
  longitude = result.features[0].bbox[0];

  getInfo();


})

.catch(error => console.log('error', error));


// Google Maps API
});  

let map;
var latitude = 35.363602;
var longitude = 138.726379;

// google maps api

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 13,
  });
}
  });  
}  

window.initMap = initMap;



// make a function to wrap everything that depends on the 
// lat and lng variables

var getInfo = function(){


// google maps api


// var newLatLng = new google.maps.LatLng(latitude, longitude);

map.setCenter({ lat: latitude, lng: longitude });



// Weather API


@@ -104,13 +140,6 @@ fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon
    .then((data) => {
        console.log('Successful POST request:', data);



      var dataList = data.list;
      for (let i = 0; i < dataList.length; i++) {
        console.log(dataList[i]);

      }


      // Name of City
@@ -160,7 +189,7 @@ fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon
      });



    };


