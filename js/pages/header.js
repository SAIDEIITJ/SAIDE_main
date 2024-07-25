document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById('menu-toggle');
  const menuClose = document.getElementById('menu-close');
  const navbar = document.getElementById('nav-content');
  const mediaQuery = window.matchMedia('(max-width: 992px)'); // Adjust the max-width to your breakpoint

  function openMenu() {
      if (mediaQuery.matches) {
          menuToggle.style.display = 'none';
          menuClose.style.display = 'flex';
          navbar.style.right = '0'; // Slide the nav-content into view
      }
  }

  function closeMenu() {
      if (mediaQuery.matches) {
          menuToggle.style.display = 'flex';
          menuClose.style.display = 'none';
          navbar.style.right = '-100%'; // Slide the nav-content out of view
      }
  }

  function checkScreenSize() {
      if (!mediaQuery.matches) {
          // Reset styles for larger screens
          menuToggle.style.display = '';
          menuClose.style.display = '';
          navbar.style.right = '';
      }
  }

  menuToggle.addEventListener('click', openMenu);
  menuClose.addEventListener('click', closeMenu);

  document.addEventListener('click', (event) => {
      if (mediaQuery.matches && !navbar.contains(event.target) && !menuToggle.contains(event.target)) {
          closeMenu();
      }
  });

  mediaQuery.addListener(checkScreenSize);
  checkScreenSize(); // Initial check
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