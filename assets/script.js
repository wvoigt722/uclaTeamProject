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
    setTimeout(rentOneBedFam, 3000)
    setTimeout(rentOneBedCondo, 1000)
    setTimeout(rentOneBedApartment, 6000)
    setTimeout(rentTwoBedApartment, 9000)
    setTimeout(rentThreeBedApartment, 12000)
});
// searchMainBtnEl.addEventListener("click", function () {
//     educationInfoEl.classList.remove("d-none");
// });
searchMainEl.addEventListener("keypress", function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        searchMainBtnEl.click();

    }
});
// Google Maps API

let map;
var longitude = -118.2437;
var latitude = 34.0522;

weatherInfo = document.getElementById("weatherInfo");
weatherInfo.style.display = "block"

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


//* grab tabledata for "oneBedroom" by id
var oneFamilyBedTableData = document.getElementById("oneFamilyBedroom");
var oneFamilySquareFtTableData = document.getElementById("oneFamilySquareFt");
var oneFamilyBathTableData = document.getElementById("oneFamilyBathroom");

//* rent for single family


var rentOneBedFam = function () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
    };

    fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=' + latitude + '&longitude=' + longitude + '&propertyType=Single%20Family&bedrooms=1&maxRadius=20&compCount=20', options)
        .then(response => response.json())
        .then(data => {
            console.log(data);
            console.log(data.rent);

            //* save data.rent for one family bedroom in a variable called rentOneFamilyBed
            var rentOneFamilyBed = data.rent
            oneFamilyBedTableData.textContent = "$" + rentOneFamilyBed;

            //* for loop to run through listings array and populate number of square feet

            var totalSquareFootage = 0;
            var totalBathrooms = 0;
            var skipListingsSquareFt = 0;
            var skipListingsBath = 0;





            for (var i = 0; i < data.listings.length; i++) {
                console.log(data.listings[i].squareFootage)
                //var squareFootage = data.listings[i].squareFootage

                //* add total number of squareFootage per listing [i] ; add to itself to get totalSquareFootage
                if (data.listings[i].squareFootage) {
                    totalSquareFootage += data.listings[i].squareFootage;
                }

                //* find number of listings that do not have squareFootage parameter and subtract later from data.listings.length when dividing to get avg
                if (!data.listings[i].squareFootage) {
                    skipListingsSquareFt++
                }

                console.log(totalSquareFootage);


                //* for loop to run through listings array and populate number of bathrooms
                //for (var i = 0; i < data.listings.length; i++) {
                //console.log(data.listings[i])
                console.log(data.listings[i].bathrooms)
                //var bathrooms = data.listings[i].bathrooms;

                if (data.listings[i].bathrooms) {
                    totalBathrooms += data.listings[i].bathrooms;
                }
                if (!data.listings[i].bathrooms) {
                    skipListingsBath++
                }

                console.log(totalBathrooms);

            }


            console.log(totalSquareFootage)
            console.log(data.listings.length)

            //*avg squareFoot from array of 20 listings

            oneFamilySquareFtTableData.textContent = Math.floor(totalSquareFootage / (data.listings.length - skipListingsSquareFt));
            oneFamilyBathTableData.textContent = (totalBathrooms / (data.listings.length - skipListingsBath))
            //* logging average squareFootage per 20 listings 
            console.log(Math.floor(totalSquareFootage / (data.listings.length - skipListingsSquareFt)));
            //* logging average # bathrooms per 20 listings 
            console.log((totalBathrooms / (data.listings.length - skipListingsBath)));





            //* call next run
            rentOneBedCondo();

        })
        .catch(err => console.error(err));



}
rentOneBedFam();

//* "Td = table data"

//* grab tabledata for oneBedroomCondo by id and assign to variable
var oneBedroomCondoTd = document.getElementById("oneBedroomCondo");
var oneBedCondoSquareFtTd = document.getElementById("oneBedCondoSquareFt");
var oneBedCondoBathTd = document.getElementById("oneBedCondoBathroom");

//* rent for 1 bed condo
var rentOneBedCondo = function () {

    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
    };

    fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=' + latitude + '&longitude=' + longitude + '&propertyType=Condo&bedrooms=1&maxRadius=20&compCount=20', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.rent)

            var rentOneBedCondo = data.rent;
            oneBedroomCondoTd.textContent = "$" + rentOneBedCondo;
            //* for loop to run through listings array and populate number of square feet

            var totalSquareFootage = 0;
            var totalBathrooms = 0;
            var skipListingsSquareFt = 0;
            var skipListingsBath = 0;





            for (var i = 0; i < data.listings.length; i++) {
                console.log(data.listings[i].squareFootage)
                //var squareFootage = data.listings[i].squareFootage

                //* add total number of squareFootage per listing [i] ; add to itself to get totalSquareFootage
                if (data.listings[i].squareFootage) {
                    totalSquareFootage += data.listings[i].squareFootage;
                }

                //* find number of listings that do not have squareFootage parameter and subtract later from data.listings.length when dividing to get avg
                if (!data.listings[i].squareFootage) {
                    skipListingsSquareFt++
                }

                console.log(totalSquareFootage);


                //* for loop to run through listings array and populate number of bathrooms
                //for (var i = 0; i < data.listings.length; i++) {
                //console.log(data.listings[i])
                console.log(data.listings[i].bathrooms)
                //var bathrooms = data.listings[i].bathrooms;

                if (data.listings[i].bathrooms) {
                    totalBathrooms += data.listings[i].bathrooms;
                }
                if (!data.listings[i].bathrooms) {
                    skipListingsBath++
                }

                console.log(totalBathrooms);

            }


            console.log(totalSquareFootage)
            console.log(data.listings.length)

            //*avg squareFoot from array of 20 listings

            oneBedCondoSquareFtTd.textContent = Math.floor(totalSquareFootage / (data.listings.length - skipListingsSquareFt));
            oneBedCondoBathTd.textContent = (totalBathrooms / (data.listings.length - skipListingsBath))
            //* logging average squareFootage per 20 listings 
            console.log(Math.floor(totalSquareFootage / (data.listings.length - skipListingsSquareFt)));
            //* logging average # bathrooms per 20 listings 
            console.log((totalBathrooms / (data.listings.length - skipListingsBath)));



            rentOneBedApartment();

        })
        .catch(err => console.error(err));

}

//* grab oneBedroomApartment table data by id
var oneBedApartmentTableData = document.getElementById("oneBedroomApartment");


//* for one bedroom apartment
var rentOneBedApartment = function () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
    };

    fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=' + latitude + '&longitude=' + longitude + '&propertyType=Apartment&bedrooms=1&maxRadius=20&compCount=20', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.rent)

            var rentOneBedApartment = data.rent;
            oneBedApartmentTableData.textContent = "$" + rentOneBedApartment;
            rentTwoBedApartment();
        })
        .catch(err => console.error(err));
}

//* rent 2 bedroom apartment
var rentTwoBedApartmentTableData = document.getElementById("twoBedroomApartment");
var twoBedApartmentSquareFtTd = document.getElementById("twoBedApartmentSquareFt");
var twoBedApartmentBathTd = document.getElementById("twoBedApartmentBathroom");

var rentTwoBedApartment = function () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
    };

    fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=' + latitude + '&longitude=' + longitude + '&propertyType=Apartment&bedrooms=2&maxRadius=20&compCount=20', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.rent);

            var rentTwoBedApartment = data.rent;
            rentTwoBedApartmentTableData.textContent = "$" + rentTwoBedApartment;

            //* for loop to run through listings array and populate number of square feet

            var totalSquareFootage = 0;
            var totalBathrooms = 0;
            var skipListingsSquareFt = 0;
            var skipListingsBath = 0;

            for (var i = 0; i < data.listings.length; i++) {
                console.log(data.listings[i].squareFootage)
                //var squareFootage = data.listings[i].squareFootage

                //* add total number of squareFootage per listing [i] ; add to itself to get totalSquareFootage
                if (data.listings[i].squareFootage) {
                    totalSquareFootage += data.listings[i].squareFootage;
                }

                //* find number of listings that do not have squareFootage parameter and subtract later from data.listings.length when dividing to get avg
                if (!data.listings[i].squareFootage) {
                    skipListingsSquareFt++
                }

                console.log(totalSquareFootage);

                //* for loop to run through listings array and populate number of bathrooms
                //for (var i = 0; i < data.listings.length; i++) {
                //console.log(data.listings[i])
                console.log(data.listings[i].bathrooms)
                //var bathrooms = data.listings[i].bathrooms;

                if (data.listings[i].bathrooms) {
                    totalBathrooms += data.listings[i].bathrooms;
                }
                if (!data.listings[i].bathrooms) {
                    skipListingsBath++
                }

                console.log(totalBathrooms);

            }


            console.log(totalSquareFootage)
            console.log(totalBathrooms)
            console.log(data.listings.length)

            //*avg squareFoot from array of 20 listings

            twoBedApartmentSquareFtTd.textContent = Math.floor(totalSquareFootage / (data.listings.length - skipListingsSquareFt));
            twoBedApartmentBathTd.textContent = (totalBathrooms / (data.listings.length - skipListingsBath))
            //* logging average squareFootage per 20 listings 
            console.log(Math.floor(totalSquareFootage / (data.listings.length - skipListingsSquareFt)));
            //* logging average # bathrooms per 20 listings 
            console.log(Math.floor(totalBathrooms / (data.listings.length - skipListingsBath)));




            rentThreeBedApartment();

            //run(rentTwoBedApartment);
        })
        .catch(err => console.error(err));

}

//* grab tabledata for threeBedroomApartment by id
var threeBedApartmentTableData = document.getElementById("threeBedroomApartment");
//*rent for 3 bedroom apartment
var rentThreeBedApartment = function () {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'b9ab6f30f2mshc158b857771ac33p1c7625jsnbcdb136ab6b3',
            'X-RapidAPI-Host': 'realty-mole-property-api.p.rapidapi.com'
        }
    };

    fetch('https://realty-mole-property-api.p.rapidapi.com/rentalPrice?latitude=' + latitude + '&longitude=' + longitude + '&propertyType=Apartment&bedrooms=3&maxRadius=20&compCount=20', options)
        .then(response => response.json())
        .then(data => {
            console.log(data)
            console.log(data.rent)

            var rentThreeBedApartment = data.rent;
            threeBedApartmentTableData.textContent = "$" + rentThreeBedApartment;
        })
        .catch(err => console.error(err));
}

