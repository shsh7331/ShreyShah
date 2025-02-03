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


document.addEventListener("DOMContentLoaded", function () {
    const tabsContainer = document.querySelector(".tabs-container");

    tabsContainer.addEventListener("wheel", (event) => {
        event.preventDefault();
        tabsContainer.scrollLeft += event.deltaY;
    });
});
