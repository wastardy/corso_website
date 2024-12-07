function userScroll() {
    const navbar = document.querySelector('.navbar');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('bg-dark', 'bg-opacity');
        }
        else {
            navbar.classList.remove('bg-dark', 'bg-opacity')
        }
    });
}

document.addEventListener('DOMContentLoaded', userScroll);