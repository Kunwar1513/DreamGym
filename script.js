gsap.registerPlugin(ScrollTrigger);

// Define animations using ScrollTrigger
gsap.to(".about-us", {
    opacity: 1,
    x: 0,
    duration: 1,
    scrollTrigger: {
        trigger: ".about-us",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
    },
});

gsap.to(".services", {
    opacity: 1,
    x: 0,
    duration: 2.5,
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
    },
});
gsap.to(".gallery", {
    opacity: 1,
    x: 0,
    duration: 3.5,
    scrollTrigger: {
        trigger: ".gallery",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
    },
});
gsap.to(".contact", {
    opacity: 1,
    x: 0,
    duration: 2,
    scrollTrigger: {
        trigger: ".services",
        start: "top 80%",
        end: "top 20%",
        toggleActions: "play none none reverse",
    },
});


const loader = document.getElementById("loader");

window.addEventListener("load",function(){
    setTimeout(()=>{
        loader.style.display="none";
        },500);
})

function showMenu() {
    const show = document.getElementById("nav-links");
    show.classList.remove("active");
  }
  function hideMenu() {
    const show = document.getElementById("nav-links");
    show.classList.add("active");
  }

  let overlay = document.querySelector(".galleryOverlay");
  let imageBox = document.querySelector(".imgBox");
  var img = document.querySelector(".imgBox img");
  let close1 = document.querySelector(".imgBox span")


  let gallery = document.querySelector("#gallery");
  gallery.addEventListener("click",(event)=>{
      let currentImagePath = event.target.src;
    if(currentImagePath!==undefined){
        overlay.classList.add('galleryOverlayShow');
        imageBox.classList.add('imgBoxShow');
        img.src = currentImagePath;
    }
    
    close1.addEventListener("click",()=>{
        overlay.classList.remove('galleryOverlayShow');
        imageBox.classList.remove('imgBoxShow');        
    })

  })
