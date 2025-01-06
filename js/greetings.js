// Main purpose: Show a greeting message on the screen.

// Assign html elements to variables
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");

// Assign string values to variables for preventing typos
const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

// Function that handles the submit event of the login form
function onLoginSubmit(event){
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    paintGreetings(username);
}

// Function that shows the greeting message on the screen
function paintGreetings(name){
    greeting.innerHTML = `Hello ${name}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
    document.querySelector("#todo-form input").classList.remove("hidden");
}


loginForm.addEventListener("submit", onLoginSubmit);

// Check if the username is saved in the local storage
const savedUsername = localStorage.getItem(USERNAME_KEY);
if(savedUsername === null){
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", onLoginSubmit);
} else {
    paintGreetings(savedUsername);
}