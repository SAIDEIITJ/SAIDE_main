$(document).ready(function() {

    const pagebanners = [
        'footer.png',
        'iit.png',
        'logo_bg.png',
        'Logo_IITJ.png',
        'PhD.png',
        'MSR.png',
        'MTech.png',
        'BTech.png',
        'Continuing.png',
        'Courses.png',
        'Contact.png',

        'Research.png',
        'Themes.png',
        'Projects.png',
        'Publications.png',
        'Labs.png',

        'Admissions.png',
        'ProjectPositions.png',
        'postdoc.png',
        'FacultyPositions.png',
        'SIP.png',

        'CoE.png',
        'Faculty.png',
        'Students.png',
        'Alumini.png',
        'Staff.png',
        'Directory.png',



  
        'Campus.png',
        'Ecosystem.png',
        'FAQs.png',

        'Governance.png',

        'Mission.png',
        'Outreach.png',
    ];

   
    const otherImages = [
        'AIhealth.png',
        'brain.png',
        'btech1.png',
        'btech2.png',
        'compEco.png',
        'digital.jpg',
        'economics.png',
        'robot.png',
        'smartCity.png',
        'socialEng.png',
        'theoritical.png',
        'ethics.png',
        'health.png',
        'intelliInfra.png',
        'Cognitive.svg',
        'DeepLearning.svg',
        'economics.svg',
        'Intelligence.svg',
        'NLP.svg',
        'Robotics.svg',
        'mtech1.png',
        'mtech2.png',
        'mtech3.png',
        'news1.png',
        'nextGen.png',
        'vision.png',
        'loc1.jpeg',
        'permanent2.png',
        'loc2.jpeg',
        'loc3.png',
        'campus_master.png',
        '1.gif',
        '2.gif',
        '3.gif',
        '4.gif',
        '5.gif',
        '6.gif',
        '7.gif',
        '8.gif',
        '9.gif'
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

    function preloadBannerImages(bannerArray, startIndex = 0, count) {
        let loadedImages = 0;
        let totalImages = Math.min(count || bannerArray.length, bannerArray.length - startIndex);

        return new Promise((resolve, reject) => {
            for (let i = startIndex; i < startIndex + totalImages; i++) {
                const img = new Image();
                img.src = bannerArray[i].link;
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

    function preloadNextBatch(imageArray, startIndex, batchSize, isBanner = false) {
        if (startIndex < imageArray.length) {
            const preloadFunction = isBanner ? preloadBannerImages : preloadImages;
            preloadFunction(imageArray, startIndex, batchSize).then(() => {
                preloadNextBatch(imageArray, startIndex + batchSize, batchSize, isBanner);
            });
        }
    }

    // Preload the first 4 banners and other images
    Promise.all([
        preloadBannerImages(Banner, 0, 4),
        preloadImages(pagebanners, 0, 4)
    ]).then(() => {
        $('#loading-screen').fadeOut(500, function() {
            $('#main-content').fadeIn(500);
            changeBackground();
            let intervalId = setInterval(nextBackground, 5000);

            preloadNextBatch(Banner, 4, 3, true);
            preloadNextBatch(pagebanners, 4, pagebanners.length);
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

    function changeBackground() {
        $('.rectangular-div').css('background-image', `url(${Banner[currentIndex].link})`);
    }

    function nextBackground() {
        currentIndex = (currentIndex + 1) % Banner.length;
        changeBackground();
    }

    function prevBackground() {
        currentIndex = (currentIndex - 1 + Banner.length) % Banner.length;
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
    scrollLength = deviceWidth <= 768 ? 380 : 418;
    scrollELength = deviceWidth <= 768 ? 575 : 575;
    showNews();
    showEvents();
});



