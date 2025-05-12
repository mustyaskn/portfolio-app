// login.js
import { handleLoginFormSubmit } from "./utils/loginFormHandler.util.js";

const initializeApp = () => {
    const loginForm = document.getElementById("login-form");
    loginForm ? handleLoginFormSubmit(loginForm) : console.error("Form bulunamadı!");
}

document.addEventListener("DOMContentLoaded",initializeApp);