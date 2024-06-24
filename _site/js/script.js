$(document).ready(function() {
    const backgroundImages = [
        'bg.png',
        'Banners-2.png',
        'Banners-1.png',
        'Banners-4.png',
        'Banners-5.png',
        'Banners-6.png',
        'Banners-7.png',
        'Banners-8.png',
        'Banners-9.png',
        'Banners-10.png',
        'Banners-11.png',
        'Banners-3.png',
    ];

    let currentIndex = 0;

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


//  const newsData = [

//     { id: "news-card-1", title: "Selected Candidates for PhD Program (2024–25 Semester-I, July 2024)", date: "JULY, 2024", content: "Gakjs akljshd coia aklsuhd ausdc asoich auosy saou...", img: "images/news2.png" },
//     { id: "news-card-2", title: "Selected Candidates for PhD Program in CMCE (2024–25 Semester-I, July 2024)", date: "JULY, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/news5.png" },
//     { id: "news-card-3", title: "Selected Candidates for MS by Research Program in CMCE (2024–25 Semester-I, July 2024)", date: "JULY, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/news3.png" },
//     { id: "news-card-4", title: "Selected Candidates for MS by Research Program in CII (2024–25 Semester-I, July 2024)", date: "JULY, 2024", content: "Gakjs akljshd coia aklsuhd ausdc asoich auosy saou...", img: "images/news2.png" },
//     { id: "news-card-5", title: "Indicative projects for upcoming PhD admission cycle, Sem-I, 2024-2025", date: "JULY, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/news5.png" },
//     { id: "news-card-6", title: "Selected Candidates for Summer Internship Program 2024", date: "JULY, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/news3.png" },
//     { id: "news-card-7", title: "Rolling Advertisement for Admission to Ph.D. Program at CMCE, AIDE, IITJ", date: "JULY, 2024", content: "Gakjs akljshd coia aklsuhd ausdc asoich auosy saou...", img: "images/news2.png" },
//     { id: "news-card-8", title: "Rolling Advertisement for Admission to Ph.D. Program", date: "MAY, 2024", content: "Mas asjd cioue c asu coausc clow dcwl sdcoua couc el...", img: "images/news4.png" },
//     { id: "news-card-9", title: "Rolling Advertisement for Faculty Hiring", date: "JULY, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/news3.png" },

//     // Add more news items here
// ];
// console.log(newsData);

// Define an object for storing events
//  const eventData = [
//     { id: "event-card-1", date: "12 June 2024", title: "M.S. by Research in Next Generation AI", content: "Details of event 1...", icon: "fas fa-calendar-alt",  img: "images/news4.png"},
//     { id: "event-card-2", date: "13 June 2024", title: "M.S. by Research in Computational Economics", content: "Details of event 2...", icon: "fas fa-calendar-check", img: "images/news5.png" },
//     { id: "event-card-3", date: "14 June 2024", title: "M.S. by Research in Intelligent Infrastructure", content: "Details of event 3...", icon: "fa-solid fa-computer", img: "images/news1.png"},
//     { id: "event-card-4", date: "12 June 2024", title: "M.S. by Research in Precision Healthcare and Integrative Medicine", content: "Details of event 1...", icon: "fas fa-calendar-alt",  img: "images/news4.png"},
//     { id: "event-card-5", date: "13 June 2024", title: "M.Tech. in AR VR", content: "Details of event 2...", icon: "fas fa-calendar-check", img: "images/news5.png" },
//     { id: "event-card-6", date: "14 June 2024", title: "M.Tech. in AR VR (for Working Professionals)", content: "Details of event 3...", icon: "fa-solid fa-computer", img: "images/news1.png"},
//     { id: "event-card-7", date: "12 June 2024", title: "M.Tech. in DCS (for Working Professionals)", content: "Details of event 1...", icon: "fas fa-calendar-alt",  img: "images/news4.png"},
//     // Add more event items here
// ];

{/*  */}
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
    scrollLength = deviceWidth <= 768 ? 450 : 300;
    showNews();
    
    
    const menuToggle = document.getElementById("menu-toggle");
    const navContent = document.getElementById("nav-content");

    menuToggle.addEventListener("click", function () {
      if (navContent.style.display === "block") {
        navContent.style.display = "none";
      } else {
        navContent.style.display = "block";
      }
    });
});


