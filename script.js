
// Scroll reveal animation
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add('active');
      io.unobserve(entry.target);
    }
  });
}, {threshold: .12, rootMargin: '0px 0px -10% 0px'});
revealEls.forEach(el => io.observe(el));

// Mobile drawer only for mobile breakpoint
const hamburger = document.querySelector('.hamburger');
const drawer = document.getElementById('mobileDrawer');
function closeDrawer(){
  drawer.classList.remove('open');
  hamburger?.setAttribute('aria-expanded','false');
  document.body.style.overflow = '';
}
function openDrawer(){
  drawer.classList.add('open');
  hamburger?.setAttribute('aria-expanded','true');
  document.body.style.overflow = 'hidden';
}
if(hamburger && drawer){
  hamburger.addEventListener('click', () => {
    if(drawer.classList.contains('open')) closeDrawer();
    else openDrawer();
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  // Close on ESC
  window.addEventListener('keydown', (e) => {
    if(e.key === 'Escape' && drawer.classList.contains('open')) closeDrawer();
  });
  // Ensure closed on resize to desktop
  const mq = window.matchMedia('(min-width: 821px)');
  const handle = () => { if(mq.matches) closeDrawer(); };
  mq.addEventListener('change', handle);
  handle();
}
