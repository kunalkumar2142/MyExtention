// Elements.

const locationIdElement = document.getElementById("locationId")
const startDateElement = document.getElementById("startDate")
const endDateElement = document.getElementById("endDate")

// Button elements

const startButtom = document.getElementById("startButton")
const stopButtom = document.getElementById("stopButton")

startButtom.onclick = function(){
    if(startDateElement.value){
        console.log("start date element:", startDateElement.value);
    }else{
        console.log("start date is invalid!!")
    }
}

stopButtom.onclick = function(){
    if(endDateElement.value){
        console.log("end date element:", endDateElement.value);
    }else{
        console.log("end date is invalid!!")
    }
}