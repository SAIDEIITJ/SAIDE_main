document.addEventListener('DOMContentLoaded', function () {


    document.querySelectorAll('.filter-indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
        const filter = indicator.getAttribute('data-filter');
        
        if (indicator.classList.contains('checked')) {
            indicator.classList.remove('checked');
            document.querySelectorAll('.member-card').forEach(member => {
                member.style.display = 'block';
                document.querySelector('.HOD-details').style.display = 'flex';
            });
        } else {
            document.querySelectorAll('.filter-indicator').forEach(ind => ind.classList.remove('checked'));
            indicator.classList.add('checked');
            document.querySelectorAll('.member-card').forEach(member => {
                const category = member.getAttribute('data-position');
                if (filter === 'all' || category === filter) {
                    member.style.display = 'block';
                    document.querySelector('.HOD-details').style.display = 'none';
                } else {
                    member.style.display = 'none';
                    document.querySelector('.HOD-details').style.display = 'none';
                }
            });
        }
    });
    });
});

document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.dropbtn').forEach(button => {
        button.addEventListener('click', function () {
            this.nextElementSibling.classList.toggle('show');
        });
    });
    

    document.getElementById('search-bar').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        filterUsingBar(searchTerm);
    });

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            document.querySelectorAll('.dropdown-content2').forEach(dropdown => {
                dropdown.classList.remove('show');
            });
        }
    }

    document.querySelectorAll('.coe-checkbox input[type="checkbox"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const selectedFilters = Array.from(document.querySelectorAll('.coe-checkbox input:checked')).map(cb => cb.value.toLowerCase());
            displaySelectedFilters(selectedFilters);
            filterMembers(selectedFilters);
        });
    });

    function displaySelectedFilters() {
          const selectedFiltersContainer = document.querySelector('.selected-filters');
          selectedFiltersContainer.style.display  = 'block';
          selectedFiltersContainer.innerHTML = '';

          const selectedCheckboxes = document.querySelectorAll('.coe-checkbox input:checked');
          selectedCheckboxes.forEach(checkbox => {
            const filterTag = document.createElement('div');
            filterTag.classList.add('filter-tag');
            filterTag.textContent = checkbox.value;
            const removeButton = document.createElement('span');
            removeButton.classList.add('remove-filter');
            removeButton.textContent = '✖';
            removeButton.addEventListener('click', () => {
              checkbox.checked = false;
              filterMembers(Array.from(selectedCheckboxes).map(cb => cb.value.toLowerCase()).filter(value => value !== checkbox.value.toLowerCase()));
              displaySelectedFilters();
            });

            filterTag.appendChild(removeButton);
            selectedFiltersContainer.appendChild(filterTag);
          });
        }

    function filterMembers(filters) {
        document.querySelectorAll('.member-card').forEach(member => {
            const researchArea = member.getAttribute('data-research-area').toLowerCase();
            const coe = member.getAttribute('data-coe').toLowerCase();
            const title = member.getAttribute('data-title').toLowerCase();
            const category = member.getAttribute('data-position').toLowerCase();

            const isVisible = filters.length === 0 || filters.every(filter => {
                return category.includes(filter) || researchArea.includes(filter) || coe.includes(filter) || title === filter;
            }); 

            member.style.display = isVisible ? 'block' : 'none';
        });
        // const displayHOD = filters.length === 0;
        // if (!displayHOD){
        //     document.querySelector('.HOD-details').style.display = 'none';
        // }
        // else{
        //     document.querySelector('.HOD-details').style.display = 'flex';
        // }
    }
    function filterUsingBar(filter) {
        document.querySelectorAll('.member-card').forEach(member => {
            const researchArea = member.getAttribute('data-research-area').toLowerCase();
                if (researchArea.includes(filter)) {
                    member.style.display = 'block';
                } else {
                    member.style.display = 'none';
                }
            
        });
    }
});