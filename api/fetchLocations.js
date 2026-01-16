const LOCATION_ENDPOINT = "https://ttp.cbp.dhs.gov/schedulerapi/locations/?temporary=false&inviteOnly=false&operational=true&serviceName=Global+Entryredirect?event=video_description&redir_token=QUFFLUhqa1paaXJvQTFhalFZdHZyX0lFRGZkcnotZVdMd3xBQ3Jtc0tuMVJQYTFjZEpEblhMb2syZ01iYWpELUN3TlYxS2lMMll5S1Y1T3hqUjdGV0d5dWFsZWh4TGlTVFoxdF83Y3pZa0VnVGZycGpKV0pHb25YczVuRUl2RC1iQ1NiSnZVZlJqcW9PTkVTLXNBVm0zTGl6NA&q=https%3A%2F%2Fttp.cbp.dhs.gov%2Fschedulerapi%2Flocations%2F%3Ftemporary%3Dfalse%26inviteOnly%3Dfalse%26operational%3Dtrue%26serviceName%3DGlobal%2520Entry&v=U4R-ABnzfHA"

export default function fetchLocations(){
    fetch(LOCATION_ENDPOINT)
        .then( response => response.json())
        .then( data => {
            const filteredLocations = data.map(loc => ({
                "id": loc.id,
                "name": loc.name,
                "shortName": loc.shortName,
                "tzDate": loc.tzDate
            }))
            filteredLocations.sort((a, b) => a.name.localeCompare(b.name));
            chrome.storage.local.set({ locations: filteredLocations})
            console.log(filteredLocations);
        })
        .catch(error => {
            console.log(error);
        })
}