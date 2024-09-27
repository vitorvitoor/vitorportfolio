document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function(event) {
        event.preventDefault();
        const targetSection = document.querySelector(`#${this.dataset.target}`);
        document.querySelectorAll('.page').forEach(page => {
            page.classList.remove('active');
        });
        targetSection.classList.add('active');
    });
});
