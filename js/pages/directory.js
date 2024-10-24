const perPage = 15;
let currentPage = 1;


function showAllEntries() {
    const rows = document.querySelectorAll(".member-row");
    rows.forEach(row => row.style.display = "");
    paginateEntries(currentPage);
}

function searchEntries() {
    const searchText = document.getElementById("search-bar").value.trim().toUpperCase();
    const rows = document.querySelectorAll(".member-row");
    rows.forEach(row => {
        const name = row.querySelector(".name").textContent.toUpperCase();
        row.style.display = name.includes(searchText) ? "" : "none";
    });
    if (searchText) {
        document.getElementById("pagination").style.display = "none";
    } else {
        document.getElementById("pagination").style.display = "";
        showAllEntries();
    }
}
function paginateEntries(page = 1) {
    const rows = document.querySelectorAll(".member-row");
    rows.forEach((row, index) => {
        row.style.display = index >= (page - 1) * perPage && index < page * perPage ? "" : "none";
    });
    renderPagination(rows.length, page);
}

function renderPagination(totalEntries, currentPage) {
    const totalPages = Math.ceil(totalEntries / perPage);
    const pagination = document.getElementById("pagination");
    pagination.innerHTML = "";

    for (let i = 1; i <= totalPages; i++) {
        const li = document.createElement("li");
        const link = document.createElement("a");
        link.href = "#";
        link.textContent = i;
        if (i === currentPage) {
            link.classList.add("active");
        }
        link.addEventListener("click", function(event) {
            event.preventDefault();
            currentPage = i;
            paginateEntries(i);
        });
        li.appendChild(link);
        pagination.appendChild(li);
    }
}

function filterEntriesByAlphabet(alphabet) {
    const rows = document.querySelectorAll(".member-row");
    rows.forEach(row => {
        const name = row.querySelector(".name").textContent.toUpperCase();
        row.style.display = name.startsWith(alphabet) ? "" : "none";
    });
    document.getElementById("pagination").style.display = "none";
}

const alphabetLinks = document.querySelectorAll(".alphabet-link");

alphabetLinks.forEach(link => {
    link.addEventListener("click", function(event) {
        event.preventDefault();

        if (this.id === "reset-link") {
            document.getElementById("pagination").style.display = "";
            showAllEntries();
        } else {
            const selectedAlphabet = this.textContent;
            filterEntriesByAlphabet(selectedAlphabet);
        }
    });
});
showAllEntries();