// projects.component.js
import { ProjectComponent } from "./project.component.js";

export const ProjectsComponent = (projects) => {
    // section
    const section = document.createElement("section");
    section.id = "projects";
    section.setAttribute("id","projects");
    section.className = "py-5";

    // div container
    const container = document.createElement("div");
    container.className = "container";
    section.appendChild(container);

    // h2
    const h2 = document.createElement("h2");
    h2.className = "display-4 text-center";
    h2.textContent = "Projects";
    container.appendChild(h2);

    // row div
    const row = document.createElement("div");
    row.id = "project-list";
    row.className = "row";
    container.appendChild(row);

    // projects dizisindeki her bir project için projectComponent arayüzünü döndürme
    projects.forEach(project => row.appendChild(ProjectComponent(project)));

    return section;
}