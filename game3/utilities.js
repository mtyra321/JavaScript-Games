// get list element
// retrieve todo from data store
//save to data store

//set a listener
export function qs(selector) {
    return document.querySelector(selector);
}

export function getFromLS(key) {
    var a = localStorage.getItem(key);
    console.log("not parsed: " + a);
    var parsed;
    try {
        parsed = JSON.parse(a); // this is how you parse a string into JSON 
    } catch (ex) {
        console.error(ex);
    }
    return parsed;
}


export function saveToLS(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
}