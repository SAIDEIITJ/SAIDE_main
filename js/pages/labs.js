const themes = document.querySelectorAll('.theme');
let currentIndex = 0;

// Get popup elements
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDiv = document.getElementById('popup-div');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');
const carouselInner = document.getElementById('carousel-inner');
const carouselDots = document.getElementById('carousel-dots');

// Function to open popup
function openPopup(index) {
    const theme = themes[index];
    const title = theme.querySelector('#h3title').textContent;
    const hiddenContent = theme.querySelector('.hidden');
    const bgImage = theme.getAttribute('data-bg-image');
    const images = JSON.parse(theme.getAttribute('data-images')); // Parse images from the data attribute

    currentIndex = index;
    popupTitle.textContent = title;
    popupDiv.innerHTML = hiddenContent.innerHTML;
    popup.style.display = 'block';
    popup.style.backgroundImage = bgImage;

    // Populate carousel with images
    carouselInner.innerHTML = '';
    carouselDots.innerHTML = ''; // Clear previous dots

    images.forEach((image, imgIndex) => {
        const imgDiv = document.createElement('div');
        imgDiv.className = imgIndex === 0 ? 'carousel-item active' : 'carousel-item';
        imgDiv.innerHTML = `<img src="${image}" alt="Slide ${imgIndex + 1}">`;
        carouselInner.appendChild(imgDiv);

        // Create dot for each image
        const dot = document.createElement('span');
        dot.className = imgIndex === 0 ? 'dot active' : 'dot';
        dot.addEventListener('click', () => {
            currentIndex = imgIndex; // Update currentIndex to the clicked dot index
            showSlides(currentIndex); // Show the corresponding slide
        });
        carouselDots.appendChild(dot);
    });

    nextButton.style.display = (currentIndex < themes.length - 1) ? 'block' : 'none';
    prevButton.style.display = (currentIndex > 0) ? 'block' : 'none';

    // Show the first slide
    showSlides(currentIndex);
}

// Function to show slides based on index
function showSlides(index) {
    const slides = document.querySelectorAll('.carousel-item');
    const dots = document.querySelectorAll('.dot');

    if (index >= slides.length) { currentIndex = 0; }
    if (index < 0) { currentIndex = slides.length - 1; }

    slides.forEach(slide => slide.style.display = 'none');
    dots.forEach(dot => dot.classList.remove('active'));

    slides[currentIndex].style.display = 'block';
    dots[currentIndex].classList.add('active');
}

// Function to close popup
function closePopup() {
    popup.style.display = 'none';
}

// Function to show next theme
function showNextTheme() {
    if (currentIndex < themes.length - 1) {
        openPopup(currentIndex + 1);
    }
}

// Function to show previous theme
function showPrevTheme() {
    if (currentIndex > 0) {
        openPopup(currentIndex - 1);
    }
}

// Attach click event listener to each theme
themes.forEach((theme, index) => {
    theme.addEventListener('click', () => {
        openPopup(index);
    });
});

// Attach click event listener to close button
document.querySelector('.close').addEventListener('click', closePopup);

// Attach click event listeners to next and prev buttons
nextButton.addEventListener('click', showNextTheme);
prevButton.addEventListener('click', showPrevTheme);

// Close popup on Escape key press
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        closePopup();
    } else if (event.key === 'ArrowRight') {
        showNextTheme();
    } else if (event.key === 'ArrowLeft') {
        showPrevTheme();
    }
});
