// HERO IMAGE TITLE ANIMATION
const tl = new TimelineMax()

tl.from(".hero-title", .6, {
    opacity: 0,
    y: -24,
    ease: Expo.easeInOut
}).from('.hero-button', .1, {
    opacity: 0,
    x: -40,
    ease: Expo.easeInOut
});

// SHOP BIKES ANIMATION
gsap.from(".bike-card", {
    duration: 1.5,
    scale: 0.5, 
    opacity: 0, 
    delay: 0.5, 
    stagger: 0.2,
    ease: "elastic", 
});


// PRODUCT FEATURES ANIMATIONS
gsap.to(".circle-outline", 1, {
    scale: 0.9, 
    yoyo: true, 
    repeat: -1, 
    ease: "power1.inOut",
});

let circleIndicators = document.querySelectorAll('.circle-indicator');
let productPicture = document.querySelector('.product-picture');
let productTitle = document.querySelector('.product-title');

circleIndicators.forEach(indicator => {
    indicator.addEventListener('click', event => {
        if (indicator.id === "indicator1") {
            productPicture.src = "images/wheel.jpg";
            productTitle.innerHTML = "PREMIUM WHEELS <span>$60</span>";
        } else if (indicator.id === "indicator2") {
            productPicture.src = "images/helmet.jpg";
            productTitle.innerHTML = "BIKE HELMET <span>$35</span>";
        } else {
            productPicture.src = "images/seat.jpg";
            productTitle.innerHTML = "BIKE SEAT <span>$25</span>";
        }

        gsap.from(".product-picture", {
            duration: 0.5, 
            opacity: 0, 
            y: -100, 
            ease: "back.out"
        });
    })

})




