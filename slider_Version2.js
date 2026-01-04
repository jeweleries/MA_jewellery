// Simple slider for the promotional "Early Discount 15%" banner
document.addEventListener('DOMContentLoaded', () => {
  const slider = document.getElementById('promoSlider');
  if (!slider) return;

  const slides = Array.from(slider.querySelectorAll('.slide'));
  const prevBtn = slider.querySelector('.slider-prev');
  const nextBtn = slider.querySelector('.slider-next');
  const dotsContainer = document.getElementById('sliderDots');
  let current = 0;
  let intervalId = null;
  const AUTO_MS = 4000; // auto-advance every 4s

  // build dots
  slides.forEach((_, idx) => {
    const btn = document.createElement('button');
    if (idx === 0) btn.classList.add('active');
    btn.setAttribute('aria-label', `Go to slide ${idx+1}`);
    btn.addEventListener('click', () => goTo(idx));
    dotsContainer.appendChild(btn);
  });
  const dots = Array.from(dotsContainer.children);

  function show(idx) {
    slides.forEach(s => s.classList.remove('active'));
    dots.forEach(d => d.classList.remove('active'));
    slides[idx].classList.add('active');
    dots[idx].classList.add('active');
    current = idx;
  }

  function next() {
    const nx = (current + 1) % slides.length;
    show(nx);
  }

  function prev() {
    const p = (current - 1 + slides.length) % slides.length;
    show(p);
  }

  function goTo(idx) {
    show(idx);
    restartAuto();
  }

  prevBtn && prevBtn.addEventListener('click', () => { prev(); restartAuto(); });
  nextBtn && nextBtn.addEventListener('click', () => { next(); restartAuto(); });

  function startAuto() {
    stopAuto();
    intervalId = setInterval(next, AUTO_MS);
  }
  function stopAuto() {
    if (intervalId) {
      clearInterval(intervalId);
      intervalId = null;
    }
  }
  function restartAuto() {
    stopAuto();
    startAuto();
  }

  // pause on hover/focus for better UX
  slider.addEventListener('mouseenter', stopAuto);
  slider.addEventListener('mouseleave', startAuto);
  slider.addEventListener('focusin', stopAuto);
  slider.addEventListener('focusout', startAuto);

  // initialize
  show(0);
  startAuto();
});