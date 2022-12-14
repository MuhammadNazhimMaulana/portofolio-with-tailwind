// Scroll Navbar Fixed
window.onscroll = () =>  {
    const header = document.querySelector('header');

    const fixedNav = header.offsetTop;

    if(window.pageYOffset > fixedNav){
        // Add Navbar Fixed
        header.classList.add('navbar-fixed');
    }else{
        // Remove Navbar Fixed
        header.classList.remove('navbar-fixed');
    }
}

// Hamburger
const hamburger = document.querySelector('#hamburger');
const navMenu = document.querySelector('#nav-menu');

hamburger.addEventListener('click', () => {
    // Active Hamburger
    hamburger.classList.toggle('hamburger-active');
    navMenu.classList.toggle('hidden');

})