// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});

var swiper = new Swiper('.swiper-container', {
    loop: true, // Allows continuous loop mode
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
    autoplay: {
        delay: 3000, // 3 seconds delay
        disableOnInteraction: false,
    },
});


// Toggle description visibility on heading click
const headings = document.querySelectorAll('.list-heading');

headings.forEach(heading => {
    heading.addEventListener('click', () => {
        const description = heading.nextElementSibling;
        description.style.display = (description.style.display === 'block') ? 'none' : 'block';
    });
});
