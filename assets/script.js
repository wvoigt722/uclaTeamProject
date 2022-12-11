// Selectors

var searchMainEl = document.querySelector("#search-main");
var searchMainBtnEl = document.querySelector("#search-main-btn");
var mapEl = document.querySelector("#map");

var nutChartEl = document.getElementById("myNutChart");
var barChartEl = document.getElementById("myBarChart");
var lineChartEl = document.getElementById("myLineChart");

var marketInfoEl = document.getElementById("market-info");
var educationInfoEl = document.getElementById("education-info");

var weatherApiKey = "424b38ba3001e9ed90818dd50436deee";

// Event Listeners

searchMainBtnEl.addEventListener("click", function () {
  mapEl.classList.remove("d-none");
});
searchMainBtnEl.addEventListener("click", function () {
  nutChartEl.classList.remove("d-none");
});
searchMainBtnEl.addEventListener("click", function () {
  barChartEl.classList.remove("d-none");
});
searchMainBtnEl.addEventListener("click", function () {
  lineChartEl.classList.remove("d-none");
});
searchMainBtnEl.addEventListener("click", function () {
  marketInfoEl.classList.remove("d-none");
});
searchMainBtnEl.addEventListener("click", function () {
  educationInfoEl.classList.remove("d-none");
});

// Google Maps API

let map;
var longitude = -74.0;
var latitude = 40.71;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: latitude, lng: longitude },
    zoom: 13,
  });
}

window.initMap = initMap;

// Weather API

fetch(
  "https://api.openweathermap.org/data/2.5/forecast?lat=" +
    latitude +
    "&lon=" +
    longitude +
    "&appid=" +
    weatherApiKey,
  {
    method: "GET",
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log("Successful POST request:", data);
    return data;
  })
  .catch((error) => {
    console.error("Error in POST request:", error);
  });

// Charts and Data Displays

new Chart(nutChartEl, {
  type: "doughnut",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(barChartEl, {
  type: "bar",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

new Chart(lineChartEl, {
  type: "line",
  data: {
    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
    datasets: [
      {
        label: "# of Votes",
        data: [12, 19, 3, 5, 2, 3],
        borderWidth: 1,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  },
});

// ATTOM API

// fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/id?geoid=PL0820000&minBeds=1&maxBeds=2', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
//     }
// })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('Successful POST request:', data);
//         return data;
//     })
//     .catch((error) => {
//         console.error('Error in POST request:', error);
//     });

// fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?attomid=184713191', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
//     }
// })
//     .then((res) => res.json())
//     .then((data) => {
//         console.log('Successful POST request:', data.property);
//         return data;
//     })
//     .catch((error) => {
//         console.error('Error in POST request:', error);
//     });

// // ATTOM Fetch request
// fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=82009&propertytype=RESIDENTIAL%20(NEC)&orderby=calendardate&page=1&pagesize=100', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
//     }
// })
//     .then((res) => res.json())
//     .then((data) => {
//         let { property } = data
//         console.log(property)
//         for (var i = 0; i < property.length; i++) {
//             let { address, location } = property[i]
//             console.log(address, location)
//             // for (var i = 0; i < property.length; i++) {
//             //     console.log('Successful POST request:', property[i].address);
//             // }
//         }
//         return data;
//     })
//     .catch((error) => {
//         console.error('Error in POST request:', error);
//     });

// //* put arrays into a variable

// fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/avm/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
//     }
// })
//     .then((res) => res.json())
//     .then((data) => {
//         let { property } = data
//         console.log(property[0].avm);
//         // for (var i = 0; i < 10; i++) {
//         //     let { detail } = avm[i]
//         //     console.log(detail);
//         //     // for (var i = 0; i < property.length; i++) {
//         //     //     console.log('Successful POST request:', property[i].address);
//         //     // }
//         // }
//         return data;
//     })
//     .catch((error) => {
//         console.error('Error in POST request:', error);
//     });
