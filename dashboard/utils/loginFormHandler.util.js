import { validateUser } from "../services/auth.service.js";

// loginFormHandler.util.js
export const handleLoginFormSubmit = (loginForm) => {
    loginForm.addEventListener("submit",(e) => {
        e.preventDefault();

        const formData = new FormData(loginForm);
        const username = formData.get("username");
        const password = formData.get("password");
        console.log(validateUser({username,password}));
    });
}