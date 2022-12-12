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
//new cooooooooooooooooooooooooode:
function searchFunction() {
    let value = document.querySelector('#search-value').value;
    cityValuesSearch(value)
}
document.querySelector('.searchBtn').addEventListener('click', searchFunction)
function cityValuesSearch(address) {
    var container = document.querySelector(".container");
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
            for (var i = 0; i < data.property.length; i++) {
                var createTableRow = document.createElement("tr");
                var tableData = document.createElement("td");
                var addressEl = document.createElement('p')
                console.log(data.property[i].address);
                var propertyAddressLine1 = data.property[i].address.line1;
                var propertyAddressLine2 = data.property[i].address.line2;
                console.log(propertyAddressLine1 + propertyAddressLine2);
                var address = propertyAddressLine1 + propertyAddressLine2;
                // var pEl = document.createElement("p");
                // pEl.textContent = address
                // container.append(pEl);
                addressEl.textContent = address;
                tableData.appendChild(addressEl);
                createTableRow.appendChild(tableData);
                container.appendChild(createTableRow);
                //var propertyStreetNumber =
                // for (var i = 0; i < property.length; i++) {
                //     console.log('Successful POST request:', property[i].address);
                // }
            }
            return data;
        })
        .catch((error) => {
            console.error('Error in POST request:', error);
        });
}
//cooooommmmmment out code
var repoNameEl = document.querySelector('#repo-name');
var issueContainerEl = document.querySelector('#issues-container');
var limitWarningEl = document.querySelector('#limit-warning');
var getRepoName = function () {
  // This is coming from the URL search bar in the browser. It is what comes after the `?`.
  var queryString = document.location.search;
  var repoName = queryString.split('=')[1];
  if (repoName) {
    repoNameEl.textContent = repoName;
    getRepoIssues(repoName);
  } else {
    // This will run and return to the homepage if there was nothing in the URL query parameter.
    document.location.replace('./index.html');
  }
};
var getRepoIssues = function (repo) {
  var apiUrl = 'https://api.github.com/repos/' + repo + '/issues?direction=asc';
  fetch(apiUrl).then(function (response) {
    if (response.ok) {
      response.json().then(function (data) {
        displayIssues(data);
        // Since GitHub only returns 30 results at a time, we check to see if there's more than 30 by looking for a next page URL in the response headers.
        if (response.headers.get('Link')) {
          displayWarning(repo);
        }
      });
    } else {
      document.location.replace('./index.html');
    }
  });
};
var displayIssues = function (issues) {
  // This will check for strict equality. Using `!issues.length` works, but only because JavaScript considers `0` to be `falsy`.
  if (issues.length === 0) {
    issueContainerEl.textContent = 'This repo has no open issues!';
    return;
  }
  for (var i = 0; i < issues.length; i++) {
    var issueEl = document.createElement('a');
    issueEl.classList = 'list-item flex-row justify-space-between align-center';
    issueEl.setAttribute('href', issues[i].html_url);
    issueEl.setAttribute('target', '_blank');
    var titleEl = document.createElement('span');
    titleEl.textContent = issues[i].title;
    issueEl.appendChild(titleEl);
    var typeEl = document.createElement('span');
    // If there's already a pull request open, it's a good idea we focus on other open issues that no one has worked on.
    if (issues[i].pull_request) {
      typeEl.textContent = '(Pull request)';
    } else {
      typeEl.textContent = '(Issue)';
    }
    issueEl.appendChild(typeEl);
    issueContainerEl.appendChild(issueEl);
  }
};
// When there are more issues than what GitHub has returned, we let the user know by printing a message with a link to the page.
var displayWarning = function (repo) {
  limitWarningEl.textContent = 'To see more than 30 issues, visit ';
  var linkEl = document.createElement('a');
  linkEl.textContent = 'GitHub.com';
  linkEl.setAttribute('href', 'https://github.com/' + repo + '/issues');
  linkEl.setAttribute('target', '_blank');
  // This will appear on the bottom of the page.
  limitWarningEl.appendChild(linkEl);
};
getRepoName();