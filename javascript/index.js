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

updateTime();
setInterval(updateTime, 1000);