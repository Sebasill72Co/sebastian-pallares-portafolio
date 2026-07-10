const progress=document.getElementById("progress");
if(progress){window.addEventListener("scroll",()=>{const t=document.documentElement.scrollHeight-innerHeight;progress.style.width=t>0?((scrollY/t)*100)+"%":"0%"},{passive:true});}
const year=document.getElementById("year");if(year)year.textContent=new Date().getFullYear();
