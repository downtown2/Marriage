// LOADER
window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  if(loader){
    loader.classList.add("hidden");
  }
});

// PAGE TRANSITION
document.querySelectorAll("a").forEach(link => {
  if(link.hostname === window.location.hostname){
    link.addEventListener("click", function(e){
      e.preventDefault();
      document.body.classList.add("fade-out");
      setTimeout(() => {
        window.location = this.href;
      }, 400);
    });
  }
});

// AUTO YEAR
const y = document.getElementById("y");
if(y){
  y.textContent = new Date().getFullYear();
}

// DARK MODE
const toggle = document.getElementById("darkToggle");
if(toggle){
  toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    localStorage.setItem("darkMode",
      document.body.classList.contains("dark"));
  });

  if(localStorage.getItem("darkMode") === "true"){
    document.body.classList.add("dark");
  }
}

// TESTIMONIAL SLIDER
let slides = document.querySelectorAll(".slide");
let index = 0;

if(slides.length > 0){
  slides[0].classList.add("active");

  setInterval(() => {
    slides[index].classList.remove("active");
    index = (index + 1) % slides.length;
    slides[index].classList.add("active");
  }, 4000);
}

// PWA REGISTER
if("serviceWorker" in navigator){
  navigator.serviceWorker.register("sw.js");
}