const faqs=document.querySelectorAll(".faq");
faqs.forEach(faq => {
   faq.addEventListener("click",()=>
   {
    faq.classList.toggle("active");
    
   }
   );
});

function openpoup(){
   register.classList.add("open-popup");
}