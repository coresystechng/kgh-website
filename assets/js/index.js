const yearSpan = document.querySelector('#currentYear');
const currentYear = new Date();
yearSpan.innerText = currentYear.getFullYear();

// active links

const navLinks = document.querySelectorAll('.nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        // e.preventDefault(); 

        navLinks.forEach(l => l.classList.remove('active'));

        this.classList.add('active');
    });
});