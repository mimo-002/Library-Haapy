window.addEventListener("load",()=>{
  const loader=document.getElementById("loader");
  setTimeout(()=>loader&&loader.classList.add("done"),650);
});
const observer=new IntersectionObserver(entries=>{
  entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add("visible");observer.unobserve(e.target)}});
},{threshold:.12});
document.querySelectorAll(".reveal").forEach(el=>observer.observe(el));

document.addEventListener("mousemove",e=>{
  document.querySelectorAll(".hero-art .toy").forEach((el,i)=>{
    const speed=(i+1)*.006;
    el.style.transform=`translate(${(e.clientX-innerWidth/2)*speed}px,${(e.clientY-innerHeight/2)*speed}px)`;
  });
});
