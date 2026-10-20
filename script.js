// Interactive Demo Function for GenAI Bot Project
function runBotSimulator() {
    let userInput = prompt("Simulate AI Classroom Bot:\nEnter prompt (e.g., 'Assign Homework 3')", "Assign Homework 3");
    if (userInput) {
        alert(`[LangChain + Groq Agent Response]:\n\nPrompt received: "${userInput}"\nAction: Telegram reminder scheduled and recorded to MySQL DB.`);
    }
}

// Add smooth Entrance Animation when scrolling into view
document.addEventListener("DOMContentLoaded", () => {
    const cards = document.querySelectorAll('.neu-card');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    cards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.5s ease-out';
        observer.observe(card);
    });
});