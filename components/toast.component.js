// toast.component.js
export const loadNotificationToast = ({heading,message,className,timeout}) => {

    let div = document.getElementById("toast-container");
    if (!div) {
        div = document.createElement("div");
        div.id = "toast-container";
        div.className = "position-fixed bottom-0 end-0 p-3";
        document.body.appendChild(div);
    }

    div.innerHTML = `
        <div id="live-toast" class="toast show ${className}" role="alert" aria-live="assertive" aria-atomic="true">
            <div class="toast-header">
                <i class="bi bi-info-circle-fill"></i>
                <strong class="me-auto ms-1">${heading}</strong>
                <button type="button" class="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
            </div>
            <div class="toast-body">${message}</div>
        </div>
    `;
    
    setTimeout(() => {
        document.getElementById("live-toast").remove();
    }, timeout);
}