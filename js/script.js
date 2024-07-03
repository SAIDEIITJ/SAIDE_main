$(document).ready(function() {
    const backgroundImages = [
        'bg.png',
        'banner1.png',
        'banner2.png',
        'banner3.png',
        'banner4.png',
        'banner5.png',
        'banner6.png',
        'banner7.png',
        'banner8.png',
        'banner9.png',
        'banner10.png',
        'banner11.png',
        'banner12.png',
        'banner13.png',
        'banner14.png',
        'banner15.png',
        'banner16.png',
        'banner17.png',
        'banner18.png',
        'banner19.png',
        'banner20.png',
        'banner21.png',
        'banner22.png',
        'banner23.png',
        'banner24.png',
        'banner25.png',
    ];

   
    const otherImages = [
        'Admissions.png',
        'Alumini.png',
        'bg_text.png',
        'bg2.jpg',
        'BTech.png',
        'campus_master.png',
        'Campus.png',
        'CoE.png',
        'Contact.png',
        'Continuing.png',
        'digital.jpg',
        'Directory.png',
        'Ecosystem.png',
        'Faculty.png',
        'FacultyPositions.png',
        'FAQs.png',
        'footer.png',
        'Governance.png',
        'iitj.png',
        'iitjc.png',
        'Labs.png',
        'loc1.jpeg',
        'loc2.jpeg',
        'loc3.png',
        'logo_bg.png',
        'logo.png',
        'Mission.png',
        'MSR.png',
        'MTech.png',
        'news1.png',
        'news2.png',
        'news3.png',
        'news4.png',
        'news5.png',
        'Outreach.png',
        'paper.png',
        'permanent2.png',
        'PhD.png',
        'ProjectPositions.png',
        'Projects.png',
        'Publications.png',
        'Research.png',
        'SIP.png',
        'Staff.png',
        'Students.png',
        'Themes.png',
        '1.gif',
        '2.gif',
        '3.gif',
        '4.gif',
        '5.gif',
        '6.gif',
        '7.gif',
        '8.gif',
        '9.gif',
        'Robotics.svg',
        'NLP.svg',
        'Intelligence.svg',
        'Economics.svg',
        'DeepLearning.svg',
        'Cognitive.svg',
        // Add more image URLs as needed
    ];

    let currentIndex = 0;

    // Preload images
    function preloadImages(imageArray) {

        for (let i = 0; i < imageArray.length; i++) {
            const img = new Image();
            img.src = `images/${imageArray[i]}`;
        }
    }

    // Call preloadImages to start preloading
    preloadImages(backgroundImages);
    preloadImages(otherImages);

    // Function to change the background image
    function changeBackground() {
        $('.rectangular-div').css('background-image', `url(images/${backgroundImages[currentIndex]})`);
    }

    // Function to show the next background image
    function nextBackground() {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        changeBackground();
    }

    // Function to show the previous background image
    function prevBackground() {
        currentIndex = (currentIndex - 1 + backgroundImages.length) % backgroundImages.length;
        changeBackground();
    }

    // Set interval to automatically change background every 5 seconds
    let intervalId = setInterval(nextBackground, 5000);

    // Event listener for next button click
    $('#nextBtn').click(function() {
        clearInterval(intervalId); // Stop automatic change
        nextBackground(); // Change to the next background
        intervalId = setInterval(nextBackground, 5000); // Restart automatic change
    });

    // Event listener for previous button click
    $('#prevBtn').click(function() {
        clearInterval(intervalId); // Stop automatic change
        prevBackground(); // Change to the previous background
        intervalId = setInterval(nextBackground, 5000); // Restart automatic change
    });

    // Initial background setup
    changeBackground();
});
function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dpdown1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

let scrollInterval = null;
let scrollLength = 300; 

function renderItems(container, items) {
    container.innerHTML = items.map(item => `
     
        <div class="card" id="${item.id}" style="background-image: url(${item.img});">
            ${item.date ? `<div class="inside"><p>${item.date}</p>` : ''}
            <h1><a href="${item.link}" target="_blank" class="card-link">${item.title}</a></h1>
            ${item.date ? '</div>' : ''}
        </div>
   
    `).join('');
}

function showNews() {
    var button = document.querySelector(".dpdown1");
    var newText = "News"; 
    button.childNodes[0].textContent = newText + " ";

    const container = document.getElementById("cardsContainer");
    renderItems(container, newsData); // Render all news items
    scrollContainerToStart(); // Scroll container to the start
    restartScrollInterval();
}

function showEvents() {
    var button = document.querySelector(".dpdown1");
    var newText = "Events"; 
    button.childNodes[0].textContent = newText + " ";

    const container = document.getElementById("cardsContainer");
    renderItems(container, eventData); // Render all event items
    scrollContainerToStart(); // Scroll container to the start
    restartScrollInterval();
}


// Function to scroll the container to the left
function scrollLeft() {
    const container = document.getElementById("cardsContainer");
    container.scrollTo({
        left: container.scrollLeft - scrollLength, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scroll behavior
    });
}

// Function to smoothly scroll the container to the right
function scrollRight() {
    const container = document.getElementById("cardsContainer");
    container.scrollTo({
        left: container.scrollLeft + scrollLength, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scroll behavior
    });

}

// Function to scroll the container to the start
function scrollContainerToStart() {
    const container = document.getElementById("cardsContainer");
    container.scrollLeft = 0;
}

function restartScrollInterval() {
    // Clear previous interval if exists
    if (scrollInterval) {
        clearInterval(scrollInterval);
    }
    // Set new interval for scrolling every 4 seconds
    scrollInterval = setInterval(scrollRight, 4000); // Adjust timing as needed
}

// Event listeners for scroll buttons
$('#scrollLeftButton').click(function() {
    scrollLeft(); // Change to the next background
});

// Event listener for previous button click
$('#scrollRightButton').click(function() {
    scrollRight(); // Change to the previous background
});

restartScrollInterval();

 


document.addEventListener("DOMContentLoaded", () => {
    var deviceWidth = window.innerWidth;
    // Determine which scroll length to use based on device width
    scrollLength = deviceWidth <= 768 ? 340 : 300;
    showNews();
    
});


