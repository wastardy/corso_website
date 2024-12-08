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

document.addEventListener('click', function (event) {
    const navbarToggler = document.querySelector('.navbar-toggler');
    const navbarCollapse = document.querySelector('#navbar-nav-dropdown');

    if (
        navbarCollapse.classList.contains('show') &&
        !navbarCollapse.contains(event.target) &&
        !navbarToggler.contains(event.target)
    ) {
        // imitation of 'click on the 
        // button' for close navbar list
        navbarToggler.click(); 
    }   
});