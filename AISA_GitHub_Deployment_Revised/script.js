(function(){
  const body = document.body;
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.site-nav');
  if(toggle && nav){
    toggle.addEventListener('click',()=>{
      const open = nav.classList.toggle('open');
      body.classList.toggle('menu-open', open);
      toggle.setAttribute('aria-expanded', String(open));
      toggle.textContent = open ? 'Close' : 'Menu';
    });
    nav.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{
      nav.classList.remove('open'); body.classList.remove('menu-open');
      toggle.setAttribute('aria-expanded','false'); toggle.textContent='Menu';
    }));
  }

  const revealEls = document.querySelectorAll('.reveal');
  if('IntersectionObserver' in window){
    const io = new IntersectionObserver((entries)=>{
      entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.classList.add('is-visible'); io.unobserve(entry.target); }
      });
    },{threshold:.12, rootMargin:'0px 0px -60px 0px'});
    revealEls.forEach(el=>io.observe(el));
  } else { revealEls.forEach(el=>el.classList.add('is-visible')); }

  const faqButtons = document.querySelectorAll('.faq-q');
  faqButtons.forEach(btn=>{
    btn.addEventListener('click',()=>{
      const item = btn.closest('.faq-item');
      const open = item.classList.toggle('open');
      btn.setAttribute('aria-expanded', String(open));
    });
  });

  const form = document.querySelector('.contact-form');
  window.addEventListener('pageshow',()=>{ if(form) form.reset(); });

  const localLinks = document.querySelectorAll('a[href^="#"]');
  localLinks.forEach(link=>{
    link.addEventListener('click', e=>{
      const id = link.getAttribute('href');
      const target = id && id.length>1 ? document.querySelector(id) : null;
      if(target){ e.preventDefault(); target.scrollIntoView({behavior:'smooth', block:'start'}); }
    });
  });
})();
