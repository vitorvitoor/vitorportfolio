const links = document.querySelectorAll('nav a');
const pages = document.querySelectorAll('.page');

links.forEach(link => {
    link.addEventListener('click', (event) => {
        event.preventDefault();
        const target = document.getElementById(link.getAttribute('data-target'));

        pages.forEach(page => {
            page.classList.remove('active');
            page.innerHTML = page.innerHTML;
        });

        target.classList.add('active');

        const paragraphs = target.querySelectorAll('p');
        paragraphs.forEach((p, index) => {
            p.style.animationDelay = `${index * 0.1}s`;
            p.classList.add('fade-in');
        });
    });
});
