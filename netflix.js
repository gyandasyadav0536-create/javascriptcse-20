document.addEventListener('DOMContentLoaded', () => {
    const header = document.querySelector('.netflix-header');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 0) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    console.log('Netflix Clone Loaded');
});
