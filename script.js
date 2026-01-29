// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, observerOptions);

// Observe all slides
document.addEventListener('DOMContentLoaded', () => {
    const slides = document.querySelectorAll('.slide');
    slides.forEach(slide => {
        observer.observe(slide);
    });

    // Parallax scrolling effect
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        
        slides.forEach((slide, index) => {
            const slideContent = slide.querySelector('.slide-content');
            const slideTop = slide.offsetTop;
            const slideHeight = slide.offsetHeight;
            
            // Calculate parallax effect
            if (scrolled > slideTop - window.innerHeight && scrolled < slideTop + slideHeight) {
                const parallaxSpeed = 0.3;
                const yPos = (scrolled - slideTop) * parallaxSpeed;
                slideContent.style.transform = `translateY(${yPos}px)`;
            }
        });

        // Navbar background on scroll
        const navbar = document.querySelector('.navbar');
        if (scrolled > 50) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 25px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });

    // Smooth scroll for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Add hover effect to images
    const images = document.querySelectorAll('.slide-image');
    images.forEach(img => {
        img.addEventListener('mouseenter', function() {
            this.style.transform = 'scale(1.03) rotate(1deg)';
        });
        
        img.addEventListener('mouseleave', function() {
            this.style.transform = 'scale(1) rotate(0deg)';
        });
    });

    // RSVP button animation
    const rsvpBtn = document.querySelector('.rsvp-btn');
    if (rsvpBtn) {
        rsvpBtn.addEventListener('mouseenter', function() {
            this.style.letterSpacing = '3px';
        });
        
        rsvpBtn.addEventListener('mouseleave', function() {
            this.style.letterSpacing = '2px';
        });
    }

    // Preload images for smoother experience
    const imageUrls = [
        'slides/Slide_1.png',
        'slides/Slide_2.png',
        'slides/Slide_3.png',
        'slides/Slide_4.png',
        'slides/Slide_5.png',
        'slides/Slide_6.png',
        'slides/Slide_7.png',
        'slides/Slide_8.png',
        'slides/Slide_9.png',
        'slides/Slide_10.png',
        'slides/Slide_11.png',
        'slides/Slide_12.png',
        'slides/Slide_13.png',
        'slides/Slide_14.png'
    ];

    imageUrls.forEach(url => {
        const img = new Image();
        img.src = url;
    });
});

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    const slides = Array.from(document.querySelectorAll('.slide'));
    const currentSlide = slides.find(slide => {
        const rect = slide.getBoundingClientRect();
        return rect.top >= 0 && rect.top < window.innerHeight / 2;
    });

    if (!currentSlide) return;

    const currentIndex = slides.indexOf(currentSlide);

    if (e.key === 'ArrowDown' && currentIndex < slides.length - 1) {
        slides[currentIndex + 1].scrollIntoView({ behavior: 'smooth' });
    } else if (e.key === 'ArrowUp' && currentIndex > 0) {
        slides[currentIndex - 1].scrollIntoView({ behavior: 'smooth' });
    }
});
