document.querySelectorAll('a[href^="#"]').forEach((link)=>{link.addEventListener("click",()=>{const nav=document.querySelector(".site-header nav");if(nav)nav.removeAttribute("data-open")})});
