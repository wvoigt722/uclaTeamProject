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
// var request = new Request.Builder()
//     .url("https://api.gateway.attomdata.com/propertyapi/v1.0.0/property / detail ? address1 = 4529 % 20Winona % 20Court & address2=Denver % 2C % 20CO")
//     .get()
//     .addHeader("accept", "application/json")
//     .addHeader("apikey", "")

//     .build(); 

// Response response = client.newCall(request).execute();

// var requestUrl = 'https://api.gateway.attomdata.com/propertyapi/v1.0.0'

// fetch(requestUrl)
//     .then()


//* go to url desired
//* look at documentation require for property
//* enter either url once or url and property multiple times (e.g. atom)

fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/id?geoid=PL0820000&minBeds=1&maxBeds=2', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
    }
})
    .then((res) => res.json())
    .then((data) => {
        console.log('Successful POST request:', data);
        return data;
    })
    .catch((error) => {
        console.error('Error in POST request:', error);
    });


fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?attomid=184713191', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
    }
})
    .then((res) => res.json())
    .then((data) => {
        console.log('Successful POST request:', data.property);
        return data;
    })
    .catch((error) => {
        console.error('Error in POST request:', error);
    });





// ATTOM Fetch request
fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/address?postalcode=82009&propertytype=RESIDENTIAL%20(NEC)&orderby=calendardate&page=1&pagesize=100', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
    }
})
    .then((res) => res.json())
    .then((data) => {
        let { property } = data
        console.log(property)
        for (var i = 0; i < property.length; i++) {
            let { address, location } = property[i]
            console.log(address, location)
            // for (var i = 0; i < property.length; i++) {
            //     console.log('Successful POST request:', property[i].address);
            // }
        }
        return data;
    })
    .catch((error) => {
        console.error('Error in POST request:', error);
    });

//* put arrays into a variable

fetch('https://api.gateway.attomdata.com/propertyapi/v1.0.0/avm/detail?address1=4529%20Winona%20Court&address2=Denver%2C%20CO', {
    method: 'GET',
    headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
        'apikey': 'f274e5cbf40a2264853a5e68d2b0d5d2'
    }
})
    .then((res) => res.json())
    .then((data) => {
        let { property } = data
        console.log(property[0].avm);
        // for (var i = 0; i < 10; i++) {
        //     let { detail } = avm[i]
        //     console.log(detail);
        //     // for (var i = 0; i < property.length; i++) {
        //     //     console.log('Successful POST request:', property[i].address);
        //     // }
        // }
        return data;
    })
    .catch((error) => {
        console.error('Error in POST request:', error);
    });


