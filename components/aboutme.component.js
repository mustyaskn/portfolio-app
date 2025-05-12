// aboutme.component.js

export const AboutMeComponent = ({image,text}) => {
    const section = document.createElement("section");
    section.id = "aboutme";
    section.className = "bg-light py-5";
    section.innerHTML = 
    `
        <div class="container text-center">
            <h2 class="display-4 mb-3">Hakkımda</h2>
            <img src="${image}" alt="resim" class="rounded-circle object-fit-cover mb-5" width="200" height="200">
            <p class="lead">${text}</p>
        </div>
    `;
    return section;
}