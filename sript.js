let burger = document.querySelector(".burger");
let navMenu = document.querySelector(".nav_menu");
burger.addEventListener("click", function(){
    navMenu.classList.toggle("active")
});



var swiper = new Swiper(".mySwiper", {
    effect: "cards",
    navigation: {
        nextEl: ".custumer_button1",
        prevEl: ".custumer_button2",
      },
  });


let navBar = document.querySelector("nav");

window.addEventListener("scroll", function(){
  if(document.documentElement.scrollTop >= 100){
    navBar.style.backgroundColor = "#23567e";

  } else {
    navBar.style.backgroundColor = "transparent";
  }
})
