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
    // Carousel Background Image Update
    const carousel = document.getElementById('projectsCarousel');
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

    // Canvas Drawings.
    const canvas = document.getElementById("starCanvas");
    const ctx = canvas.getContext("2d");

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const stars = [];
    const numStars = 100; // Number of dots

    function randomColor() {
        const colors = ['#ffffff', '#ff9a9e', '#fad0c4', '#fbc2eb', '#a18cd1', '#fbc2eb', '#ff9a9e'];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    // Function to create stars
    function createStar() {
        return {
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            radius: Math.random() * 3 + 1, // Size of dots
            color: randomColor(),
            dx: (Math.random() - 0.5) * 2, // Horizontal speed
            dy: (Math.random() - 0.5) * 2  // Vertical speed
        };
    }

    // Initialize stars
    for (let i = 0; i < numStars; i++) {
        stars.push(createStar());
    }

    // Function to draw stars
    function drawStar(star) {
        ctx.beginPath();
        ctx.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
        ctx.fillStyle = star.color;
        ctx.fill();
        ctx.closePath();
    }

    // Function to animate stars
    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        stars.forEach(star => {
            star.x += star.dx;
            star.y += star.dy;

            // Bounce stars off the edges of the canvas
            if (star.x < 0 || star.x > canvas.width) star.dx *= -1;
            if (star.y < 0 || star.y > canvas.height) star.dy *= -1;

            drawStar(star);
        });

        requestAnimationFrame(animate);
    }

    animate();

    // Adjust canvas size when window is resized
    window.addEventListener('resize', () => {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    });
});
