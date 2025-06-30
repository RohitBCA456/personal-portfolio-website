// Initialize EmailJS
(function () {
  emailjs.init("your_public_key");
})();

document
  .getElementById("contact-form")
  .addEventListener("submit", function (e) {
    e.preventDefault();

    const serviceID = "your_service_key"; 
    const templateID = "your_template_key";
    emailjs
      .sendForm(serviceID, templateID, this)

      .then(() => {
        alert("Message sent successfully!");
        this.reset(); // Clear the form
      })
      .catch((err) => {
        alert("Failed to send message. Please try again.");
        console.error("EmailJS Error:", err);
      });
  });

// GSAP Animations
gsap.from(".navbar", {
  y: -100,
  opacity: 0,
  duration: 1,
  ease: "power3.out",
});

gsap.from(".nav-links li", {
  y: -20,
  opacity: 0,
  duration: 1,
  ease: "power2.out",
  stagger: 0.2,
  delay: 0.3,
});

gsap.from(".hero-content", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  ease: "power2.out",
});

gsap.from(".hero h2", {
  opacity: 0,
  x: -100,
  duration: 1,
  delay: 0.5,
  ease: "power2.out",
});

gsap.from(".hero p", {
  opacity: 0,
  x: 100,
  duration: 1,
  delay: 0.8,
  ease: "power2.out",
});

gsap.from(".query-form", {
  opacity: 0,
  y: 50,
  duration: 1.5,
  delay: 1,
  ease: "power2.out",
});

// GSAP Hover Effect
gsap.utils.toArray(".input-field").forEach((input) => {
  input.addEventListener("focus", () => {
    gsap.to(input, {
      borderColor: "#00bcd4",
      boxShadow: "0 0 8px rgba(0, 188, 212, 0.6)",
      duration: 0.3,
    });
  });

  input.addEventListener("blur", () => {
    gsap.to(input, {
      borderColor: "#ddd",
      boxShadow: "none",
      duration: 0.3,
    });
  });
});

// Get the elements
const hamburger = document.querySelector('.hamburger');
const navLinksMobile = document.querySelector('.nav-links-mobile');

// Add click event to the hamburger icon
hamburger.addEventListener('click', () => {
  // Toggle the 'open' class on both hamburger and mobile nav links
  hamburger.classList.toggle('open');
  navLinksMobile.classList.toggle('open');
});