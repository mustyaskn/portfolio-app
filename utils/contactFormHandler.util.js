import { loadNotificationToast } from "../components/toast.component.js";
import { saveContactForm } from "../services/storage.service.js";
import { clearForm } from "./clearForm.util.js";

// contactFormHandler.util.js
export const handleContactFormSubmit = (contactForm) => {
    contactForm.addEventListener("submit",(e) => {
        e.preventDefault(); // form submit ile action page aramıyor.
        
        const formData = new FormData(contactForm);
        saveContactForm({
            name: formData.get("name"),
            email: formData.get("email"),
            message:formData.get("message")
        });
        loadNotificationToast({
            heading: "Bildirim",
            message: "Form başarıyla gönderildi!",
            className:"bg-success text-white",
            timeout: 3000 //1 sn = 1000 ms
        });
        clearForm(contactForm);
    });
};