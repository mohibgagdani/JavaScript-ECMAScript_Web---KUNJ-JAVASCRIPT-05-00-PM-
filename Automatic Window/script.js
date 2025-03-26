window.onload = function() {
    const modal = document.getElementById("modal");
    const closeButton = document.getElementById("closeButton");

    modal.style.display = "block";

    closeButton.onclick = function() {
        modal.style.display = "none";
    }

    window.onclick = function(event) {
        if (event.target == modal) {
            modal.style.display = "none";
        }
    }
}