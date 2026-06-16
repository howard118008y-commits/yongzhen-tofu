/* 永貞臭豆腐 — 加盟支援分頁 共用互動 */
(function(){
  // 進場 reveal
  const io = new IntersectionObserver((es)=>{
    es.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('in'); io.unobserve(e.target);} });
  },{threshold:.16, rootMargin:"0px 0px -8% 0px"});
  document.querySelectorAll('.reveal:not(.in)').forEach(el=>io.observe(el));

  // 圖片 blur-up
  document.querySelectorAll('img.img-fade').forEach(img=>{
    if(img.complete && img.naturalWidth>0) img.classList.add('loaded');
    else { img.addEventListener('load', ()=>img.classList.add('loaded'), {once:true}); img.addEventListener('error', ()=>img.classList.add('loaded'), {once:true}); }
  });

  // 浮動撥電話
  const fc = document.getElementById('floatingCall');
  if(fc){
    const onScroll = ()=>{ fc.classList.toggle('show', window.scrollY > window.innerHeight*0.5); };
    window.addEventListener('scroll', onScroll, {passive:true});
    onScroll();
  }

  // Lightbox
  const lb = document.getElementById('lightbox');
  if(lb){
    const lbImg = lb.querySelector('.lb-img'), lbCap = lb.querySelector('.lb-cap');
    const open = (s,a)=>{ lbImg.src=s; lbImg.alt=a||''; lbCap.textContent=a||''; lb.classList.add('open'); lb.setAttribute('aria-hidden','false'); document.body.style.overflow='hidden'; };
    const close = ()=>{ lb.classList.remove('open'); lb.setAttribute('aria-hidden','true'); document.body.style.overflow=''; setTimeout(()=>{ lbImg.src=''; }, 300); };
    document.querySelectorAll('.lb-target').forEach(img=>{ img.addEventListener('click', e=>{ e.preventDefault(); open(img.currentSrc||img.src, img.alt); }); });
    lb.addEventListener('click', e=>{ if(e.target===lb || e.target.classList.contains('lb-close')) close(); });
    document.addEventListener('keydown', e=>{ if(e.key==='Escape' && lb.classList.contains('open')) close(); });
  }
})();
