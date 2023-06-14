function getWeather() {
  const url = "https://api.openweathermap.org/data/2.5/weather?lat=40.2337289&lon=-111.6587085&units=imperial&appid=d816ed58bd3ff21a1a0426e8d4ebcf34";

  fetch(url)
    .then(response => response.json())
    .then(data => {
      //console.log(data);

      const temperature = data.main.temp;
      //const temperature = 80;
      var description = data.weather[0].description;
      //var description = "clear";
      const wind_speed = data.wind.speed;

      //console.log(temperature + " " + description + " " + wind_speed);

      const temperatureElement = document.getElementById("temp");
      const descriptionElement = document.getElementById("sky");
      const windElement = document.getElementById("wind");

      const weatherImg = document.getElementById("weather-image");
      console.log(weatherImg);
    
      const words = description.split(" ");

      for (let i = 0; i < words.length; i++) {

        switch (words[i]) {

          case "thunderstorm":
            words.push("&#9889");
            weatherImg.src = "Pictures/rainy.jpg";
            break;
          case "drizzle":
            words.push("&#127783;");
            weatherImg.src = "Pictures/rainy.jpg";
            break;
          case "rain":
            words.push("&#127783;");
            weatherImg.src = "Pictures/rainy.jpg";
            break;
          case "clear":
            words.push("&#9728;");
            weatherImg.src = "Pictures/sunny.jpg";
            break;
          case "clouds":
            words.push("&#9729;");
            weatherImg.src = "Pictures/cloudy.jpg";
            break;
          case "snow":
            words.push("&#10052;");
            weatherImg.src = "Pictures/snowy.jpg";
            break;
        }

        words[i] = words[i][0].toUpperCase() + words[i].substr(1);
      }
      
      description = words.join(" ");
      
      temp_string = `${temperature}&deg;F`;
      if (temperature <= 40) {
        //temp_string += " &#129398;";
        temp_string = `<span id="cold">${temp_string} &#129398;</span>`;
      }
      else if (temperature >= 80) {
        //temp_string += " &#128293;";
        temp_string = `<span id="hot">${temp_string} &#128293;</span>`;
      } else temp_string += " &#128526;";

      temperatureElement.innerHTML = temp_string;
      descriptionElement.innerHTML = description;
      windElement.innerHTML = `${wind_speed}mph`;
    })
    .catch(error => {
      console.log("Error:", error);
    });
}

window.onload = getWeather;