
let map;
var latitude = 41.8781;
var longitude =  -87.6298;


// Selectors


// Search Selectors

var searchMainEl = document.querySelector('#search-main');
var searchMainBtnEl = document.querySelector('#search-main-btn');


// Map Selector
var mapEl = document.querySelector('#map');

// Weather Info Selector

var weatherInfoEl = document.getElementById('weatherInfo');

// Chart Selectors

var chartsContain = document.getElementById('chartsContain');
var nutChartEl = document.getElementById('myNutChart');
var barChartEl = document.getElementById('myBarChart');
var lineChartEl = document.getElementById('myLineChart');

// Table Selectors

var marketInfoEl = document.getElementById('market-info');
var educationInfoEl = document.getElementById('education-info');




var weatherApiKey = '424b38ba3001e9ed90818dd50436deee';



// Event Listeners

searchMainBtnEl.addEventListener('click', function() {
  mapEl.classList.remove('d-none');
  marketInfoEl.classList.remove('d-none');
  educationInfoEl.classList.remove('d-none');
  weatherInfoEl.classList.remove('d-none');
  chartsContain.classList.remove('d-none');
  lineChartEl.classList.remove('d-none');
  barChartEl.classList.remove('d-none');
  nutChartEl.classList.remove('d-none');
});



// Input Information




searchMainBtnEl.addEventListener('click', function() {
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


});  


// google maps api

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 13,
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



fetch('https://api.openweathermap.org/data/2.5/forecast?lat=' + latitude + '&lon=' + longitude + '&appid=' + weatherApiKey + '&units=imperial' , {
    method: 'GET',
})

    .then((res) => res.json())
    .then((data) => {
        console.log('Successful POST request:', data);



      // Name of City
  
      var cityName = data.city.name;

      var cityNameEl = document.createElement('p');

      cityNameEl.innerHTML = '<strong>City:</strong> ' + cityName;

      weatherInfoEl.append(cityNameEl);
      console.log(cityName);


      // Temp of City
      
      var cityTemp = data.list[0].main.temp;

      var cityTempEl = document.createElement('p');

      cityTempEl.innerHTML = '<strong>Current Tempt:</strong> ' + cityTemp + '° fahrenheit';


      weatherInfoEl.append(cityTempEl);    


      // Weather of City

      var cityWeather = data.list[0].weather[0].main;
      var cityWeatherDes = data.list[0].weather[0].description;
      var cityWind = data.list[0].wind.speed;

      var cityWeatherEl = document.createElement('p');
      cityWeatherEl.innerHTML = '<strong>Current Weather:</strong> ' + cityWeather + '<strong> Description: </strong>' + cityWeatherDes;

      var cityWindEl = document.createElement('p');
      cityWindEl.innerHTML = '<strong>Wind Speed:</strong> ' + cityWind;

      weatherInfoEl.append(cityWeatherEl);
      weatherInfoEl.append(cityWindEl);


        return data;
    })
    .catch((error) => {
        console.error('Error in POST request:', error);
      });

 
    };



// Charts and Data Displays


// Doughnut Chart

new Chart(nutChartEl, {
  type: 'doughnut',
  data: {
    labels: ['Rented', 'Owned', 'Vacant'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



// Bar Chart

new Chart(barChartEl, {
  type: 'bar',
  data: {
    labels: ['1-5', '6-10', '11-15', '16-20', '21-25', '26-30', '31-35', '36-40', '41-45', '46-50', '51-55', '56-60', '61-65', '66-70', '71-75', '76-80', '81-85', '86-90', '90+'],
    datasets: [{
      label: 'Population',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});




// Line Chart

new Chart(lineChartEl, {
  type: 'line',
  data: {
    labels: ['<10k', '10-20k', '20-30k', '40-50k', '60-70k', '70-80k', '80-90k', '90-100k', '100k+'],
    datasets: [{
      label: '# of Households',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});



