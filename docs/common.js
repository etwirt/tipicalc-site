
async function init() {
    // Update active link in TOC
    const currentPath = window.location.pathname.split('/').pop() || 'index.html';
    const tocLinks = document.querySelectorAll('.toc a');
    tocLinks.forEach(link => {
        if (link.getAttribute('href') === currentPath) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // Update year in footer
    const yearElement = document.getElementById('year');
    if (yearElement) {
        yearElement.textContent = new Date().getFullYear();
    }

    // Wrap pagination link text in span to allow separate styling (e.g. no underline for arrows)
    document.querySelectorAll('.pagination-link').forEach(link => {
        const text = link.textContent;
        link.innerHTML = `<span>${text}</span>`;
    });
}

document.addEventListener('DOMContentLoaded', init);
