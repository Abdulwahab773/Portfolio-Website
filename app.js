const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            const bars = document.querySelectorAll('[data-skill]');
            bars.forEach(bar => {
                const value = bar.getAttribute('data-skill');
                bar.style.width = value + '%';
            });
            observer.disconnect();
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
        sidebar.classList.remove("hidden");
        if (sidebar.classList.contains("-translate-x-full")) {
            sidebar.classList.remove("-translate-x-full");
            sidebar.classList.add("translate-x-0");
        } else {
            sidebar.classList.add("-translate-x-full");
            sidebar.classList.remove("translate-x-0");
        }
    }
}

// _______________________________________________________

import { collection, doc, db, onSnapshot, orderBy, query } from "./firebase.js";

let projectsContainer = document.getElementById("projectsContainer")



const getProjects = async () => {
    let collectionRef = collection(db, "projects");
    let dbRef = query(collectionRef, orderBy("timestamp", "desc"))
    await onSnapshot(dbRef, (snapshot) => {
        projectsContainer.innerHTML = "";
        snapshot.forEach((docs) => {
            let data = docs.data();

            projectsContainer.innerHTML += `<div
                class="relative group rounded-xl overflow-hidden shadow-2xl h-[380px] bg-white dark:bg-gray-900 dark:shadow-cyan-800 dark:shadow-xl flex flex-col  transform hover:scale-105 transition-all duration-500 custom-card cursor-pointer">
                    <img src="${data.imgURL}" alt="${data.title}" class="w-full h-60 object-cover">
                <div class="p-4 flex-1 flex flex-col gap-4 text-center">
                    <h2 class="text-2xl font-bold text-gray-800 dark:text-white mb-2">${data.title}</h2>
                    <p class="text-gray-600 dark:text-gray-300 text-sm">${data.description}</p>
                </div>

                <div
                    class="absolute inset-0 bg-black bg-opacity-50  opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-500">
                    <div class="flex gap-6 text-white text-4xl">
                        <a href="${data.siteLink}" target="_blank" class="hover:text-cyan-300 transition"> <i class="fas fa-globe"></i></a>
                        <a href="${data.codeLink}" target="_blank" class="hover:text-cyan-300 transition"> <i class="fab fa-github"></i></a>
                    </div>
                </div>
            </div>`;
        })
    })
}

getProjects()