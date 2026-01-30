gsap.registerPlugin(ScrollTrigger);

// Text slider in hero (rotating words)
const texts = ["Capturing Moments", "Creating Stories", "Videography Excellence"];
let tl = gsap.timeline({ repeat: -1 });
texts.forEach((text, i) => {
    tl.to(".text-slider", { text: text, duration: 1, delay: 2, ease: "power1.inOut" });
});

// Swiper carousel
const swiper = new Swiper('.swiper', {
    loop: true,
    pagination: { el: '.swiper-pagination' },
    autoplay: { delay: 5000 }
});

// Video modal
const modal = new bootstrap.Modal('#videoModal');
document.querySelectorAll('.play-btn').forEach(btn => {
    btn.addEventListener('click', e => {
        e.preventDefault();
        const iframe = document.querySelector('#videoModal iframe');
        iframe.src = btn.dataset.video + '?autoplay=1';
        modal.show();
    });
});

// Close modal resets src
modal._element.addEventListener('hidden.bs.modal', () => {
    document.querySelector('#videoModal iframe').src = '';
});

// GSAP animations (similar to previous, add for new elements)
gsap.to(".hero", { opacity: 1, duration: 1 });

// ... Add other section animations as before
