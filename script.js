function showGallery(type) {
    const landing = document.getElementById('landing');
    const guestsGallery = document.getElementById('guests-gallery');
    const speakersGallery = document.getElementById('speakers-gallery');

    // Hide landing page
    landing.classList.add('hidden');

    // Show appropriate gallery
    setTimeout(() => {
        if (type === 'guests') {
            guestsGallery.classList.add('active');
            guestsGallery.style.display = 'block';
            speakersGallery.style.display = 'none';
            setupScrollBehavior(guestsGallery);
        } else {
            speakersGallery.classList.add('active');
            speakersGallery.style.display = 'block';
            guestsGallery.style.display = 'none';
            setupScrollBehavior(speakersGallery);
        }

        // Scroll to top
        setTimeout(() => {
            if (type === 'guests') {
                guestsGallery.scrollTop = 0;
            } else {
                speakersGallery.scrollTop = 0;
            }
        }, 50);
    }, 400);
}

function showLanding() {
    const landing = document.getElementById('landing');
    const guestsGallery = document.getElementById('guests-gallery');
    const speakersGallery = document.getElementById('speakers-gallery');

    // Hide galleries
    guestsGallery.classList.remove('active');
    speakersGallery.classList.remove('active');

    // Show landing after transition
    setTimeout(() => {
        landing.classList.remove('hidden');
    }, 100);
}

// Setup scroll behavior for hiding/showing header
function setupScrollBehavior(gallery) {
    const header = gallery.querySelector('.gallery-header');
    let lastScrollTop = 0;
    let scrollTimeout;

    gallery.addEventListener('scroll', function() {
        // Clear existing timeout
        clearTimeout(scrollTimeout);

        // Show header briefly when scrolling
        header.classList.remove('hidden');

        // Hide header after scrolling stops (with a delay)
        scrollTimeout = setTimeout(() => {
            const scrollTop = gallery.scrollTop;
            
            // Only hide if scrolled down and not at the very top
            if (scrollTop > 100) {
                header.classList.add('hidden');
            }
            
            lastScrollTop = scrollTop;
        }, 1000); // Hide after 1 second of no scrolling
    });

    // Show header when touching/clicking (for mobile and desktop)
    gallery.addEventListener('touchstart', function() {
        header.classList.remove('hidden');
    });

    gallery.addEventListener('mousedown', function() {
        header.classList.remove('hidden');
    });
}

// Prevent zoom on double tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
