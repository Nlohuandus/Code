let title = document.createElement("div");
let table = document.createElement("table");
let thead = document.createElement("thead");
let tbody = document.createElement("tbody");
let trHead = document.createElement("tr");
let trbody = document.createElement("tr");

title.id= "title"
//fetch request
fetch(
  "http://api.weatherstack.com/current?access_key=570df689a9a3cf5ff173d7540177befc&query=New%20York"
)
  .then((response) => response.json())
  .then((data) => {
    //Page title
    let city = document.createElement("h2");
    let country = document.createElement("h2");
    country.innerText = data.location.country;
    country.id = "country"
    city.id= "city"
    city.innerText = data.location.name;
    title.appendChild(country)
    title.appendChild(city);
    //table heads declarations
    let temperature = document.createElement("th");
    let description = document.createElement("th");
    let windDirection = document.createElement("th");
    let pressure = document.createElement("th");
    let precipation = document.createElement("th");
    let humidity = document.createElement("th");
    let visibility = document.createElement("th");
    //table heads values
    temperature.innerText = "Temperature";
    description.innerText = "Weather type";
    windDirection.innerText = "Wind Direction";
    pressure.innerText = "Pressure";
    precipation.innerText = "Precipitation";
    humidity.innerText = "Humidity";
    visibility.innerText = "Visibility";
    //table heads DOM assign
    trHead.appendChild(temperature);
    trHead.appendChild(description);
    trHead.appendChild(windDirection);
    trHead.appendChild(pressure);
    trHead.appendChild(precipation);
    trHead.appendChild(humidity);
    trHead.appendChild(visibility);
    //table body declaration
    let btemperature = document.createElement("td");
    let bdescription = document.createElement("td");
    let descriptionIcon = document.createElement("img");
    let bwindDirection = document.createElement("td");
    let bpressure = document.createElement("td");
    let bprecipation = document.createElement("td");
    let bhumidity = document.createElement("td");
    let bvisibility = document.createElement("td");
    //table body value assign
    btemperature.innerText = data.current.temperature;
    bdescription.innerText = data.current.weather_descriptions[0];
    descriptionIcon.src = data.current.weather_icons[0];
    bwindDirection.innerText = data.current.wind_dir;
    bpressure.innerText = data.current.pressure;
    bprecipation.innerText = data.current.precip;
    bhumidity.innerText = data.current.humidity;
    bvisibility.innerText = data.current.visibility;
    //table body DOM assign
    tbody.appendChild(btemperature);
    tbody.appendChild(bdescription);
    bdescription.appendChild(descriptionIcon);
    tbody.appendChild(bwindDirection);
    tbody.appendChild(bpressure);
    tbody.appendChild(bprecipation);
    tbody.appendChild(bhumidity);
    tbody.appendChild(bvisibility);
  });

tbody.appendChild(trbody);
table.appendChild(trHead);
table.appendChild(tbody);
document.body.appendChild(title);
document.body.appendChild(table);
