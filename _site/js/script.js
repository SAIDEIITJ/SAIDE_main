$(document).ready(function() {
    const backgroundImages = [
        'bg.png',
        'Banners-2.png',
        'Banners-3.png',
        'Banners-1.png',
        'Banners-4.png',
        'Banners-5.png',
        'Banners-6.png',
        'Banners-7.png',
        'Banners-8.png',
        'Banners-9.png',
        'Banners-10.png',
        'Banners-11.png',
    ];

    let currentIndex = 0;

    // Function to change the background image
    function changeBackground() {
        $('.background').css('background-image', `linear-gradient(to right, rgba(245, 246, 252, 0.52), rgba(117, 19, 93, 0.73)), url(images/${backgroundImages[currentIndex]})`);
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

 const newsData = [
    { id: "news-card-1", title: "Next Generation AI", date: "MAY 29, 2024", content: "Mas asjd cioue c asu coausc clow dcwl sdcoua couc el...", img: "images/news4.png" },
    { id: "news-card-2", title: "Phd Admissions", date: "MAY 28, 2024", content: "Gakjs akljshd coia aklsuhd ausdc asoich auosy saou...", img: "images/news2.png" },
    { id: "news-card-3", title: "MS (by Research)", date: "MAY 28, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/news5.png" },
        { id: "news-card-3", title: "Intelligent Infrastructure", date: "MAY 28, 2024", content: "Guah ssuhd a usdc asoich aalsih  saou...", img: "images/news3.png" },

    // Add more news items here
];


// Define an object for storing events
 const eventData = [
    { id: "event-card-1", date: "12 June 2024", title: "Event Title 1", content: "Details of event 1...", icon: "fas fa-calendar-alt",  img: "images/news4.png"},
    { id: "event-card-2", date: "13 June 2024", title: "Event Title 2", content: "Details of event 2...", icon: "fas fa-calendar-check", img: "images/news5.png" },
    { id: "event-card-3", date: "14 June 2024", title: "Event Title 3", content: "Details of event 3...", icon: "fa-solid fa-computer", img: "images/news1.png"},
    
    // Add more event items here
];

function renderItems(container, items) {
    container.innerHTML = items.map(item => `
        <div class="card" id="${item.id}" style="background-image: url(${item.img});" >
            ${item.date ? `<div class="inside"><p>${item.date}</p>` : ''}
            <h1>${item.title}</h1>
            ${item.date ? '</div>' : ''}
        </div>
    `).join('');
}

function showNews() {
    var button = document.querySelector(".dpdown1");
    var newText = "News"; 
    button.childNodes[0].textContent = newText + " ";


    const container = document.getElementById("cardsContainer");
    const n = container.length;
    renderItems(container, newsData.slice(0, n));

    // const container2 = document.getElementById("cardsContainer2");
    // renderItems(container2, newsData.slice(8));

    // applyBackgroundImages();
}

function showEvents() {
    var button = document.querySelector(".dpdown1");
    var newText = "Events"; 
    button.childNodes[0].textContent = newText + " ";

    const container = document.getElementById("cardsContainer");
    const n = container.length;
    renderItems(container, eventData.slice(0, n));

    // const container2 = document.getElementById("cardsContainer2");
    // renderItems(container2, eventData.slice(8));

    // applyBackgroundImages(true);
}

function applyBackgroundImages(isEvent = false) {
    const cards1 = document.querySelectorAll(".card");
    // console.log(cards1);
    // const cards2 = document.querySelectorAll(".cards");
    const temp = isEvent; 
    // console.log(temp);
    // const images2 = temp ? [
    //     "images/sk5.jpg",
    //     "images/sk4.jpg",
    //     "images/sk3.jpg",
    //     "images/sk2.jpg",
    //     "images/sk1.jpg",
    //     "images/darkness.jpg",
    // ]:[
    //     "images/darkness.jpg",
    //     "images/sk1.jpg",
    //     "images/sk2.jpg",
    //     "images/sk3.jpg",
    //     "images/sk4.jpg",
    //     "images/sk5.jpg",

    // ];
    const images = temp ? [
        "images/digital.jpg",
        "images/robot.jpg",
        "images/ai.jpg",
        "images/user.jpg",
        "images/people.jpg",
        "images/book.jpg",
        "images/ai.jpg",
        "images/user.jpg",
    ] : [
        "images/book.jpg",
        "images/people.jpg",
        "images/digital.jpg",
        "images/robot.jpg",
        "images/ai.jpg",
        "images/user.jpg",
        "images/book.jpg",
        "images/people.jpg"
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

   
    // applyBackgroundImages();

});


