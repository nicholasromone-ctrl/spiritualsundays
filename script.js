// Password Protection for Speakers Page
const CORRECT_PASSWORD = "Jesusisking";

function checkPassword() {
    const passwordInput = document.getElementById("password-input");
    const errorMessage = document.getElementById("error-message");
    const passwordScreen = document.getElementById("password-screen");
    const protectedContent = document.getElementById("protected-content");
    
    if (!passwordInput || !errorMessage) return;
    
    // Trim any whitespace from the entered password
    const enteredPassword = passwordInput.value.trim();
    
    // Check if password matches (case-sensitive)
    if (enteredPassword === CORRECT_PASSWORD) {
        // Password correct - show content
        if (passwordScreen) passwordScreen.style.display = "none";
        if (protectedContent) {
            protectedContent.style.display = "flex";
            // Store authentication in session
            sessionStorage.setItem("speakersAuth", "true");
        }
        errorMessage.textContent = "";
        passwordInput.value = "";
    } else {
        // Password incorrect
        errorMessage.textContent = "Incorrect password. Please try again.";
        passwordInput.value = "";
        passwordInput.focus();
        
        // Shake animation on error
        passwordInput.style.animation = "shake 0.5s";
        setTimeout(() => {
            passwordInput.style.animation = "";
        }, 500);
    }
}

// Allow Enter key to submit password
document.addEventListener("DOMContentLoaded", function() {
    const passwordInput = document.getElementById("password-input");
    
    if (passwordInput) {
        passwordInput.addEventListener("keypress", function(event) {
            if (event.key === "Enter") {
                event.preventDefault();
                checkPassword();
            }
        });
        
        // Check if user is already authenticated
        if (sessionStorage.getItem("speakersAuth") === "true") {
            const passwordScreen = document.getElementById("password-screen");
            const protectedContent = document.getElementById("protected-content");
            
            if (passwordScreen) passwordScreen.style.display = "none";
            if (protectedContent) protectedContent.style.display = "flex";
        }
    }
    
    // Add smooth scroll behavior
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener("click", function(e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute("href"));
            if (target) {
                target.scrollIntoView({
                    behavior: "smooth",
                    block: "start"
                });
            }
        });
    });
    
    // Add intersection observer for slide animations
    const slides = document.querySelectorAll(".slide-image");
    
    if (slides.length > 0 && "IntersectionObserver" in window) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };
        
        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = "1";
                    entry.target.style.transform = "translateY(0)";
                }
            });
        }, observerOptions);
        
        slides.forEach(slide => {
            observer.observe(slide);
        });
    }
});

// Add shake animation dynamically
const style = document.createElement("style");
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        10%, 30%, 50%, 70%, 90% { transform: translateX(-10px); }
        20%, 40%, 60%, 80% { transform: translateX(10px); }
    }
`;
document.head.appendChild(style);
