document.addEventListener('DOMContentLoaded', function () {
    // Smooth Scrolling
    const links = document.querySelectorAll('nav ul li a');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
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
        mobileMenu.addEventListener('click', function () {
            navMenu.classList.toggle('open');
        });
    }

    // Form Validation (if there's a contact form)
    // const contactForm = document.querySelector('#contactForm');

    // if (contactForm) {
    //     contactForm.addEventListener('submit', function(e) {
    //         e.preventDefault();
    //         const email = document.querySelector('#email');
    //         const message = document.querySelector('#message');
    //         let errors = [];

    //         if (!validateEmail(email.value)) {
    //             errors.push("Invalid email");
    //             email.classList.add('error');
    //         } else {
    //             email.classList.remove('error');
    //         }

    //         if (message.value.trim() === "") {
    //             errors.push("Message cannot be empty");
    //             message.classList.add('error');
    //         } else {
    //             message.classList.remove('error');
    //         }

    //         if (errors.length === 0) {
    //             alert("Message sent successfully!");
    //             contactForm.reset();
    //         } else {
    //             alert(errors.join(', '));
    //         }
    //     });
    // }

    // function validateEmail(email) {
    //     const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    //     return re.test(String(email).toLowerCase());
    // }

    // Carousel Background Image Update
    const carousel = document.getElementById('carouselExampleCaptions');
    const section = document.getElementById('projects');
    const skill_section = document.getElementById('skills');
    const technologies = document.getElementById('technologies');

    if (carousel && section) {
        // Function to set the background image
        function updateBackground() {
            const activeItem = carousel.querySelector('.carousel-item.active img');
            const imgSrc = activeItem.getAttribute('src');
            section.style.backgroundImage = `url(${imgSrc})`;
            skill_section.style.backgroundImage = `url(${imgSrc})`;
            technologies.style.backgroundImage = `url(${imgSrc})`;
        }

        // Run the function when the page loads and after each slide transition
        updateBackground();
        carousel.addEventListener('slid.bs.carousel', updateBackground);
    }

    // Select the elements you want to apply the background image to
    const aboutTitle = document.getElementById("about-title");
    const aboutDescription = document.getElementById("about-description");

    // Define the background image URL
    const imageUrl = "url('static/images/text-pic.jpg')";  // Adjust the path as needed

    // Set the background image for the selected elements
    aboutTitle.style.background = `${imageUrl} no-repeat center center`;
    aboutTitle.style.backgroundSize = "cover";
    aboutTitle.style.webkitBackgroundClip = "text"; // For Webkit browsers (Chrome, Safari)
    aboutTitle.style.backgroundClip = "text"; // For other browsers
    aboutTitle.style.webkitTextFillColor = "transparent"; // For Webkit browsers

    aboutDescription.style.background = `${imageUrl} no-repeat center center`;
    aboutDescription.style.backgroundSize = "cover";
    aboutDescription.style.webkitBackgroundClip = "text"; // For Webkit browsers
    aboutDescription.style.backgroundClip = "text"; // For other browsers
    aboutDescription.style.webkitTextFillColor = "transparent"; // For Webkit browsers
});
