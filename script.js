// Register GSAP plugin
gsap.registerPlugin(ScrollTrigger);

// Form submission (placeholder)
document.querySelector('form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Message sent! (This is a placeholder)');
});

// On-load animations (e.g., navbar and hero)
gsap.to(".navbar", { opacity: 1, duration: 1, y: -20, ease: "power2.out" });
gsap.timeline()
    .to(".hero", { opacity: 1, duration: 1, ease: "power2.out" })
    .to(".profile-img", { opacity: 1, y: 0, duration: 0.8, ease: "bounce.out" }, "-=0.5");

// Scroll-triggered animations for sections
gsap.to("#about", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#about",
        start: "top 80%", // Trigger when top of section is 80% from top of viewport
        toggleActions: "play none none reverse" // Play on enter, reverse on leave
    }
});

gsap.to("#portfolio", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#portfolio",
        start: "top 80%"
    }
});

// Staggered projects with flip/zoom
gsap.utils.toArray(".project").forEach((project, i) => {
    gsap.to(project, {
        opacity: 1,
        scale: 1,
        duration: 0.8,
        rotationY: i % 2 === 0 ? 360 : -360, // Flip effect alternating
        ease: "power2.out",
        scrollTrigger: {
            trigger: project,
            start: "top 90%",
            toggleActions: "play none none reverse"
        },
        delay: i * 0.2 // Stagger
    });
});

gsap.to("#contact", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
    }
});

gsap.to("form", {
    opacity: 1,
    x: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "#contact",
        start: "top 80%"
    }
});

gsap.to("footer", {
    opacity: 1,
    y: 0,
    duration: 1,
    ease: "power2.out",
    scrollTrigger: {
        trigger: "footer",
        start: "top 90%"
    }
});
