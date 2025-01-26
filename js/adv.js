let slideIndex = 0;
const slideInterval = 3500;
let slideTimer;

function showSlides() {
    const slides = document.getElementsByClassName("adv_slide");
    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    slideIndex++;
    if (slideIndex > slides.length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = slides.length; }
    slides[slideIndex - 1].style.display = "block";
    slideTimer = setTimeout(showSlides, slideInterval);
}

function plusSlides(n) {
    slideIndex += n-1;
    if (slideIndex > document.getElementsByClassName("adv_slide").length) { slideIndex = 1; }
    if (slideIndex < 1) { slideIndex = document.getElementsByClassName("adv_slide").length; }
    clearTimeout(slideTimer);
    showSlides();
}

showSlides();
