
const themes = document.querySelectorAll('.theme');

// Get popup elements
const popup = document.getElementById('popup');
const popupTitle = document.getElementById('popup-title');
const popupContent = document.getElementById('popup-content');
const popupDiv = document.getElementById('popup-div');

// Function to open popup
function openPopup(title, hiddenContent,bgImage) {
popupTitle.textContent = title;
// popupContent.textContent = content;
popupDiv.innerHTML = hiddenContent.innerHTML;
popup.style.display = 'block';
popup.style.backgroundImage = bgImage;
}

// Function to close popup
function closePopup() {
popup.style.display = 'none';
popup.style.backgroundImage = '';

}


// Attach click event listener to each theme
themes.forEach(theme => {
theme.addEventListener('click', () => {
const title = theme.querySelector('#h3title').textContent;
const bgImage = theme.getAttribute('data-bg-image');
const hiddenContent = theme.querySelector('.hidden');
openPopup(title, hiddenContent,bgImage);
});
});

// Attach click event listener to close button
document.querySelector('.close').addEventListener('click', closePopup);

// Close popup when clicking outside of it
window.addEventListener('click', (event) => {
if (event.target === popup) {
closePopup();
}
});
