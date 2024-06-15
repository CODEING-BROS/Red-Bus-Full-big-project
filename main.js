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

document.addEventListener('DOMContentLoaded', function () {
    const prevButton = document.querySelector('.carousel-control.prev');
    const nextButton = document.querySelector('.carousel-control.next');
    const cardCarousel = document.querySelector('.card-carousel');
    const cardWidth = document.querySelector('.card').offsetWidth + 32; // card width + gap (32px)

    nextButton.addEventListener('click', () => {
        cardCarousel.scrollBy({
            left: cardWidth*3, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    });

    prevButton.addEventListener('click', () => {
        cardCarousel.scrollBy({
            left: -cardWidth*3, // Adjust scroll amount as needed
            behavior: 'smooth'
        });
    });
});


document.addEventListener('DOMContentLoaded', (event) => {
    const moreContent = document.getElementById('moreContent');
    const toggleButton = document.getElementById('toggleButton');

    toggleButton.addEventListener('click', () => {
        if (moreContent.classList.contains('hidden-para')) {
            moreContent.classList.remove('hidden-para');
            toggleButton.textContent = 'Read Less';
        } else {
            moreContent.classList.add('hidden-para');
            toggleButton.textContent = 'Read More';
        }
    });
});


document.addEventListener('DOMContentLoaded', () => {
    const listItems = document.querySelectorAll('.container-8 ul li');
    const faqSections = document.querySelectorAll('.qsns');
    const questions = document.querySelectorAll('.qsn');

    listItems.forEach(item => {
        item.addEventListener('click', () => {
            const targetId = item.id + '-faqs';

            // Remove active class from all list items
            listItems.forEach(li => li.classList.remove('active'));

            // Add active class to the clicked list item
            item.classList.add('active');

            // Handle the FAQ section transitions
            faqSections.forEach(section => {
                if (section.id === targetId) {
                    section.classList.add('active');
                    section.classList.remove('fade-out');
                    section.style.display = 'flex';  // Ensure the section is displayed
                } else {
                    section.classList.remove('active');
                    section.classList.add('fade-out');
                    section.style.display = 'none';  // Hide the section
                }
            });
        });
    });

    questions.forEach(question => {
        question.addEventListener('click', () => {
            const answer = question.querySelector('.ans');
            const icon = question.querySelector('.toggle-icon');
            
            // Close all other answers
            questions.forEach(q => {
                if (q !== question) {
                    q.querySelector('.ans').style.display = 'none';
                    q.querySelector('.toggle-icon').src = './assets/plus.png';
                    q.classList.remove('open');
                }
            });

            // Toggle the clicked answer
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
                icon.src = './assets/plus.png'; // Change to plus icon
                question.classList.remove('open');
            } else {
                answer.style.display = 'block';
                icon.src = './assets/minus.png'; // Change to minus icon
                question.classList.add('open');
            }
        });
    });
});


document.addEventListener("DOMContentLoaded", function () {
    const accordions = document.querySelectorAll('.container-9 li');

    accordions.forEach((li) => {
        const content = li.querySelector('.show');
        const arrow = li.querySelector('.downarrow');

        li.addEventListener('click', () => {
            content.classList.toggle('hidden');
            arrow.classList.toggle('rotate');
        });
    });
});


//  scrollbtn

// Function to handle scroll behavior
// Function to handle scroll behavior
window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    var scrollToTopBtn = document.querySelector(".scroll-arrow");
    var footer = document.querySelector("footer");
    var footerOffset = footer.getBoundingClientRect().top + window.scrollY;

    // Show scroll arrow button when user scrolls down 30px and before reaching footer
    if (document.body.scrollTop > 30 || document.documentElement.scrollTop > 30) {
        if (window.scrollY + window.innerHeight < footerOffset) {
            scrollToTopBtn.style.display = "block";
        } else {
            scrollToTopBtn.style.display = "none";
        }
    } else {
        scrollToTopBtn.style.display = "none";
    }
}

// Function to scroll back to top smoothly with adjustable speed
function scrollToTop() {
    const scrollDuration = 1000; // Duration of the smooth scroll animation in milliseconds
    const scrollStep = -window.scrollY / (scrollDuration / 15); // Calculates how far to scroll per interval

    // Interval function to scroll smoothly
    const scrollInterval = setInterval(function() {
        if (window.scrollY !== 0) {
            window.scrollBy(0, scrollStep);
        } else {
            clearInterval(scrollInterval);
        }
    }, 15); // Adjust interval timing for smoothness
}
