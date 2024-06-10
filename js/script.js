const colors = ["#ff0000", "#00ff00", "#0000ff", "#ffff00", "#ff00ff", "#00ffff", "#ff8800", "#8800ff", "#0088ff"];
function getRandomColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}
// function isHomePage() {
//     return window.location.pathname === '/SAIDE_main/index.html' || window.location.pathname === '/';
//   }

//   // Wait for the DOM content to be fully loaded
//   document.addEventListener('DOMContentLoaded', function() {
//     console.log('Current page:', window.location.pathname);
//     console.log('Is home page:', isHomePage());

//     // Check if the current page is the home page
//     if (isHomePage()) {
//       console.log('Adding class for navbar without background color');
//       document.querySelector('.navbar-container').classList.add('navbar-no-bg');
//     } else {
//       console.log('Adding class for navbar with background color');
//       document.querySelector('.navbar-container').classList.add('navbar-bg');
//     }
//   });
$(document).ready(function() {
    const backgroundImages = [
        'bg.png',
        'Programs.png',
        'ar.png',
        'ms.png',
        'btech.png', // Change to your image paths 
    ];

    let currentIndex = 0;
    function changeBackground() {
        currentIndex = (currentIndex + 1) % backgroundImages.length;
        // const randomColor = getRandomColor();
        // $('.background').css('background-image', `url(images/${backgroundImages[currentIndex]})`);
        // $('.background').css('background-color',randomColor);
        $('.rectangular-div').css('background-image', `url(images/${backgroundImages[currentIndex]})`);
    }

    setInterval(changeBackground, 5000); // Change image every 5 seconds
});

$('#carouselExampleSlidesOnly').carousel({
interval: 6000
})

function toggleDropdown() {
    document.getElementById("dropdownMenu").classList.toggle("show");
}

window.onclick = function(event) {
    if (!event.target.matches('.dropdown1')) {
        var dropdowns = document.getElementsByClassName("dropdown-content1");
        for (var i = 0; i < dropdowns.length; i++) {
            var openDropdown = dropdowns[i];
            if (openDropdown.classList.contains('show')) {
                openDropdown.classList.remove('show');
            }
        }
    }
}

 const newsData = [
    { id: "news-card-1", title: "News Title 1", date: "MAY 29, 2024", content: "Mas asjd cioue c asu coausc clow dcwl sdcoua couc el...", img: "images/user.jpg" },
    { id: "news-card-2", title: "News Title 2", date: "MAY 28, 2024", content: "Gakjs akljshd coia aklsuhd ausdc asoich auosy saou...", img: "images/digital.jpg" },
    { id: "news-card-3", title: "News Title 3", date: "MAY 28, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/digital.jpg" },


    // Add more news items here
];


// Define an object for storing events
 const eventData = [
    { id: "event-card-1", date: "12 June 2024", title: "Event Title 1", content: "Details of event 1...", icon: "fas fa-calendar-alt"},
    { id: "event-card-2", date: "13 June 2024", title: "Event Title 2", content: "Details of event 2...", icon: "fas fa-calendar-check" },
    { id: "event-card-3", date: "14 June 2024", title: "Event Title 3", content: "Details of event 3...", icon: "fa-solid fa-computer"},
    { id: "event-card-1", date: "12 June 2024", title: "Event Title 1", content: "Details of event 1...", icon: "fas fa-calendar-alt"},
    { id: "event-card-2", date: "13 June 2024", title: "Event Title 2", content: "Details of event 2...", icon: "fas fa-calendar-check" },
    { id: "event-card-3", date: "14 June 2024", title: "Event Title 3", content: "Details of event 3...", icon: "fa-solid fa-computer"},
    { id: "event-card-1", date: "12 June 2024", title: "Event Title 1", content: "Details of event 1...", icon: "fas fa-calendar-alt"},
    { id: "event-card-2", date: "13 June 2024", title: "Event Title 2", content: "Details of event 2...", icon: "fas fa-calendar-check" },

    // Add more event items here
];

function renderItems(container, items) {
    container.innerHTML = items.map(item => `
        <div class="card" id="${item.id}">
            ${item.date ? `<div class="inside"><p>${item.date}</p>` : ''}
            <h1>${item.title}</h1>
            ${item.date ? '</div>' : ''}
        </div>
    `).join('');
}

function showNews() {
    var button = document.querySelector(".dropdown1");
    var newText = "News"; 
    button.childNodes[0].textContent = newText + " ";

    const container = document.getElementById("cardsContainer");
    renderItems(container, newsData.slice(0, 8));

    // const container2 = document.getElementById("cardsContainer2");
    // renderItems(container2, newsData.slice(8));

    applyBackgroundImages();
}

function showEvents() {
    var button = document.querySelector(".dropdown1");
    var newText = "Events"; 
    button.childNodes[0].textContent = newText + " ";

    const container = document.getElementById("cardsContainer");
    renderItems(container, eventData.slice(0, 8));

    // const container2 = document.getElementById("cardsContainer2");
    // renderItems(container2, eventData.slice(8));

    applyBackgroundImages(true);
}

function applyBackgroundImages(isEvent = false) {
    const cards1 = document.querySelectorAll(".card");
    // console.log(cards1);
    const cards2 = document.querySelectorAll(".cards");
    const temp = isEvent; 
    // console.log(temp);
    const images2 = temp ? [
        "images/sk5.jpg",
        "images/sk4.jpg",
        "images/sk3.jpg",
        "images/sk2.jpg",
        "images/sk1.jpg",
        "images/darkness.jpg",
    ]:[
        "images/darkness.jpg",
        "images/sk1.jpg",
        "images/sk2.jpg",
        "images/sk3.jpg",
        "images/sk4.jpg",
        "images/sk5.jpg",

    ];
    const images = temp ? [
        "images/digital.jpg",
        "images/robot.jpg",
        "images/ai.jpg",
        "images/user.jpg",
        "images/people.jpg",
        "images/book.jpg"
    ] : [
        "images/book.jpg",
        "images/people.jpg",
        "images/digital.jpg",
        "images/robot.jpg",
        "images/ai.jpg",
        "images/user.jpg",
        "images/darkness.jpg",
        "images/pic04.jpg"
    ];
    // console.log(images);

    cards1.forEach((card, index2) => {
        card.style.backgroundImage = `url(${images[index2 % images.length]})`;
    });

    
    // cards2.forEach((cards, index) => {
    //     cards.style.backgroundImage = `url(${images2[index % images2.length]})`;
    // });
}
    
    

document.addEventListener("DOMContentLoaded", () => {
    applyBackgroundImages();
    showNews();
});


