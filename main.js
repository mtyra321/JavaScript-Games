// footer copyright year and last updated date
const options = {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric"
};
const year = new Date();
document.getElementById("datetime").innerHTML = new Date().toDateString("en-us", options);
document.getElementById("year").innerHTML = year.getFullYear()