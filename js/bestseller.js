const carousels = {
    books: { index: 0 },
    games: { index: 0 },
    stationary: { index: 0 }
};

function moveSlide(id, direction) {
    const carousel = carousels[id];
    const slides = document.querySelector(`#${id} .carousel-slide`);
    const images = slides.getElementsByTagName('img');
    carousel.index += direction;

    if (carousel.index >= images.length) {
        carousel.index = 0;
    } else if (carousel.index < 0) {
        carousel.index = images.length - 1;
    }

    const width = images[carousel.index].clientWidth;
    slides.style.transform = `translateX(${-width * carousel.index}px)`;
}

window.addEventListener('resize', () => {
    for (const id in carousels) {
        const carousel = carousels[id];
        const slides = document.querySelector(`#${id} .carousel-slide`);
        const images = slides.getElementsByTagName('img');
        const width = images[carousel.index].clientWidth;
        slides.style.transform = `translateX(${-width * carousel.index}px)`;
    }
});
