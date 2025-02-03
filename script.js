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
    function addUpdate() {
        let updatesContainer = document.getElementById("updates-container");
        
        if (!updatesContainer) {
            console.error("Element #updates-container not found!");
            return; // Exit function if element doesn't exist
        }

        let newUpdate = document.createElement("p");
        newUpdate.textContent = "New Weekly Update!";
        updatesContainer.appendChild(newUpdate);
    }

    // Run the function after the DOM is fully loaded
    addUpdate();
});



function showContent(tabId) {
    // Hide all content
    document.querySelectorAll('.content').forEach(content => content.classList.remove('active'));
    
    // Show selected tab content
    document.getElementById(tabId).classList.add('active');
}


