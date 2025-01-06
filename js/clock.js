// Main purpose: Show a live clock on the screen that updates every second.

const clock = document.querySelector("h2#clock");
const day = document.querySelector("h2#day");

// A function that gets the current time and displays it on the screen
function getClock(){
    const today = new Date();
    const dayNames = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    day.innerHTML = `${dayNames[today.getDay()]} ${today.getMonth()+1}/${today.getDate()} ${today.getFullYear()}`;
    clock.innerHTML = today.toLocaleTimeString();
}
getClock();

