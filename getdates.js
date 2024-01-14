// Get the current year
const currentYear = new Date().getFullYear();

// Update the year in the span with id "yearDate"
document.getElementById("yearDate").textContent = currentYear;

// Get the current date
const currentDate = new Date().toLocaleDateString();

// Update the date in the second paragraph of the footer
document.querySelector("footer p:nth-child(2)").textContent = `Current Date: ${currentDate}`;
