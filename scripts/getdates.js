
document.addEventListener("DOMContentLoaded", function () {
    
    const currentYear = new Date().getFullYear();
    document.getElementById("yearDate").textContent = currentYear;

    
    const lastModifiedDate = new Date(document.lastModified);
    document.getElementById("lastModified").textContent = `Last Modified: ${lastModifiedDate.toLocaleString()}`;
});


