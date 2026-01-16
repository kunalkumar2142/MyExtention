// Elements.

const locationIdElement = document.getElementById("locationId")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

// Button elements

const startButtom = document.getElementById("startButton")
const stopButtom = document.getElementById("stopButton")

startButtom.onclick = () => {
    const prefs = {
        locationId: locationIdElement.value,
        startDate: startDateElement.value,
        endDate: endDateElement.value,
        tzData: locationIdElement.options[locationIdElement.selectedIndex].getAttribute('data-tz')
    }
    chrome.runtime.sendMessage({event: 'onStart', prefs})
}

stopButtom.onclick = () => {
    chrome.runtime.sendMessage({event: 'onStop'})
}

chrome.storage.local.get(["locationId","startDate","endDate","locations"], (result) => {
    const {locationId,startDate,endDate,locations} = result;

    setLocations(locations);

    if (locationId){
        locationIdElement.value = locationId
    }
    if(startDate){
        startDateElement.value = startDate
    }
    if(endDate){
        endDateElement.value = endDate
    }
    console.log(locations);
}) 

const setLocations = (locations) => {
    locations.forEach(locations => {
        let optionElemnet = document.createElement("option");
        optionElemnet.value = location.id
        optionElemnet.innerHTML = location.name
        optionElemnet.setAttribute('data-tz', location.tzData)
        locationIdElement.appendChild(optionElemnet);
    });
}