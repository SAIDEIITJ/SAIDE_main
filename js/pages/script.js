
$(document).ready(function() {
    const backgroundImages = [
        'iit.png',
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

    const pagebanners = [
        'Admissions.png',
        'Alumini.png',
        'BTech.png',
        'Campus.png',
        'CoE.png',
        'Contact.png',
        'Continuing.png',
        'Directory.png',
        'Ecosystem.png',
        'Faculty.png',
        'FacultyPositions.png',
        'FAQs.png',
        'footer.png',
        'Governance.png',
        'Labs.png',
        'logo_bg.png',
        'Logo_IITJ.png',
        'Mission.png',
        'MSR.png',
        'MTech.png',
        'Outreach.png',
        'PhD.png',
        'postdoc.png',
        'ProjectPositions.png',
        'Projects.png',
        'Publications.png',
        'Research.png',
        'SIP.png',
        'Staff.png',
        'Students.png',
        'Themes.png',
    ];

    const otherImages = [
        'AIhealth.png',
        'brain.png',
        'btech1.png',
        'btech2.png',
        'campus_master.png',
        'compEco.png',
        'digital.jpg',
        'economics.png',
        'ethics.png',
        'health.png',
        'intelliInfra.png',
        'loc1.jpeg',
        'loc2.jpeg',
        'loc3.png',
        'mtech1.png',
        'mtech2.png',
        'mtech3.png',
        'news1.png',
        'nextGen.png',
        'permanent2.png',
        'robot.png',
        'smartCity.png',
        'socialEng.png',
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
        path: 'js/animation.json'
    });

    function preloadImages(imageArray, startIndex = 0, count) {
        let loadedImages = 0;
        let totalImages = Math.min(count || imageArray.length, imageArray.length - startIndex);

        return new Promise((resolve, reject) => {
            for (let i = startIndex; i < startIndex + totalImages; i++) {
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

    function preloadNextBatch(imageArray, startIndex, batchSize) {
        if (startIndex < imageArray.length) {
            preloadImages(imageArray, startIndex, batchSize).then(() => {
                preloadNextBatch(imageArray, startIndex + batchSize, batchSize);
            });
        }
    }

    // Preload the first 3 banners and other images
    Promise.all([
        preloadImages(backgroundImages, 0, 3),
        preloadImages(pagebanners, 0, 5)
    ]).then(() => {
        $('#loading-screen').fadeOut(500, function() {
            $('#main-content').fadeIn(500);
            changeBackground();
            restartScrollInterval();
            let intervalId = setInterval(nextBackground, 5000);

            preloadNextBatch(backgroundImages, 3, 3); // Load background banners
            preloadNextBatch(pagebanners, 5, 5);
            preloadNextBatch(otherImages, 0, otherImages.length);    

            $('#nextBtn').click(function() {
                clearInterval(intervalId);
                nextBackground();
                intervalId = setInterval(nextBackground, 5000);
            });

            $('#prevBtn').click(function() {
                clearInterval(intervalId);
                prevBackground();
                intervalId = setInterval(nextBackground, 5000);
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
let scrollELength = 575; 


function showNews() {

    const container = document.getElementById("cardsContainer");
    scrollContainerToStart(); // Scroll container to the start
    restartScrollInterval();
}

function showEvents() {

    const container = document.getElementById("EcardsContainer");
    scrollEContainerToStart(); // Scroll container to the start
    restartScrollEInterval();
}

function scrollELeft() {
    const container = document.getElementById("EcardsContainer");
    container.scrollTo({
        left: container.scrollLeft- scrollELength, // Adjust scroll amount as needed
        behavior: 'smooth' // Smooth scroll behavior
    });
}
// Function to smoothly scroll the event container down
function scrollERight() {
    const container = document.getElementById("EcardsContainer");
    container.scrollTo({
        left: container.scrollLeft + scrollELength, // Adjust scroll amount as needed
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
    const Econtainer = document.getElementById("EcardsContainer");
   Econtainer.scrollLeft = 0;
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
    scrollEInterval = setInterval(scrollERight, 4000); // Adjust timing as needed
}


// Event listeners for scroll buttons
$('#scrollLeftButton').click(function() {
    scrollLeft(); // Change to the next background
});

// Event listener for previous button click
$('#scrollRightButton').click(function() {
    scrollRight(); // Change to the previous background
});

$('#scrollELeftButton').click(function() {
    scrollELeft(); // Change to the next background
});

// Event listener for previous button click
$('#scrollERightButton').click(function() {
    scrollERight(); // Change to the previous background
});

restartScrollInterval();
restartScrollEInterval();

 


document.addEventListener("DOMContentLoaded", () => {
    var deviceWidth = window.innerWidth;
    // Determine which scroll length to use based on device width
    // scrollLength = deviceWidth <= 768 ? 340 : 340;
    showNews();
    showEvents();
});


