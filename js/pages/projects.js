document.addEventListener('DOMContentLoaded', function() {
  const projectItems = document.querySelectorAll('.project-item');

  projectItems.forEach(item => {
      item.addEventListener('click', function() {
          const index = this.dataset.index;
          const details = document.getElementById(`project-details-${index}`);
          
          // Toggle display of the details
          if (details.style.display === 'none' || details.style.display === '') {
              details.style.display = 'block';
              const rect = details.getBoundingClientRect();
              window.scrollTo({
                  top: window.scrollY + rect.top - 400, // Adjusting to ensure it goes to the top of the details section
                  behavior: 'smooth'
              });
          } else {
              details.style.display = 'none';
          }
      });
  });
});
