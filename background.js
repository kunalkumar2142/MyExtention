import fetchLocations from "./api/fetchLocations"

chrome.runtime.onInstalled.addListener( details =>{
    console.log("onInstalled reason: ",details.reason)
})

chrome.runtime.onMessage.addListner( data=>{
    const {event, prefs} =data
    switch (data.event){
        case 'onStop':
            handleOnStop();
            break;
        case 'onStart':
            handleOnStart(prefs);
            break;
        default:
            break;
    }
})

const handleOnStop = () => {
    console.log("On stop in background")
}

const handleOnStart = () => {
    console.log("On start in background")
    console.log("prefs recieveed:", prefs)
    chrome.storage.local.set(prefs)
}

const ALARM_JOB_NAME = "DROP_ALARM"
const createAlarm = () => {
    chrome.alarms.create(ALARM_JOB_NAME, { periodInMinutes: 1.0 })
}