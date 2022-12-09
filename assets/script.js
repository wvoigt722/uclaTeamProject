fetch(
  "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/id?geoid=PL0820000&minBeds=1&maxBeds=2",
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      apikey: "f274e5cbf40a2264853a5e68d2b0d5d2",
    },
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
fetch(
  "https://api.gateway.attomdata.com/propertyapi/v1.0.0/property/detail?attomid=184713191",
  {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      apikey: "f274e5cbf40a2264853a5e68d2b0d5d2",
    },
  }
)
  .then((res) => res.json())
  .then((data) => {
    console.log("Successful POST request:", data.property);
    return data;
  })
  .catch((error) => {
    console.error("Error in POST request:", error);
  });
