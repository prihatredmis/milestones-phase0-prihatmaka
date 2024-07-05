// Login form submission handling
document.getElementById("loginForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("username").value;
    const email = document.getElementById("email").value;
    alert(`Login/Register form submitted by: ${name}, ${email}`);
});

// Contact form submission handling
document.getElementById("contactForm").addEventListener("submit", function(event){
    event.preventDefault();
    const name = document.getElementById("contactName").value;
    const email = document.getElementById("contactEmail").value;
    const message = document.getElementById("contactMessage").value;
    alert(`Contact form submitted by: ${name}, ${email}, Message: ${message}`);
});
