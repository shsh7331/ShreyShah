document.addEventListener("DOMContentLoaded", function () {
    const updatesContainer = document.querySelector(".updates-container");

    // Example of adding a new update dynamically
    function addUpdate(week, text) {
        let updateDiv = document.createElement("div");
        updateDiv.classList.add("update");
        updateDiv.innerHTML = `<h3>Week ${week}</h3><p>${text}</p>`;
        updatesContainer.appendChild(updateDiv);
    }

    // Example Usage
    addUpdate(4, "Implemented responsive design for better mobile view.");
});

