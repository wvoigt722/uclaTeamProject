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

var img = document.createElement("img");
img.src = "pexels-johannes-plenio-3131634.jpg";
document.body.appendChild(img);

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
var longitude = -118.2437;
var latitude = 34.0522;

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

var threeBedroomTableData = document.getElementById("threeBedroom");
var threeBedroomTableRow = document.getElementById("threeBedroomRow");

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
        'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
    }
};

fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=' + latitude + '&longitude=' + longitude + '&propertyType=Single%20Family&bedrooms=3&maxRadius=10', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.rent)
        var rent = data.rent

        //* find number of properties taking avg rent for and assign to variable 'numberProperties'
        var numberProperties = data.listings.length
        console.log(numberProperties)

        //var tableRow = document.createElement("tr");
        var singleFamilyRent = document.createElement("td");
        singleFamilyRent.textContent = rent;
        threeBedroomTableRow.append(singleFamilyRent);

        threeBedroomTableData.textContent = numberProperties;


    })
    .catch(err => console.error(err));


var rentOneBedroom = document.getElementById("oneBedroom");

const options2 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
        'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
    }
};

fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=' + latitude + '&longitude=' + longitude + '&bedrooms=1&maxRadius=20', options)
    .then(response => response.json())
    .then(data => {
        console.log(data)
        console.log(data.rent)

        var rent1Bedroom = data.rent
        rentOneBedroom.textContent = rent1Bedroom;
    })
    .catch(err => console.error(err));


const options3 = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
        'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
    }
};

fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=34.0195&longitude=-118.4912&bedrooms=1&maxRadius=10&compCount=20', options)
    .then(response => response.json())
    .then(response => console.log(response))
    .catch(err => console.error(err));


// // var request = new Request.Builder()
// //     .url("https://api.gateway.attomdata.com/propertyapi/v1.0.0/property / detail ? address1 = 4529 % 20Winona % 20Court & address2=Denver % 2C % 20CO")
// //     .get()
// //     .addHeader("accept", "application/json")
// //     .addHeader("apikey", "")

// //     .build(); 

// // Response response = client.newCall(request).execute();

// // var requestUrl = 'https://api.gateway.attomdata.com/propertyapi/v1.0.0'

// // fetch(requestUrl)
// //     .then()

// var img = document.createElement("img");
// img.src = "assets/real estate 1.jpeg"
// document.body.appendChild(img);

// // //* go to url desired
// // //* look at documentation require for property
// // //* enter either url once or url and property multiple times (e.g. atom)

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
//         console.log(property.latitude)
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


// var container = document.querySelector(".container");

// fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=90402&propertytype=RESIDENTIAL%20(NEC)&orderby=calendardate&page=1&pagesize=100', {
//     // fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?&propertytype=RESIDENTIAL%20(NEC)&orderby=calendardate&page=1&pagesize=100', {
//     method: 'GET',
//     headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json',
//         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
//     }
// })
//     .then((res) => res.json())
//     .then((data) => {
//         for (var i = 0; i < data.property.length; i++) {
//             var createTableRow = document.createElement("tr");
//             var tableData = document.createElement("td");
//             var addressEl = document.createElement('p')

//             console.log(data.property[i].address);
//             var propertyAddressLine1 = data.property[i].address.line1;
//             var propertyAddressLine2 = data.property[i].address.line2;
//             console.log(propertyAddressLine1 + propertyAddressLine2);
//             var address = propertyAddressLine1 + propertyAddressLine2;
//             // var pEl = document.createElement("p");
//             // pEl.textContent = address
//             // container.append(pEl);
//             addressEl.textContent = address;

//             tableData.appendChild(addressEl);
//             createTableRow.appendChild(tableData);
//             container.appendChild(createTableRow);
//             //var propertyStreetNumber =
//             // for (var i = 0; i < property.length; i++) {
//             //     console.log('Successful POST request:', property[i].address);
//             // }
//         }
//         return data;
//     })
//     .catch((error) => {
//         console.error('Error in POST request:', error);
//     });


// function searchFunction() {
//     let value = document.querySelector('#search-value');
//     cityValuesSearch(value)
// }

// searchMainBtnEl.addEventListener('click', searchFunction)


// function cityValuesSearch(address) {
//     var container = document.querySelector(".container");

//     fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=82009&propertytype=RESIDENTIAL%20(NEC)&orderby=calendardate&page=1&pagesize=100', {
//         method: 'GET',
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json',
//             'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
//         }
//     })
//         .then((res) => res.json())
//         .then((data) => {
//             for (var i = 0; i < data.property[i].length; i++) {
//                 var createTableRow = document.createElement("tr");
//                 var tableData = document.createElement("td");
//                 var addressEl = document.createElement('p')

//                 console.log(data.property[i].address);
//                 var propertyAddressLine1 = data.property[i].address.line1;
//                 var propertyAddressLine2 = data.property[i].address.line2;
//                 console.log(propertyAddressLine1 + propertyAddressLine2);
//                 var address = propertyAddressLine1 + propertyAddressLine2;
//                 // var pEl = document.createElement("p");
//                 // pEl.textContent = address
//                 // container.append(pEl);
//                 addressEl.textContent = address;
//                 console.log(address)
//                 body.appendChild(addressEl);

//                 tableData.appendChild(addressEl);
//                 createTableRow.appendChild(tableData);
//                 container.appendChild(createTableRow);
//                 //var propertyStreetNumber =
//                 // for (var i = 0; i < property.length; i++) {
//                 //     console.log('Successful POST request:', property[i].address);
//                 // }
//             }
//             return data;
//         })
//         .catch((error) => {
//             console.error('Error in POST request:', error);
//         });
// }

// // ATTOM API

// // fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/id?geoid=PL0820000&minBeds=1&maxBeds=2', {
// //     method: 'GET',
// //     headers: {
// //         'Accept': 'application/json',
// //         'Content-Type': 'application/json',
// //         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
// //     }
// // })
// //     .then((res) => res.json())
// //     .then((data) => {
// //         console.log('Successful POST request:', data);
// //         return data;
// //     })
// //     .catch((error) => {
// //         console.error('Error in POST request:', error);
// //     });

// // fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?attomid=184713191', {
// //     method: 'GET',
// //     headers: {
// //         'Accept': 'application/json',
// //         'Content-Type': 'application/json',
// //         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
// //     }
// // })
// //     .then((res) => res.json())
// //     .then((data) => {
// //         console.log('Successful POST request:', data.property);
// //         return data;
// //     })
// //     .catch((error) => {
// //         console.error('Error in POST request:', error);
// //     });

// // // ATTOM Fetch request
// // fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=82009&propertytype=RESIDENTIAL%20(NEC)&orderby=calendardate&page=1&pagesize=100', {
// //     method: 'GET',
// //     headers: {
// //         'Accept': 'application/json',
// //         'Content-Type': 'application/json',
// //         'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
// //     }
// // })
// //     .then((res) => res.json())
// //     .then((data) => {
// //         let { property } = data
// //         console.log(property)
// //         for (var i = 0; i < property.length; i++) {
// //             let { address, location } = property[i]
// //             console.log(address, location)
// //             // for (var i = 0; i < property.length; i++) {
// //             //     console.log('Successful POST request:', property[i].address);
// //             // }
// //         }
// //         return data;
// //     })
// //     .catch((error) => {
// //         console.error('Error in POST request:', error);
// //     });

// // //* put arrays into a variable



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



