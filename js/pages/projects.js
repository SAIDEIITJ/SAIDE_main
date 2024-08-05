document.addEventListener('DOMContentLoaded', function() {
  const projectItems = document.querySelectorAll('.project-item');
  const today = new Date(); // Get today's date

  projectItems.forEach(item => {
      const index = item.dataset.index;
      const endDateText = item.querySelector('#popup-dates').textContent.split(' - ')[1];
      const endDateParts = endDateText.split('-');
      const endDate = new Date(endDateParts[2], endDateParts[1] - 1, endDateParts[0]); // Parse the end date

      const status = today > endDate ? 'Completed' : 'Ongoing';

      const statusElement = item.querySelector('#popup-status');


      if (status == 'Completed'){
          if (statusElement) {
            statusElement.innerHTML = `<strong>Status: <i class="fa-solid fa-check" style="color: #63E6BE;"></i></strong> ${status}`;
        }
      }
      else {
          if (statusElement) {
            statusElement.innerHTML = `<strong>Status: <i class="fa-solid fa-circle" style="color: #FFD43B;"></i></strong> ${status}`;
        }

      }
    

      // Add event listener to toggle project details
      item.addEventListener('click', function() {
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
