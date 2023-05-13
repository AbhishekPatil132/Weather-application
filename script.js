// search bar js 


$("#inpt_search").on('focus', function () {
	$(this).parent('label').addClass('active');
});

$("#inpt_search").on('blur', function () {
	if ($(this).val().length == 0)
		$(this).parent('label').removeClass('active');
});



// fetching the API data 

//const API_key = "44486cbd795a97871579754f7276066d";
const API_key = "44486cbd795a97871579754f7276066d";
const API_url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

async function getWeatherData(city){
      const result = await fetch(API_url + city + `&appid=${API_key}`);
	  let data = await result.json();
      console.log(data);

	  document.getElementById('city_name').innerHTML = data.name;
	  document.getElementById('temp').innerHTML = Math.round(data.main.temp) + `<span>&#8451;</span>`;
	  document.getElementById('humidity').innerHTML = data.main.humidity + `%`;
	  document.getElementById('wind').innerHTML = Math.round(data.wind.speed) + `<span>km/h</span>`;
      
	  // ----------- Images changing as per weather conditions ----------
	  if (data.weather[0].main == 'Clear'){
		document.getElementById('img').src = "clear.png";
	  }
	  else if (data.weather[0].main == 'Clouds'){
		document.getElementById('img').src = "clouds.png";
	  }
	  else if (data.weather[0].main == 'Mist'){
		document.getElementById('img').src = "mist.png";
	  }
	  else if (data.weather[0].main == 'Drizzle'){
		document.getElementById('img').src = "drizzle.png";
	  }
	  else if (data.weather[0].main == 'Rain'){
		document.getElementById('img').src = "rain.png";
	  }
}

//    -------------  Taking searched string as city -----------------

document.getElementById("inpt_search").addEventListener('keypress', function (e) {
	if (e.key === 'Enter') {
	  var city = this.value;
	  getWeatherData(city);
	}
  });



  







