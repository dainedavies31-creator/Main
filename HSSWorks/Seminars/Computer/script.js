document.addEventListener("DOMContentLoaded", () => {
    // 1. Smooth Entry Animation for Cards
    const cards = document.querySelectorAll(".device-card");
    
    cards.forEach((card, index) => {
        // Initial setup for animation state
        card.style.opacity = "0";
        card.style.transform = "translateY(40px)";
        card.style.transition = "all 0.8s cubic-bezier(0.175, 0.885, 0.32, 1.25)";
        
        // Staggered entry effect based on card index
        setTimeout(() => {
            card.style.opacity = "1";
            card.style.transform = "translateY(0)";
        }, index * 250);
    });

    // 2. Interactive Spotlight Glow Effect on Mouse Move
    cards.forEach(card => {
        card.addEventListener("mousemove", (e) => {
            const rect = card.getBoundingClientRect();
            const x = e.clientX - rect.left; // x position inside element
            const y = e.clientY - rect.top;  // y position inside element
            
            // Dynamically updates custom properties for a subtle gradient trailing effect
            card.style.setProperty("--mouse-x", `${x}px`);
            card.style.setProperty("--mouse-y", `${y}px`);
            card.style.borderColor = "rgba(34, 211, 238, 0.4)";
        });

        card.addEventListener("mouseleave", () => {
            card.style.borderColor = "rgba(255, 255, 255, 0.08)";
        });
    });

    // 3. Seminar Mode: Press 'H' to highlight text pointers during speech
    document.addEventListener("keydown", (e) => {
        if (e.key.toLowerCase() === "h") {
            const points = document.querySelectorAll("li");
            points.forEach(point => point.classList.toggle("seminar-highlight"));
        }
    });
});

