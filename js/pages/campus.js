const imageInfo = [
    { title: "Loc 1", description: "Dnunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integ." },
    { title: "Loc 2", description: "Nunc lacinia ante nunc ac lobortis. Interdum adipiscing gravida odio porttitor sem non mi integcription. " },
    { title: "Loc 3", description: "Tis interdum adipiscing gravida odio porttitor sem non mi integ." }
];

let currentSlide = 0;

function showSlide(index) {
    const slides = document.getElementById('slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    if (index >= totalSlides) {
        currentSlide = 0;
    } else if (index < 0) {
        currentSlide = totalSlides - 1;
    } else {
        currentSlide = index;
    }
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    updateInfo(currentSlide);
}

function updateInfo(index) {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    title.textContent = imageInfo[index].title;
    description.textContent = imageInfo[index].description;
}

function nextSlide() {
    showSlide(currentSlide + 1);
}

function prevSlide() {
    showSlide(currentSlide - 1);
}

function goToSlide(index) {
    showSlide(index);
}

// Initialize the first slide info
updateInfo(currentSlide);
