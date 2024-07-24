document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.getElementById('menu-toggle');
    const menuClose = document.getElementById('menu-close');
    const navbar = document.getElementById('nav-content');
  
  
    function openMenu() {
      menuToggle.style.display = 'none';
      menuClose.style.display = 'flex';
      navbar.style.right = '0'; // Slide the nav-content into view
    }
  
    function closeMenu() {
      menuToggle.style.display = 'flex';
      menuClose.style.display = 'none';
      navbar.style.right = '-100%'; // Slide the nav-content out of view
    }
  
    menuToggle.addEventListener('click', openMenu);
    menuClose.addEventListener('click', closeMenu);
    document.addEventListener('click', (event) => {
      if (!navbar.contains(event.target) && !menuToggle.contains(event.target)) {
        closeMenu();
      }
    });
  
  
     });
   
   document.addEventListener("DOMContentLoaded", function() {
    var dropdowns = document.querySelectorAll(".dropdown");
  
    dropdowns.forEach(function(dropdown) {
      var toggleIcon = dropdown.querySelector(".toggle-icon");
  
      if (toggleIcon) {
        toggleIcon.addEventListener("click", function(event) {
          event.preventDefault();
  
          // Toggle the clicked dropdown
          var dropdownContent = dropdown.querySelector(".dropdown-content");
          if (dropdownContent.style.display === "block") {
            dropdownContent.style.display = "none";
            toggleIcon.textContent = "+";
          } else {
            // Close all dropdowns first
            closeAllDropdowns();
  
            dropdownContent.style.display = "block";
            toggleIcon.textContent = "-";
          }
        });
      }
    });
  
    function closeAllDropdowns() {
      dropdowns.forEach(function(dropdown) {
        var dropdownContent = dropdown.querySelector(".dropdown-content");
        var toggleIcon = dropdown.querySelector(".toggle-icon");
        if (dropdownContent) dropdownContent.style.display = "none";
        if (toggleIcon) toggleIcon.textContent = "+";
      });
    }
  });