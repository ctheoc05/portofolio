

// Scroll animation
const faders = document.querySelectorAll('.fade-in');

const observer = new IntersectionObserver((entries, obs) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('visible');
      obs.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

faders.forEach(el => observer.observe(el));

function scrollGallery(btn, direction) {
    const wrapper = btn.parentElement.querySelector('.scroll-wrapper');
    const scrollAmount = 300; // change this for more/less scroll
  
    if (direction === 'left') {
      wrapper.scrollBy({ left: -scrollAmount, behavior: 'smooth' });
    } else {
      wrapper.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  }
  
