// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

// Initialize Swiper
const swiper = new Swiper('.swiper-container', {
    autoplay: {
        delay: 4000, // 3 seconds between slides
        disableOnInteraction: false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true, // Allow clicking on the pagination dots
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    loop: true, // Loop the slides infinitely
});


// Toggle description visibility on heading click
const headings = document.querySelectorAll('.list-heading');

headings.forEach(heading => {
    heading.addEventListener('click', () => {
        const description = heading.nextElementSibling;
        description.style.display = (description.style.display === 'block') ? 'none' : 'block';
    });
});
