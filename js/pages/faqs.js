document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.category a');
    const faqItems = document.querySelectorAll('.faq-item h3');

    // Smooth scrolling for category links
    links.forEach(link => {
      link.addEventListener('click', (event) => {
        event.preventDefault();
        const targetID = event.target.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetID);

        window.scrollTo({
          top: targetSection.offsetTop,
          behavior: 'smooth'
        });
      });
    });

    // Expand/Collapse FAQ answers
    faqItems.forEach(item => {
      item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const icon = item.querySelector('.downicon');

        if (answer.style.display === 'block') {
          answer.style.display = 'none';
          icon.textContent = '▼';
        } else {
          answer.style.display = 'block';
          icon.textContent = '▲';
        }
      });
    });
  });