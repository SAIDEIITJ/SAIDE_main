
const themes = document.querySelectorAll('.theme');
let currentIndex = 0;

// Get popup elements
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupDiv = document.getElementById('popup-div');
const nextButton = document.getElementById('next-button');
const prevButton = document.getElementById('prev-button');

// Function to open popup
function openPopup(index) {
    const theme = themes[index];
    const title = theme.querySelector('#h3title').textContent;
    const hiddenContent = theme.querySelector('.hidden');
    const bgImage = theme.getAttribute('data-bg-image');

    currentIndex = index;
    popupTitle.textContent = title;
    popupDiv.innerHTML = hiddenContent.innerHTML;
    popup.style.display = 'block';
    popup.style.backgroundImage = bgImage;

    nextButton.style.display = (currentIndex < themes.length - 1) ? 'block' : 'none';
    prevButton.style.display = (currentIndex > 0) ? 'block' : 'none';
}

// Function to close popup
function closePopup() {
    popup.style.display = 'none';
    popup.style.backgroundImage = '';
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



document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
      closePopup();
    }
  });

  