// Email form validation
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const email = document.getElementById('email').value;

    // Check if email has a "." after the "@"
    const atIndex = email.indexOf('@');
    const dotIndex = email.lastIndexOf('.');

    if (atIndex < 1 || dotIndex < atIndex + 2 || dotIndex === email.length - 1) {
        alert('Please enter a valid email address with a dot (e.g., ".com")');
        return;
    }

    alert('Thank you for your message! We will get back to you as soon as possible.');
    this.reset();
});

// Change background color on project title click
const titles = document.querySelectorAll('.project-title');
const portfolioSection = document.querySelector('.portfolio-section');

titles.forEach(title => {
    title.addEventListener('click', () => {
        const randomHue = Math.floor(Math.random() * 360);
        const randomColor = `hsla(${randomHue}, 60%, 70%, 0.8)`;
        portfolioSection.style.backgroundColor = randomColor;
    });
});