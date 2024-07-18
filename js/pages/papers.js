var articlesPerPage = 12;
var currentPage = 1;
var allArticles = Array.from(document.querySelectorAll('.paper-item'));

function displayArticles(page, articles) {
    var totalPages = Math.ceil(articles.length / articlesPerPage);
    articles.forEach((article, index) => {
        if (index >= (page - 1) * articlesPerPage && index < page * articlesPerPage) {
            article.style.display = 'block';
        } else {
            article.style.display = 'none';
        }
    });
    setupPagination(totalPages, articles);
}

function setupPagination(totalPages, articles) {
    var pagination = document.getElementById('pagination');
    pagination.innerHTML = '';

    for (let i = 1; i <= totalPages; i++) {
        let pageItem = document.createElement('a');
        pageItem.className = 'page-item';
        pageItem.innerText = i;
        pageItem.href = '#';
        if (i === currentPage) {
            pageItem.classList.add('active');
        }
        pageItem.addEventListener('click', function(event) {
            event.preventDefault();
            currentPage = i;
            displayArticles(currentPage, articles);
        });
        pagination.appendChild(pageItem);
    }
}

document.getElementById('searchBar').addEventListener('input', function() {
    const filter = this.value.toLowerCase();
    const filteredArticles = allArticles.filter(item => {
        const title = item.getAttribute('data-title').toLowerCase();
        return title.startsWith(filter);
    });
console.log(filteredArticles);
allArticles.forEach(item => {
    const title = item.getAttribute('data-title').toLowerCase();
    if (title.startsWith(filter)) {
        item.style.display = 'block';
    } else {
        item.style.display = 'none';
    }
});

    // Recalculate pagination based on search results
    const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
    currentPage = 1;  // Reset to first page of search results
    displayArticles(currentPage, filteredArticles);
});

// Initial setup
displayArticles(currentPage, allArticles);