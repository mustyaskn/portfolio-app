// app.js
import { AboutMeComponent } from "./components/aboutme.component.js";
import { ContactFormComponent } from "./components/contactForm.component.js";
import { ProjectsComponent } from "./components/projects.component.js";
import { getData } from "./services/storage.service.js";
import { STORAGE_KEYS } from "./utils/constant.util.js";
import { handleContactFormSubmit } from "./utils/contactFormHandler.util.js";
import { loadTempDataset } from "./dataset.js";
loadTempDataset();

document.addEventListener("DOMContentLoaded",() => {
    const app = document.getElementById("app"); //<main id="app">
    app.appendChild(AboutMeComponent(getData(STORAGE_KEYS.ABOUTME)));
    app.appendChild(ProjectsComponent(getData(STORAGE_KEYS.PROJECTS)));
    app.appendChild(ContactFormComponent());

    // Contact Form gönder işlemi
    const contactForm = document.getElementById("contact-form");
    handleContactFormSubmit(contactForm);
});