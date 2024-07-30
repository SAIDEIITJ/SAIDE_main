document.addEventListener('DOMContentLoaded', function() {



    document.getElementById('search-keywords').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        filterUsingBar(searchTerm);
    });

    function filterUsingBar(filter) {
        document.querySelectorAll('.project-item').forEach(member => {
            const backgroundArea = member.getAttribute('data-background').toLowerCase();
            if (backgroundArea.includes(filter)) {
                member.style.display = 'block';
            } else {
                member.style.display = 'none';
            }
        });
    }

    const projectItems = document.querySelectorAll('.project-item');
    const searchInput = document.getElementById('search-keywords');
    const selectedType = document.getElementById('selected-type');
    const typeList = document.getElementById('type-list');
    const selectedBackground = document.getElementById('selected-background');
    const backgroundList = document.getElementById('background-list');
  
    // Toggle dropdown visibility
    function toggleDropdown(dropdownWrapper) {
      // Close any other open dropdowns
      document.querySelectorAll('.custom-dropdown-wrapper').forEach(wrapper => {
        if (wrapper !== dropdownWrapper) {
          wrapper.classList.remove('open');
        }
      });
      // Toggle the current dropdown
      dropdownWrapper.classList.toggle('open');
    }
  
    // Update selected value and filter positions
    function updateSelected(dropdownWrapper, selectedElem, value, dataValue) {
      selectedElem.textContent = value;
      selectedElem.dataset.value = dataValue;
      dropdownWrapper.classList.remove('open');
      filterPositions();
    }
  
    // Event listeners for type dropdown
    selectedType.addEventListener('click', () => toggleDropdown(selectedType.parentElement));
    typeList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        updateSelected(selectedType.parentElement, selectedType, e.target.textContent, e.target.getAttribute('data-value'));
      }
    });
  
    // Event listeners for background dropdown
    selectedBackground.addEventListener('click', () => toggleDropdown(selectedBackground.parentElement));
    backgroundList.addEventListener('click', function(e) {
      if (e.target.tagName === 'LI') {
        updateSelected(selectedBackground.parentElement, selectedBackground, e.target.textContent, e.target.getAttribute('data-value'));
      }
    });
  
    // Close dropdown if clicked outside
    document.addEventListener('click', function(e) {
      if (!e.target.closest('.custom-dropdown-wrapper')) {
        document.querySelectorAll('.custom-dropdown-wrapper.open').forEach(wrapper => {
          wrapper.classList.remove('open');
        });
      }
    });
  
    // Filter positions based on selected type, background, and keyword
    function filterPositions() {
        const type = selectedType.dataset.value.toLowerCase();
        const background = selectedBackground.dataset.value.toLowerCase();
      
        projectItems.forEach(item => {
          const posType = item.getAttribute('data-type') ? item.getAttribute('data-type').toLowerCase() : '';
          const posBackground = item.getAttribute('data-background') ? item.getAttribute('data-background').toLowerCase() : '';
      
          let isVisible = true;
      
          if (type && type !== "" && !posType.includes(type)) {
            isVisible = false;
          }
      
          if (background && background !== "" && !posBackground.includes(background)) {
            isVisible = false;
          }
      
          item.style.display = isVisible ? '' : 'none';
        });
      }
      
  
    // Call filterPositions after setting the default type
    filterPositions();
  
    // Additional code for the project item click event to toggle details
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
  