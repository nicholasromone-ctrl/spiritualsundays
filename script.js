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
    let scrollTimeout;
    let isScrolling = false;

    gallery.addEventListener('scroll', function() {
        // Clear existing timeout
        clearTimeout(scrollTimeout);

        // Show header while actively scrolling
        if (!isScrolling) {
            isScrolling = true;
            header.classList.remove('hidden');
        }

        // Hide header after scrolling stops
        scrollTimeout = setTimeout(() => {
            const scrollTop = gallery.scrollTop;
            
            // Hide if scrolled down (not at very top)
            if (scrollTop > 50) {
                header.classList.add('hidden');
            }
            
            isScrolling = false;
        }, 1500); // Hide after 1.5 seconds of no scrolling
    });

    // Show header when touching/clicking (for mobile and desktop)
    gallery.addEventListener('touchstart', function() {
        header.classList.remove('hidden');
        clearTimeout(scrollTimeout);
    });

    gallery.addEventListener('mouseenter', function() {
        header.classList.remove('hidden');
    });

    // Tap anywhere to show header
    gallery.addEventListener('click', function(e) {
        // Don't trigger if clicking the back button
        if (!e.target.closest('.back-button')) {
            header.classList.remove('hidden');
            
            // Auto-hide again after a moment
            clearTimeout(scrollTimeout);
            scrollTimeout = setTimeout(() => {
                if (gallery.scrollTop > 50) {
                    header.classList.add('hidden');
                }
            }, 2000);
        }
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
