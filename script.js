// Year in footer
document.getElementById('year').textContent = new Date().getFullYear();

// Mobile menu toggle
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');
hamburger?.addEventListener('click', () => menu.classList.toggle('open'));

// Smooth reveal on scroll (IntersectionObserver)
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{
    if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); }
  });
},{threshold: 0.12});

document.querySelectorAll('.reveal').forEach(el=>io.observe(el));

// Contact form → open email client
function openMail(){
  const name = encodeURIComponent(document.getElementById('name').value);
  const email = encodeURIComponent(document.getElementById('email').value);
  const subject = encodeURIComponent(document.getElementById('subject').value);
  const message = encodeURIComponent(document.getElementById('message').value);

  const body = `Hi, I'm ${name} (${email}).%0D%0A%0D%0A${message}`;
  window.location.href = `mailto:zumertech@gmail.com?subject=${subject}&body=${body}`;
}

// expose for inline handler
window.openMail = openMail;
