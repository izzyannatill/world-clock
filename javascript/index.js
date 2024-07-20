function updateTime() {
let losAngelesElement = document.querySelector("#los-angeles");
if (losAngelesElement) {
let laDate = losAngelesElement.querySelector(".date");
laDate.innerHTML = moment().tz("America/Los_Angeles").format("MMMM Do YYYY");
let laTime = losAngelesElement.querySelector(".time");
laTime.innerHTML = moment().tz("America/Los_Angeles").format("HH:mm:ss[<small>]A[</small>]");
    }

    let parisElement = document.querySelector("#paris");
    if (parisElement) {
let parisDate = parisElement.querySelector(".date");
parisDate.innerHTML = moment().tz("Europe/Paris").format("MMMM Do YYYY");
let parisTime = parisElement.querySelector(".time");
parisTime.innerHTML = moment().tz("Europe/Paris").format("HH:mm:ss[<small>]A[</small>]");
    }

  let sydElement = document.querySelector("#sydney");
    if (sydElement) {
let sydDate = sydElement.querySelector(".date");
sydDate.innerHTML = moment().tz("Australia/Sydney").format("MMMM Do YYYY");
let sydTime = sydElement.querySelector(".time");
sydTime.innerHTML = moment().tz("Australia/Sydney").format("HH:mm:ss[<small>]A[</small>]");
}
}

function updateCity (event) {
 let cityTimeZone = event.target.value;
 if (cityTimeZone === "local") {
    cityTimeZone = moment.tz.guess();
 }
 let cityTime = moment().tz(cityTimeZone);
 let cityName = cityTimeZone.replace("_", " ").split("/")[1];
 let citiesElement = document.querySelector("#cities");
 citiesElement.innerHTML = `
  <div class="city">
    <div>
      <h2>${cityName}</h2>
      <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("HH:mm:ss")}<small>${cityTime.format(
    "A"
  )}</small></div>
  </div>
  `;
   if (cityTimeZone === "selects") {
    citiesElement.innerHTML = ` <div class="city" id="los-angeles">
        <div>
<h2>Los Angeles<span class="emoji">🇺🇸</span></h2>
<div class="date"></div>
</div>
<div class="time"></div>
    </div>
     <div class="city" id="sydney">
        <div>
<h2>Sydney<span class="emoji">🇦🇺</span></h2>
<div class="date"></div>
</div>
<div class="time"></div>
    </div>
        <div class="city" id="paris">
        <div>
<h2>Paris<span class="emoji">🇫🇷</span></h2>
<div class="date"></div>
</div>
<div class="time"></div>
    </div>`
 }
    }

updateTime();
setInterval(updateTime, 1000);

let dropdownSelect = document.querySelector("#dropdown");
dropdownSelect.addEventListener("change", updateCity);