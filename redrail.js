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



// widgit 

// Function to set the selected state
function setSelected(selector) {
    document.querySelectorAll('.selector .radio-btn-outer').forEach(btnOuter => {
        btnOuter.classList.remove('red-outer-border');
    });
    document.querySelectorAll('.selector .radio-btn-inner').forEach(btnInner => {
        btnInner.classList.remove('red-background');
    });
    selector.querySelector('.radio-btn-outer').classList.add('red-outer-border');
    selector.querySelector('.radio-btn-inner').classList.add('red-background');
}

// Event listener for selectors
document.querySelectorAll('.selector').forEach(selector => {
    selector.addEventListener('click', function() {
        localStorage.setItem('selected', this.getAttribute('data-value'));
        localStorage.removeItem('checkbox-checked'); // Reset checkbox state
        location.reload();
    });
});

// On page load, set the selected state based on localStorage
document.addEventListener('DOMContentLoaded', () => {
    const selectedValue = localStorage.getItem('selected');
    if (selectedValue) {
        const selectedSelector = document.querySelector(`.selector[data-value="${selectedValue}"]`);
        if (selectedSelector) {
            setSelected(selectedSelector);
        }
    }

    // Search inputs interaction
    const fromInput = document.getElementById('from');
    const toInput = document.getElementById('to');
    const fromLabel = document.querySelector('label[for="from"]');
    const toLabel = document.querySelector('label[for="to"]');

    fromInput.addEventListener('focus', () => {
        fromLabel.classList.add('small-label');
    });
    fromInput.addEventListener('blur', () => {
        if (fromInput.value === '') {
            fromLabel.classList.remove('small-label');
        }
    });

    toInput.addEventListener('focus', () => {
        toLabel.classList.add('small-label');
    });
    toInput.addEventListener('blur', () => {
        if (toInput.value === '') {
            toLabel.classList.remove('small-label');
        }
    });

    // Toggle exchange icon
    const exchangeIcon = document.querySelector('.exchange-icon');
    exchangeIcon.addEventListener('click', () => {
        const fromValue = fromInput.value;
        const toValue = toInput.value;
        fromInput.value = toValue;
        toInput.value = fromValue;

        if (fromInput.value !== '') {
            fromLabel.classList.add('small-label');
        } else {
            fromLabel.classList.remove('small-label');
        }

        if (toInput.value !== '') {
            toLabel.classList.add('small-label');
        } else {
            toLabel.classList.remove('small-label');
        }
    });

    // Checkbox interaction
    const optWrap = document.querySelector('.opt-wrap');
    const checkboxWrap = document.querySelector('.checkbox-wrap');

    optWrap.addEventListener('click', () => {
        const isChecked = checkboxWrap.classList.contains('background-red');
        if (isChecked) {
            checkboxWrap.classList.remove('checkbox-wrap-pass', 'background-red');
            checkboxWrap.classList.add('checkbox-wrap');
            checkboxWrap.innerHTML = '';
            localStorage.removeItem('checkbox-checked');
        } else {
            checkboxWrap.classList.remove('checkbox-wrap');
            checkboxWrap.classList.add('checkbox-wrap-pass', 'background-red');
            checkboxWrap.innerHTML = '<img src="./assets/checkbox.png" alt="Checked">';
            localStorage.setItem('checkbox-checked', 'true');
        }
    });

    // On page load, set the checkbox state based on localStorage
    const checkboxChecked = localStorage.getItem('checkbox-checked');
    if (checkboxChecked === 'true') {
        checkboxWrap.classList.remove('checkbox-wrap');
        checkboxWrap.classList.add('checkbox-wrap-pass', 'background-red');
        checkboxWrap.innerHTML = '<img src="./assets/checkbox.png" alt="Checked">';
    }
});




document.addEventListener('DOMContentLoaded', function () {
    var picker = new Pikaday({
      field: document.getElementById('datewrap'),
      format: 'D MMM YYYY',
      onSelect: function () {
        var date = this.getDate();
        var options = { weekday: 'short', day: '2-digit', month: 'short', year: 'numeric' };
        var dateString = date.toLocaleDateString('en-US', options);
        var dateParts = dateString.split(' ');
        document.querySelector('.date-day').textContent = dateParts[0];
        document.querySelector('.date-month').textContent = dateParts[1] + ' ' + dateParts[2];
        document.querySelector('.date-year').textContent = dateParts[3];
      }
    });
  });



//   

    document.addEventListener('DOMContentLoaded', (event) => {
        const steps = document.querySelectorAll('.tutorial-step');
        const tutorialImage = document.getElementById('tutorial-image');

        steps.forEach(step => {
            step.addEventListener('click', () => {
                // Remove the current-tutorial class from all steps
                steps.forEach(s => s.classList.remove('current-tutorial'));

                // Add the current-tutorial class to the clicked step
                step.classList.add('current-tutorial');

                // Update the image source based on the clicked step's data-step attribute
                const stepNumber = step.getAttribute('data-step');
                tutorialImage.src = `./assets/tutorialright-${stepNumber}.png`;
            });
        });
    });