addEventListener("DOMContentLoaded", (event) => { 
    console.log("DOM successfully loaded")

    runAnimationSequence(); // Run it first time immediately
    setInterval(runAnimationSequence, 8500); // Repeat every 7200ms


// pRODUCT PAGE CLICK aNIMATION 
const slides = document.querySelectorAll(".image-slide");
const section = document.querySelector(".scroll-section");
const totalSlides = slides.length;

window.addEventListener("scroll", () => {
  const sectionTop = section.offsetTop;
  const sectionHeight = section.offsetHeight;
  const scrollY = window.scrollY;
  console.log("scrolly",scrollY)
  console.log("sectionTop",sectionTop)
  console.log("sectionHeight",sectionHeight)


  // Check if user is in the section
  if (scrollY >= sectionTop && scrollY <= sectionTop + sectionHeight) {
    const scrollPos = scrollY - sectionTop;
    const percentScrolled = scrollPos / sectionHeight;
    const index = Math.min(
      totalSlides - 1,
      Math.floor(percentScrolled * totalSlides)
    );

    slides.forEach((slide, i) => {
      slide.classList.toggle("active", i === index);
    });
  }
});


// what we offer Animation
// whatWeOfferAnimation(10000)

// // hamburger menue

//   document.querySelector('.hamburger').addEventListener('click', function(e) {
//     e.stopPropagation();
//     document.querySelector('.menu').classList.toggle('active');
//   });

//   document.addEventListener('click', function(e) {
//     const menu = document.querySelector('.menu');
//     const hamburger = document.querySelector('.hamburger');
//     if (!menu.contains(e.target) && !hamburger.contains(e.target)) {
//       menu.classList.remove('active');
//     }
//   });

//   document.querySelectorAll('.menu a, .sign-in-btn').forEach(item => {
//     item.addEventListener('click', () => {
//       document.querySelector('.menu').classList.remove('active');
//     });
//   });
  // end
    
})

function runAnimationSequence() {
    loadAnimation(1000, "animationFrameOne", "animationFrameeight");
    loadAnimation(2000, "animationFrameTwo", "animationFrameOne");
    loadAnimation(3000, "animationFrameThree", "animationFrameTwo");
    loadAnimation(4000, "animationFramefour", "animationFrameThree");
    loadAnimation(5000, "animationFramefive", "animationFramefour");
    loadAnimation(6000, "animationFramesix", "animationFramefive");
    loadAnimation(7000, "animationFrameseven", "animationFramesix");
    loadAnimation(8000, "animationFrameeight", "animationFrameseven");
}

function loadAnimation(time, showingElement, hidingElement){
    setTimeout(()=>{

         const showEl = document.getElementById(showingElement);
        const hideEl = document.getElementById(hidingElement);
        
        if (showEl) showEl.style.display = "flex";
        if (hideEl) {
            hideEl.style.display = "none";
        }
    }, time)
}

function whatWeOfferAnimation(time){
    setTimeout(()=>{
        const offerBackground = document.getElementById("whatWeOfferBackground")
        offerBackground.classList.add("offerZoomIn")
        offerBackground.classList.remove("offerZoomOut")

        // offerBackground.removeAttribute("class","offerZoomOut")
    }, time)
}


