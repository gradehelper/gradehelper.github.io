document.addEventListener("DOMContentLoaded", function () {
    const scaleNameElement = document.getElementById("scaleName");
    const sharpsFlatsElement = document.getElementById("sharpsFlats");
    const accidentalsMinorElement = document.getElementById("accidentalsMinor");
    const startingNoteElement = document.getElementById("startingNote");
    const newScaleButton = document.getElementById("newScaleButton");
    let previousScale = null; // Store the previous scale

    // Load the scales from the JSON file (scales.json)
    fetch("scales.json")
        .then((response) => response.json())
        .then((data) => {
            newScaleButton.addEventListener("click", function () {
                let randomScale;

                // Keep generating a random scale until it's different from the previous one
                do {
                    randomScale = data[Math.floor(Math.random() * data.length)];
                } while (randomScale === previousScale);

                // Update the previous scale
                previousScale = randomScale;

                scaleNameElement.textContent = randomScale.name;
                sharpsFlatsElement.textContent = randomScale.sharpsFlats;
                accidentalsMinorElement.textContent = randomScale.accidentalsMinor;
                startingNoteElement.textContent = randomScale.startingNote;
            });
        })
        .catch((error) => console.error("Error loading scales:", error));
});

document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("toggleButton");
    const dropdownContent = document.getElementById("dropdownContent");

    // Function to toggle the dropdown content visibility
    function toggleDropdown() {
        if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
        } else {
            dropdownContent.style.display = "block";
        }
    }

    // Add a click event listener to the toggle button
    toggleButton.addEventListener("click", toggleDropdown);
});


// Enable the site to be added to the home screen on Safari as a web app
if ("standalone" in window.navigator && window.navigator.standalone) {
    // It's running as a web app
} else {
    // It's running in a browser
    // You can add instructions here for users to add to home screen
}
