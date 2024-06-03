document.getElementById('newsletter-form').addEventListener('submit', function(e) {
    e.preventDefault();
    alert('Thank you for subscribing!');
    document.getElementById('email').value = '';
});

function scrollToSection(sectionId) {
    document.getElementById(sectionId).scrollIntoView({ behavior: 'smooth' });
}

function downloadApp() {
    alert('App download feature coming soon!');
}
