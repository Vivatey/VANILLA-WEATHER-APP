function displayTemperature(response) {
    console.log(response);
    console.log(response.data);
    console.log(response.data.temperature.current);
    console.log(response.data.city);

    let temperatureElement = document.querySelector("#temperature");
    temperatureElement.innerHTML = Math.round(response.data.temperature.current);

    let cityElement = document.querySelector("#city");
    cityElement.innerHTML = response.data.city;
    
    let descriptionElement = document.querySelector("#description");
    descriptionElement.innerHTML = response.data.condition.description;

    let humidityElement = document.querySelector("#humidity");
    humidityElement.innerHTML = response.data.temperature.humidity;

    let windElement = document.querySelector("#wind");
    windElement.innerHTML = Math.round(response.data.wind.speed);


  }



  let apiKey = "e8t47038af810df0bb6dd6e04ac3o3b1";

  // let query = "London";

  let units = "metric";

  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=london&key=${apiKey}&units=${units}`;

  console.log(apiUrl);

  axios.get(apiUrl).then(displayTemperature);