// console.log("weather app")
// https://api.weatherapi.com/v1/current.json?key=26432716b9fa47f6892112257242106&q=London&aqi=no

let form=document.querySelector('form');
let input=document.querySelector('input');
let tempEle = document.querySelector('#temp');
let locationEle = document.querySelector('#location');
let timeEle = document.querySelector('#time');
let conditionEle = document.querySelector('#condition');
let img = document.querySelector('img');


form.addEventListener('submit',function(e){
    console.log('form submitted');
    e.preventDefault();
    const value=input.value;
    // console.log(value);
    getWeather(value);
})

async function getWeather(place){
    try{

    const response=await fetch(`https://api.weatherapi.com/v1/current.json?key=26432716b9fa47f6892112257242106&q=${place}}&aqi=no`);
    const data= await response.json();
    // console.log(data);
    let currentTemp = data.current.temp_c;
    let currentCondition = data.current.condition.text;
    let conditionImage = data.current.condition.icon;
    let location = data.location.name;
    let localTime = data.location.localtime;
    // console.log(currentTemp);
    // console.log(currentLocation);
    // console.log(currentWeatherCondition);
    // console.log(currentConditionEmoji);
    updateDom(currentTemp, currentCondition, conditionImage,localTime, location);    }
    catch(error){
        alert("Please put a valid location")
        console.log(error);
    }
}
function updateDom(currentTemp, currentCondition, conditionImage,localTime, location){
    tempEle.innerText = currentTemp;
    locationEle.innerText = location;
    timeEle.innerText = localTime;
    conditionEle.innerText = currentCondition;
    img.src = "https:"+conditionImage;
}

getWeather('Kolkata');