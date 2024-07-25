document.addEventListener('DOMContentLoaded', function () { 
    core();
    function core(){
        document.querySelectorAll('.member-card').forEach(member => {
            if (member.getAttribute('data-position') !== 'Core Faculty') {
                member.style.display = 'none';
            }
        });
    }

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
            themes: [],
        };
        

        document.querySelectorAll('.coe-checkbox input:checked').forEach(checkbox => {
            const dropdownContent = checkbox.closest('.dropdown-content2');
            if (dropdownContent) {
                const category = dropdownContent.getAttribute('data-category');
                if (category && filters[category]) {
                    filters[category].push(checkbox.value.toLowerCase());
                }
                else if (!category) { // Assume no category means theme
                    filters.themes.push(checkbox.value);
                    
                }
            }
        });

        displaySelectedFilters();
        console.log(filters);
        filterMembers(filters);
    }

    function filterMembers(filters) {
        document.querySelectorAll('.member-card').forEach(member => {
            const researchArea = member.getAttribute('data-research-area').toLowerCase();
            const coe = member.getAttribute('data-coe').toLowerCase();
            const title = member.getAttribute('data-title').toLowerCase();
            const position = member.getAttribute('data-position').toLowerCase();
            let themes = {};
            const themesAttr = member.getAttribute('data-themes');
            if (themesAttr) {
                try {
                    themes = JSON.parse(themesAttr);
                    console.log(themesAttr);
                } catch (error) {
                    console.error('Error parsing data-themes:', error);
                }
            }
            

            const isResearchAreaMatch = filters.researchArea.length === 0 || filters.researchArea.some(filter => researchArea.includes(filter));
            const isCoeMatch = filters.coe.length === 0 || filters.coe.some(filter => coe.includes(filter));
            const isTitleMatch = filters.title.length === 0 || filters.title.some(filter => title === filter);
            const isPositionMatch = filters.position.length === 0 || filters.position.some(filter => position.includes(filter));
            const isThemeMatch = filters.themes.length === 0 || filters.themes.some(filter => themes[filter] === 'Yes' || themes[filter] === 'Somewhat');
     
           

            const isVisible = isResearchAreaMatch && isCoeMatch && isTitleMatch && isPositionMatch && isThemeMatch;

            member.style.display = isVisible ? 'block' : 'none';
        });
        const HOD = document.querySelector('.member-cards');
        // console.log("Length",filters.title.length);
        if (filters.position.length === 0 && filters.title.length ===0 && filters.researchArea.length ===0 && filters.themes.length === 0 && filters.coe.length===0) {
            HOD.style.display = 'block';
            core();
        }
        else{
            HOD.style.display = 'none';
        }
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
