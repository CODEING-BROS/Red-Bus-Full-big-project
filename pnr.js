// Function to toggle the dropdown menu
function toggleDropdown() {
    document.getElementById("myDropdown").classList.toggle("show-drop");
}

// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
    if (!event.target.matches('.dropbtn') && !event.target.matches('.dropbtn i') && !event.target.matches('.dropdown img')) {
        var dropdowns = document.getElementsByClassName("dropdown-content");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show-drop')) {
                openDropdown.classList.remove('show-drop');
            }
        }
    }
}

document.addEventListener('DOMContentLoaded', function () {
    const questions = document.querySelectorAll('.faq-qsn');

    questions.forEach(question => {
        question.addEventListener('click', function () {
            const answer = question.nextElementSibling;
            const icon = question.querySelector('i');
            
            // Toggle the active class on the question
            question.classList.toggle('active');
            
            // Toggle the answer display
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.classList.remove('fa-angle-down');
                icon.classList.add('fa-angle-up');
            } else {
                answer.style.display = 'block';
                icon.classList.remove('fa-angle-up');
                icon.classList.add('fa-angle-down');
            }
        });
    });
});
