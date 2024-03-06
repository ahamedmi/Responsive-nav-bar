let button = document.querySelector(".arrow");
let link = document.querySelector(".nav-links");

button.addEventListener("click",()=>{
   /*  link.classList.add("display"); */
   link.classList.toggle("display");
   button.children[0].classList.toggle("toggle0");
   button.children[1].classList.toggle("toggle1");
   button.children[2].classList.toggle("toggle2");
})