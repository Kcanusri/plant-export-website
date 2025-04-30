// Smooth Scrolling for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
  link.addEventListener('click', event => {
    event.preventDefault();
    const targetId = link.getAttribute('href').substring(1); // Get target section ID
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 50, // Adjust for header height
        behavior: 'smooth',
      });
    }
  });
});

// Animate Hero Section Text on Load
window.addEventListener('load', () => {
  const heroText = document.querySelector('.hero h1');
  const heroButton = document.querySelector('.hero button');
  heroText.classList.add('fade-in');
  heroButton.classList.add('slide-up');
});

// Add Fade-In Effect for Sections on Scroll
const sections = document.querySelectorAll('section');
const observer = new IntersectionObserver(
  entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      }
    });
  },
  { threshold: 0.2 } // Trigger when 20% of the section is visible
);

sections.forEach(section => observer.observe(section));

// Testimonial Carousel Animation
let currentTestimonial = 0;
const testimonials = document.querySelectorAll('.testimonial-carousel .testimonial');
const changeTestimonial = () => {
  testimonials[currentTestimonial].classList.remove('active');
  currentTestimonial = (currentTestimonial + 1) % testimonials.length; // Loop through testimonials
  testimonials[currentTestimonial].classList.add('active');
};
setInterval(changeTestimonial, 5000); // Change every 5 seconds

// Interactive Buttons (Hover Effect)
document.querySelectorAll('button').forEach(button => {
  button.addEventListener('mouseenter', () => {
    button.classList.add('hover');
  });
  button.addEventListener('mouseleave', () => {
    button.classList.remove('hover');
  });
});
