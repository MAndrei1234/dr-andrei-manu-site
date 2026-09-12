document.addEventListener('DOMContentLoaded',()=>{
  const toggle=document.querySelector('.mobile-toggle');
  const links=document.querySelector('.nav-links');
  if(toggle&&links){toggle.addEventListener('click',()=>links.classList.toggle('open'));}
  const io=new IntersectionObserver(entries=>{
    entries.forEach(e=>{if(e.isIntersecting)e.target.classList.add('visible')})
  },{threshold:.12});
  document.querySelectorAll('.fade-up').forEach(el=>io.observe(el));

  const search=document.querySelector('#librarySearch');
  if(search){
    search.addEventListener('input',()=>{
      const q=search.value.toLowerCase().trim();
      document.querySelectorAll('[data-search]').forEach(card=>{
        card.style.display=card.dataset.search.toLowerCase().includes(q)?'block':'none';
      });
    });
  }
});