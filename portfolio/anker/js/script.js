const hero = document.getElementById("hero");
const logo = document.getElementById("logo");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const fadeOutPoint = hero.offsetHeight / 2;

  if (scrollY < fadeOutPoint) {
    logo.style.opacity = 1 - scrollY / fadeOutPoint;
    logo.style.transform = `translateY(-${scrollY / 3}px)`;
  } else {
    logo.style.opacity = 0;
  }
});

// Fade-up on load
window.addEventListener("load", () => {
  // Delay to allow DOM to settle
  setTimeout(() => {
    logo.classList.remove("opacity-0", "translate-y-6");
    logo.classList.add("opacity-100", "translate-y-0");
  }, 300); // slight delay for effect
});
