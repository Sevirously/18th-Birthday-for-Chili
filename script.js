// ================================
// Birthday Garden - Version 1
// ================================

const particles = document.getElementById("particles");
const garden = document.getElementById("garden");

// ------------------------
// Create glowing particles
// ------------------------

function createParticles() {

    for (let i = 0; i < 80; i++) {

        const p = document.createElement("div");

        p.className = "particle";

        const size = Math.random() * 4 + 1;

        p.style.width = size + "px";
        p.style.height = size + "px";

        p.style.left = Math.random() * 100 + "%";
        p.style.top = Math.random() * 100 + "%";

        p.style.animationDuration = (10 + Math.random() * 15) + "s";
        p.style.animationDelay = Math.random() * 8 + "s";

        particles.appendChild(p);
    }

}

// ------------------------
// Create animated stems
// ------------------------

function createStem(left, height, delay) {

    const stem = document.createElement("div");

    stem.className = "stem";

    stem.style.left = left + "%";
    stem.style.height = height + "vh";
    stem.style.animationDelay = delay + "s";

    const rose = document.createElement("div");
    rose.className = "rose";
    rose.style.animationDelay = (delay + 3) + "s";
    rose.innerHTML = '<div class="center"></div>';

    stem.appendChild(rose);

    garden.appendChild(stem);

}

function generateGarden() {

    const positions = [8, 18, 28, 40, 52, 64, 76, 88];

    positions.forEach((pos, index) => {

        const height = 30 + Math.random() * 25;

        createStem(pos, height, index * 0.35);

    });

}

// ------------------------
// Open Letter
// ------------------------

const openBtn = document.getElementById("openBtn");

openBtn.addEventListener("click", () => {

    alert("The envelope animation is coming in the next version! 🌸");

});

// ------------------------
// Start
// ------------------------

window.addEventListener("load", () => {

    createParticles();

    generateGarden();

});
