function openModal() {
    document.getElementById("modal").style.display = "block";
    document.body.classList.add("modal-open");
}

function closeModal() {
    document.getElementById("modal").style.display = "none";
    document.body.classList.remove("modal-open");
}

function openFloorPlanModal(building) {
    const iframe = document.getElementById("floor-plan-iframe");
    if (building === 'first') {
        iframe.src = "floor-plan-building-1.html"; // Load the first building's floor plan in the iframe
        document.getElementById("floor-plan-modal").style.display = "block"; // Show the modal
    } else if (building === 'second') {
        iframe.src = "floor-plan.html"; // Existing floor plan
        document.getElementById("floor-plan-modal").style.display = "block"; // Show the modal
    }
}

function closeFloorPlanModal() {
    document.getElementById("floor-plan-modal").style.display = "none";
    document.getElementById("floor-plan-iframe").src = ""; // Clear the iframe source
}

// Add any additional functions needed for about.html here if applicable