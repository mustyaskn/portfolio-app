// project.component.js
export const ProjectComponent = ({image,heading,text,link}) => {
    const div = document.createElement("div");
    div.className = "col-sm-4 my-2";
    div.innerHTML = `
        <div class="card">
            <img src="${image}" alt="proje1" class="card-img-top">
            <div class="card-body">
                <h5 class="card-title text-capitalize">${heading}</h5>
                <p class="card-text">${text}</p>
                <a href="${link}" class="btn btn-dark" target="_blank"><i class="bi bi-github"></i> Github</a>
            </div>
        </div>
    `;
    return div;
}