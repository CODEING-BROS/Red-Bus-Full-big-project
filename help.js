// Function to toggle the dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show-drop");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-drop')) {
                openDropdown.classList.remove('show-drop');
            }
        }
    }
}