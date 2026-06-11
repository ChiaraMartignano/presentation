document.addEventListener("DOMContentLoaded", () => {
    // Testo da digitare (la prima parte "Hi! I'm Chiara Martignano," è già fissa nell'HTML per SEO e accessibilità)
    const textToType = "research fellow at the University of Padua.";
    const typedTextElement = document.getElementById("typed-text");
    const fadeInBlocks = document.getElementById("fade-in-blocks");
    const cursor = document.querySelector(".cursor");
    
    let index = 0;
    const typingSpeed = 50; // Millisecondi tra un carattere e l'altro

    function typeWriter() {
        if (index < textToType.length) {
            typedTextElement.textContent += textToType.charAt(index);
            index++;
            setTimeout(typeWriter, typingSpeed);
        } else {
            // La digitazione è finita: nascondi il cursore e mostra i blocchi successivi
            cursor.style.display = "none";
            showNextBlocks();
        }
    }

    function showNextBlocks() {
        fadeInBlocks.classList.remove("hidden");
        // Un piccolissimo delay permette al CSS di catturare la transizione
        setTimeout(() => {
            fadeInBlocks.classList.add("visible");
        }, 50);
    }

    // Controlla se l'utente preferisce non avere animazioni (Accessibilità)
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (prefersReducedMotion) {
        // Se l'utente non vuole animazioni, mostra tutto subito
        typedTextElement.textContent = textToType;
        fadeInBlocks.classList.add("visible");
        cursor.style.display = "none";
    } else {
        // Altrimenti, fai partire l'effetto dopo mezzo secondo dal caricamento
        setTimeout(typeWriter, 500);
    }
});