document.addEventListener('DOMContentLoaded', function() {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            // Smooth scroll to the section
            window.scrollTo({
                top: targetSection.offsetTop - 50, // adjust for header height
                behavior: 'smooth'
            });
        });
    });

    // Mobile Menu Toggle (if added)
    const mobileMenu = document.querySelector('.mobile-menu');
    const navMenu = document.querySelector('nav ul');

    if (mobileMenu) {
        mobileMenu.addEventListener('click', function() {
            navMenu.classList.toggle('open');
        });
    }

    // Form Validation (if there's a contact form)
    const contactForm = document.querySelector('#contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            const email = document.querySelector('#email');
            const message = document.querySelector('#message');
            let errors = [];

            if (!validateEmail(email.value)) {
                errors.push("Invalid email");
                email.classList.add('error');
            } else {
                email.classList.remove('error');
            }

            if (message.value.trim() === "") {
                errors.push("Message cannot be empty");
                message.classList.add('error');
            } else {
                message.classList.remove('error');
            }

            if (errors.length === 0) {
                alert("Message sent successfully!");
                contactForm.reset();
            } else {
                alert(errors.join(', '));
            }
        });
    }

    function validateEmail(email) {
        const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
});
