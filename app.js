const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = document.querySelectorAll('[data-skill]');
            bars.forEach(bar => {
                const value = bar.getAttribute('data-skill');
                bar.style.width = value + '%';
            });
            observer.disconnect(); // run only once
        }
    });
});

const skillsSection = document.getElementById('skills');
if (skillsSection) {
    observer.observe(skillsSection);
}


const element = document.getElementById("typewriter");
const words = ["Front End Developer.", "UI/UX Designer.", "React Enthusiast."];
let wordIndex = 0;
let charIndex = 0;
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    if (isDeleting) {
        charIndex--;
        element.textContent = currentWord.substring(0, charIndex);
    } else {
        charIndex++;
        element.textContent = currentWord.substring(0, charIndex);
    }

    let delay = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentWord.length) {
        delay = 2000;
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        wordIndex = (wordIndex + 1) % words.length;
        delay = 500;
    }

    setTimeout(typeEffect, delay);
}

typeEffect();

function handleSideBar() {
    const sidebar = document.getElementById("sideNavBar");

    if (window.innerWidth < 768) {
        //   Show it if hidden
        sidebar.classList.remove("hidden");
        //   Toggle animation
        if (sidebar.classList.contains("-translate-x-full")) {
            sidebar.classList.remove("-translate-x-full");
            sidebar.classList.add("translate-x-0");
        } else {
            sidebar.classList.add("-translate-x-full");
            sidebar.classList.remove("translate-x-0");
        }
    }
}