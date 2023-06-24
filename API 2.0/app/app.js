const btn = document.querySelector('.btn');
const searchInfo = document.querySelector('.search__info');
let city = 'Oslo';


const urlApi = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=d8ca3dee9cfd841abd4b1935d6985b69`;
const weather = document.querySelector('.weather');
fetch(urlApi)
      .then(response => response.json())
      .then(json => app(json)  )

function app(json) {

      btn.addEventListener('click', show)
      function show() {
            city = searchInfo.value;
            const x = city ? city : "Oslo";
            // btn.classList.toggle('active');
            weather.innerHTML = template;
            console.log(city);

      };

      let cels = Math.round(json.main.temp - 273.15);
      let cels_min = Math.round(json.main.temp_min - 273.15);
      let cels_max = Math.round(json.main.temp_max - 273.15);


      console.log(city);
      // console.log(json)
     let template = `
      <div class="container ">
            <div class="wrapper">
            <div class="weather__location">
                <i class="fa-solid fa-location-dot"></i>
                <span class="location">${json.name}</span>
            </div>
            <div class="weather__img">
                <img src="../img/${json.weather[0].icon}.png" alt="${json.weather[0].main}">
                <span class="descr-img">${json.weather[0].description}</span>
            </div>
            <div class="weather__temp">
                <span class="temp">${cels}</span>
                <div class="celsius">℃</div>
            </div>
            <div class="weather__temp-max-min">
                <span class="min">${cels_min}</span>
                <div class="between">/</div>
                <span class="max">${cels_max}</span>
            </div>    
      </div>
      <div class="footer">
            <div class="weather__visib one-line">
            <p>visibility: </p>
            <span class="visib">${json.visibility}</span>
            </div>
            <div class="weather__humidity one-line">
            <p>humidity, %: </p>
            <span class="humidity">${json.main.humidity}</span>
            </div>
            <div class="weather__pressure one-line">
            <p>pressure, inHg: </p>
            <span class="pressure">${json.main.pressure}</span>
            </div>
            <div class="weather__wind one-line">
            <p>wind speed, mph: </p>
            <span class="wind">${json.wind.speed}</span>
            </div>
            <div class="weather__direct one-line">
            <p>direction: </p>
            <span class="direct"></span>
            </div>
      </div>
      </div>
      `
      weather.innerHTML += template;

      
}

