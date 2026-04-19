// Wait until page loads
document.addEventListener("DOMContentLoaded", function () {

    console.log("WasteWise system loaded");

    // Get all page links
    const links = document.querySelectorAll("a");

    // Add click alert when navigating
    links.forEach(link => {
        link.addEventListener("click", function (e) {
            const pageName = this.querySelector("h3")?.innerText || "Page";

            alert("Opening " + pageName);
        });
    });

    // Hover animation (extra effect)
    links.forEach(link => {
        link.addEventListener("mouseenter", () => {
            link.classList.add("scale-105");
        });

        link.addEventListener("mouseleave", () => {
            link.classList.remove("scale-105");
        });
    });

    // Simple notification simulation
    function showWelcomeMessage() {
        setTimeout(() => {
            alert("Welcome to WasteWise! 🌱");
        }, 1000);
    }

    showWelcomeMessage();

});
