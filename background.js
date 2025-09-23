let data = {
    "event": "onStop/onStart",
    "prefs": {
        "locationId": "123",
        "startDate": "2023-02-02",
        "endDate": "2023-03-03"
    }
}

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