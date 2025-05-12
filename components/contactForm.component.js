// contactForm.component.js

export const ContactFormComponent = () => {
    // section
    const section = document.createElement("section");
    section.id = "contact";
    section.className = "bg-light py-5";

    section.innerHTML = `
        <div class="container">
            <h2 class="display-4 text-center">İletişim</h2>
            <form id="contact-form">
                <div class="mb-3">
                    <label for="name" class="form-label">Ad:</label>
                    <input type="text" class="form-control" id="name" name="name" placeholder="Adınız" required>
                </div>
                <div class="mb-3">
                    <label for="email" class="form-label">E-Posta:</label>
                    <input type="email" class="form-control" id="email" name="email" placeholder="E-Posta Adresiniz" required>
                </div>
                <div class="mb-3">
                    <label for="message" class="form-label">Mesajınız:</label>
                    <textarea class="form-control" id="message" name="message" rows="3" placeholder="Mesajınız" required></textarea>
                </div>
                <button type="submit" class="btn btn-primary">Gönder</button>
            </form>
        </div>
    `;
    
    return section;
}