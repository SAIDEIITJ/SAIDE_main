
document.addEventListener('DOMContentLoaded', function () {
    document.querySelectorAll('.filter-indicator').forEach(indicator => {
    indicator.addEventListener('click', () => {
        const filter = indicator.getAttribute('data-filter');
        
        if (indicator.classList.contains('checked')) {
            indicator.classList.remove('checked');
            document.querySelectorAll('.member-card').forEach(member => {
                member.style.display = 'block';
            });
        } else {
            document.querySelectorAll('.filter-indicator').forEach(ind => ind.classList.remove('checked'));
            indicator.classList.add('checked');
            document.querySelectorAll('.member-card').forEach(member => {
                const category = member.getAttribute('data-position');
                if (filter === 'all' || category === filter) {
                    member.style.display = 'block';
                } else {
                    member.style.display = 'none';
                }
            });
        }
    });
    });
});

document.addEventListener('DOMContentLoaded', function () {

    

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName('dropdown-content');
            for (var i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
        }
    }

   

    // Input event listener for search bar
    document.getElementById('search-bar').addEventListener('input', function () {
        const searchTerm = this.value.toLowerCase();
        document.querySelectorAll('.member-card').forEach(member => {
            const name = member.getAttribute('data-name').toLowerCase();
            const researchArea = member.getAttribute('data-research-area').toLowerCase(); // Adjust this based on your data structure

            if ((researchArea.includes(searchTerm))) {
                member.style.display = 'block';
            } else {
                member.style.display = 'none';
            }
        });
    });
});