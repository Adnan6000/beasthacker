// Toggle mobile navigation
const navToggle = document.querySelector('.nav-toggle');
const navMenu = document.querySelector('nav ul');

// Check if navToggle exists to avoid errors
if (navToggle && navMenu) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
    });
}

// Swiper Slider Initialization
if (document.querySelector('.swiper-container')) {
    var swiper = new Swiper('.swiper-container', {
        loop: true, // Enables continuous loop mode
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        autoplay: {
            delay: 3000, // 3 seconds delay for autoplay
            disableOnInteraction: false,
        },
    });
}

// Toggle description visibility on heading click
const headings = document.querySelectorAll('.list-heading');

// Ensure headings exist before adding event listeners
if (headings.length > 0) {
    headings.forEach(heading => {
        heading.addEventListener('click', () => {
            const description = heading.nextElementSibling;
            if (description) {
                description.style.display = (description.style.display === 'block') ? 'none' : 'block';
            }
        });
    });
}