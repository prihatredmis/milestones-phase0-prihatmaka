// JavaScript for handling additional features

document.addEventListener('DOMContentLoaded', function () {
    // Example of additional feature for contact form validation
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (email === '' || message === '') {
                alert('Please fill out all fields');
                event.preventDefault();
            }
        });
    }

    // Example of additional feature for login/register form validation
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', function (event) {
            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;
            if (username === '' || password === '') {
                alert('Please fill out all fields');
                event.preventDefault();
            }
        });
    }
});
