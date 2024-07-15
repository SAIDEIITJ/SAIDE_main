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