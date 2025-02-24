// Mobile Menu Toggle
const mobileMenu = document.querySelector('.mobile-menu');
const navLinks = document.querySelector('.nav-links');

mobileMenu.addEventListener('click', () => {
    mobileMenu.classList.toggle('active');
    navLinks.classList.toggle('active');
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!mobileMenu.contains(e.target) && !navLinks.contains(e.target)) {
        mobileMenu.classList.remove('active');
        navLinks.classList.remove('active');
    }
});

// Smooth Scroll for Navigation Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView({
            behavior: 'smooth'
        });
        // Close mobile menu after clicking
        if (window.innerWidth <= 768) {
            navLinks.style.display = 'none';
        }
    });
});

// Portfolio Items
const portfolioItems = [
    {
        image: 'images/projects/project01.png',
        title: 'Projeto 1',
        category: 'Branding'
    },
    {
        image: 'images/projects/project02.png',
        title: 'Projeto 2',
        category: 'Design Digital'
    },
    {
        image: 'images/projects/project03.png',
        title: 'Projeto 3',
        category: 'Design Criativo'
    }
];

// Populate Portfolio Grid
const portfolioGrid = document.querySelector('.portfolio-grid');
portfolioItems.forEach(item => {
    const portfolioItem = document.createElement('div');
    portfolioItem.classList.add('portfolio-item');
    portfolioItem.innerHTML = `
        <img src="${item.image}" alt="${item.title}">
        <div class="portfolio-info">
            <h3>${item.title}</h3>
            <p>${item.category}</p>
        </div>
    `;
    portfolioGrid.appendChild(portfolioItem);
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    const formData = new FormData(contactForm);
    const formObject = Object.fromEntries(formData);
    
    // Add basic form validation
    if (!formObject.name || !formObject.email || !formObject.message) {
        alert('Por favor, preencha todos os campos obrigatórios.');
        return;
    }

    // Here you would typically send the form data to a server
    // For now, we'll just show a success message
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    contactForm.reset();
});

// Intersection Observer for Animations
const observerOptions = {
    threshold: 0.3
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animation to sections
document.querySelectorAll('section').forEach(section => {
    section.style.opacity = '0';
    section.style.transform = 'translateY(20px)';
    section.style.transition = 'all 0.5s ease-in-out';
    observer.observe(section);
});