document.addEventListener('DOMContentLoaded', function() {
    const darkModeToggle = document.getElementById('darkModeToggle');
    const body = document.body;
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    // Load Dark Mode Preference from Local Storage
    if (localStorage.getItem('darkMode') === 'enabled') {
        enableDarkMode();
    }

    // Dark Mode Toggle Functionality
    darkModeToggle.addEventListener('click', function() {
        if (body.classList.contains('dark-mode')) {
            disableDarkMode();
        } else {
            enableDarkMode();
        }
    });

    function enableDarkMode() {
        body.classList.add('dark-mode');
        localStorage.setItem('darkMode', 'enabled');
    }

    function disableDarkMode() {
        body.classList.remove('dark-mode');
        localStorage.setItem('darkMode', null);
    }

    // Smooth Scrolling
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Form Submission Handling
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault(); // Prevent default form submission

        // Basic form validation (you can add more robust validation)
        const name = document.getElementById('name').value.trim();
        const email = document.getElementById('email').value.trim();
        const message = document.getElementById('message').value.trim();

        if (name === '' || email === '' || message === '') {
            formMessage.textContent = 'Please fill in all fields.';
            formMessage.classList.add('error');
            return;
        }

        // Simulate form submission (replace with actual submission logic)
        setTimeout(function() {
            formMessage.textContent = 'Message sent successfully!';
            formMessage.classList.remove('error');
            formMessage.classList.add('success');
            contactForm.reset(); // Clear the form
        }, 1000); // Simulate a 1-second delay

        // Clear the message after a few seconds
        setTimeout(function() {
            formMessage.textContent = '';
            formMessage.classList.remove('success');
            formMessage.classList.remove('error');
        }, 5000);
    });
});