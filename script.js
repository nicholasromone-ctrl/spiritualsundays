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
        } else {
            speakersGallery.classList.add('active');
            speakersGallery.style.display = 'block';
            guestsGallery.style.display = 'none';
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

// Prevent zoom on double tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function (event) {
    const now = (new Date()).getTime();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, false);
