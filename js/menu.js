const menuToggle = document.getElementById('menuToggle');
const topnav = document.getElementById('myTopnav');
const icon = menuToggle.querySelector('i');

menuToggle.addEventListener('click', function() {
    topnav.classList.toggle('active');
    // Toggle between hamburger and X icon
    if (icon.classList.contains('fa-bars')) {
        icon.classList.remove('fa-bars');
        icon.classList.add('fa-times');
    } else {
        icon.classList.remove('fa-times');
        icon.classList.add('fa-bars');
    }
});
