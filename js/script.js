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
        'iit.png',
        'Admissions.png',
        'AIhealth.png',
        'Alumini.png',
        'brain.png',
        'BTech.png',
        'btech1.png',
        'btech2.png',

        'campus_master.png',
        'Campus.png',
        'CoE.png',
        'compEco.png',

        'Contact.png',
        'Continuing.png',
        'digital.jpg',
        'Directory.png',
        'economics.png',

        'Ecosystem.png',
        'ethics.png',

        'Faculty.png',
        'FacultyPositions.png',
        'FAQs.png',
        'footer.png',
        'Governance.png',
        'health.png',
        'iit.png',
        'intellilnfra.png',

        'Labs.png',
        'loc1.jpeg',
        'loc2.jpeg',
        'loc3.png',
        'logo_bg.png',
        'Logo_IITJ.png',

        'Mission.png',
        'MSR.png',
        'MTech.png',
        'mtech1.png',
        'mtech2.png',
        'mtech3.png',


        'news1.png',
        'news2.png',
        'news3.png',
        'news4.png',
        'news5.png',
        'nextGen.png',

        'Outreach.png',
        'permanent2.png',
        'PhD.png',
        'postdoc.png',

        'ProjectPositions.png',
        'Projects.png',
        'Publications.png',
        'Research.png',
        'robot.png',


        'SIP.png',
        'smartCity.png',
        'socialEng.png',


        'Staff.png',
        'Students.png',
        'Themes.png',
        'theoritical.png',
        'vision.png',

        // Add more image URLs as needed
    ];

    let currentIndex = 0;

     lottie.loadAnimation({
        container: document.getElementById('spinner'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: 'js/animation.json' // Path to your animation file
    });

    // Preload images
    function preloadImages(imageArray) {
        let loadedImages = 0;
        let totalImages = imageArray.length;

        return new Promise((resolve, reject) => {
            for (let i = 0; i < imageArray.length; i++) {
                const img = new Image();
                img.src = `images/${imageArray[i]}`;
                img.onload = () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        resolve();
                    }
                };
                img.onerror = () => {
                    loadedImages++;
                    if (loadedImages === totalImages) {
                        resolve();
                    }
                };
            }
        });
    }

    // Call preloadImages to start preloading and handle loading screen
    Promise.all([
        preloadImages(backgroundImages),
        preloadImages(otherImages)
    ]).then(() => {
        $('#loading-screen').fadeOut(500, function() {
            $('#main-content').fadeIn(500);
            changeBackground();
            restartScrollInterval();
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
        });
    });

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
    // let intervalId = setInterval(nextBackground, 5000);

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
let scrollEInterval = null;
let scrollLength = 418; 
let scrollELength = 260;


function renderItems(container, items) {
    container.innerHTML = items.map(item => `
     
        <div class="card" id="${item.id}" style="background-image: url(${item.img});">
            ${item.date ? `<div class="inside"><p>${item.date}</p>` : ''}
            <h1><a href="${item.link}" target="_blank" class="card-link">${item.title}</a></h1>
            ${item.date ? '</div>' : ''}
        </div>
   
    `).join('');
}

function renderEItems(container, items) {
    container.innerHTML = items.map(item => `
        <div class="card Events" id="${item.id}" style="background-image: url(${item.img});">
            ${item.date ? `<div class="inside"><p>${item.date}</p>` : ''}
            <h1><a href="${item.link}" target="_blank" class="card-link">${item.title}</a></h1>
            ${item.date ? '</div>' : ''}
        </div>
    `).join('');
}


function showNews() {
    // var button = document.querySelector(".dpdown1");
    // var newText = "News"; 
    // button.childNodes[0].textContent = newText + " ";

    const container = document.getElementById("cardsContainer");
    renderItems(container, newsData); // Render all news items
    scrollContainerToStart(); // Scroll container to the start
    restartScrollInterval();
}

function showEvents() {
    // var button = document.querySelector(".dpdown1");
    // var newText = "Events"; 
    // button.childNodes[0].textContent = newText + " ";

    const container = document.getElementById("EcardsContainer");
    renderEItems(container, eventData); // Render all event items
    scrollEContainerToStart(); // Scroll container to the start
    restartScrollEInterval();
}

function scrollUp() {
    const container = document.getElementById("EcardsContainer");
    container.scrollTo({
        top: container.scrollTop - scrollELength, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scroll behavior
    });
}

// Function to smoothly scroll the event container down
function scrollDown() {
    const container = document.getElementById("EcardsContainer");
    container.scrollTo({
        top: container.scrollTop + scrollELength, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scroll behavior
    });
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
function scrollEContainerToStart() {
    const container = document.getElementById("EcardsContainer");
    container.scrollTop = 0;
}

function restartScrollInterval() {
    // Clear previous interval if exists
    if (scrollInterval) {
        clearInterval(scrollInterval);
    }
    // Set new interval for scrolling every 4 seconds
    scrollInterval = setInterval(scrollRight, 4000); // Adjust timing as needed
}

function restartScrollEInterval() {
    // Clear previous interval if exists
    if (scrollEInterval) {
        clearInterval(scrollEInterval);
    }
    // Set new interval for scrolling every 4 seconds
    scrollEInterval = setInterval(scrollDown, 4000); // Adjust timing as needed
}


// Event listeners for scroll buttons
$('#scrollLeftButton').click(function() {
    scrollLeft(); // Change to the next background
});

// Event listener for previous button click
$('#scrollRightButton').click(function() {
    scrollRight(); // Change to the previous background
});

$('#scrollUpButton').click(function() {
    scrollUp(); // Change to the next background
});

// Event listener for previous button click
$('#scrollDownButton').click(function() {
    scrollDown(); // Change to the previous background
});

restartScrollInterval();


 


document.addEventListener("DOMContentLoaded", () => {
    var deviceWidth = window.innerWidth;
    // Determine which scroll length to use based on device width
    // scrollLength = deviceWidth <= 768 ? 340 : 340;
    showNews();
    showEvents();
});


