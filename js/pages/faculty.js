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
            updateFilters();
        });
    });

    function displaySelectedFilters() {
        const selectedFiltersContainer = document.querySelector('.selected-filters');
        selectedFiltersContainer.style.display = 'block';
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
                updateFilters();
            });

            filterTag.appendChild(removeButton);
            selectedFiltersContainer.appendChild(filterTag);
        });
    }

    function updateFilters() {
        const filters = {
            researchArea: [],
            coe: [],
            title: [],
            position: [],
        };

        document.querySelectorAll('.coe-checkbox input:checked').forEach(checkbox => {
            const dropdownContent = checkbox.closest('.dropdown-content2');
            if (dropdownContent) {
                const category = dropdownContent.getAttribute('data-category');
                if (category && filters[category]) {
                    filters[category].push(checkbox.value.toLowerCase());
                }
            }
        });

        displaySelectedFilters();
        filterMembers(filters);
    }

    function filterMembers(filters) {
        document.querySelectorAll('.member-card').forEach(member => {
            const researchArea = member.getAttribute('data-research-area').toLowerCase();
            const coe = member.getAttribute('data-coe').toLowerCase();
            const title = member.getAttribute('data-title').toLowerCase();
            const position = member.getAttribute('data-position').toLowerCase();
            

            const isResearchAreaMatch = filters.researchArea.length === 0 || filters.researchArea.some(filter => researchArea.includes(filter));
            const isCoeMatch = filters.coe.length === 0 || filters.coe.some(filter => coe.includes(filter));
            const isTitleMatch = filters.title.length === 0 || filters.title.some(filter => title === filter);
            const isPositionMatch = filters.position.length === 0 || filters.position.some(filter => position.includes(filter));
     
           

            const isVisible = isResearchAreaMatch && isCoeMatch && isTitleMatch && isPositionMatch;

            member.style.display = isVisible ? 'block' : 'none';
        });
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
