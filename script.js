document.addEventListener("DOMContentLoaded", function () {
    const slider = document.querySelector(".trends-slider");
    const leftBtn = document.querySelector(".left-btn");
    const rightBtn = document.querySelector(".right-btn");

    leftBtn.addEventListener("click", function () {
        slider.scrollBy({ left: -250, behavior: "smooth" });
    });

    rightBtn.addEventListener("click", function () {
        slider.scrollBy({ left: 250, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("darkModeToggle");
    const body = document.body;

    // Dark Mode Status aus Local Storage laden
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode");
        toggleButton.innerHTML = "☀️"; // Sonne Icon
    }

    // Event Listener für Klick auf den Button
    toggleButton.addEventListener("click", () => {
        body.classList.toggle("dark-mode");

        // Dark Mode Status speichern
        if (body.classList.contains("dark-mode")) {
            localStorage.setItem("darkMode", "enabled");
            toggleButton.innerHTML = "☀️"; // Sonne Icon
        } else {
            localStorage.setItem("darkMode", "disabled");
            toggleButton.innerHTML = "🌙"; // Mond Icon
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("refurbished-btn").addEventListener("click", function(e) {
        e.preventDefault();
        document.querySelector("#refurbished-section").scrollIntoView({ behavior: "smooth", block: "start" });
    });
});



