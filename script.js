addEventListener("DOMContentLoaded", (event) => { 
    console.log("DOM successfully loaded")

    runAnimationSequence(); // Run it first time immediately
    setInterval(runAnimationSequence, 8500); // Repeat every 7200ms



    function productEntrance(){
    document.getElementById("productEnterFace").addEventListener('click', ()=>{
        const banner = document.getElementById("banner")
        const buttonLink = document.getElementById("buttonLink")
        const button = document.getElementById("button")
        // if(banner.alt === ""){

        banner.setAttribute("alt", "finversity");
        banner.setAttribute("src", "./img/finversitybanner.svg")
        banner.style.opacity = 1
        banner.style.display = "block"
        button.style.display="block"
        buttonLink.setAttribute("href", "https://www.fineforindia.in")
        buttonLink.style.opacity = 1
        buttonLink.style.zIndex = 1
        button.style.right = "-48rem";
        button.style.top = "-12rem";

        // }

    })
}
productEntrance()

    document.getElementById("banner").addEventListener("click", ()=>{
        const banner = document.getElementById("banner")
        const buttonLink = document.getElementById("buttonLink")
        const button = document.getElementById("button")

        if(banner.alt === "finversity"){
            banner.setAttribute("alt", "nova");
        banner.setAttribute("src", "./img/NovaBanner.svg")
        banner.style.opacity = 1
        buttonLink.setAttribute("href", "https://novawealth.in/")
        buttonLink.style.opacity = 1
        button.style.right = "-9.2rem";
        button.style.top = "-11rem";

        console.log(banner.alt)
        }

        else if(banner.alt === "nova"){
            banner.setAttribute("alt", "nebulaone");
        banner.setAttribute("src", "./img/NebulaOneBanner.svg")
        banner.style.opacity = 1
        buttonLink.setAttribute("href", "https://www.nebulaone.in/")
        buttonLink.style.opacity = 1
        button.style.right = "-44.2rem";
        button.style.top = "-9rem";
        
        console.log(banner.alt)
        }
        else if(banner.alt === "nebulaone"){
            // banner.setAttribute("alt", "finversity");
            // banner.setAttribute("src", "./img/finversitybanner.svg")
            banner.style.display="none" 
        button.style.display="none"

                //    button.style.zIndex= "-1"
            productEntrance()
        // banner.style.opacity = 0
        // // buttonLink.setAttribute("href", "https://www.fineforindia.in")
        // buttonLink.style.opacity = 0
        }
    })

    
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


