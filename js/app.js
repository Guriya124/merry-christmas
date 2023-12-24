const container = document.getElementById("container");
const card = document.getElementById("card");
const cardTitle = document.querySelector(".card-title");
const santa = document.querySelector(".santa");
const tree = document.querySelector(".tree1");

// Card rotates on mouse move.
container.addEventListener("mousemove", (rotate) => {
    let x = (innerWidth / 2 - rotate.pageX) / 15;
    let y = (innerHeight / 2 - rotate.pageY) / 15;

    card.style.transform = "rotatey(" + x + "deg) rotatex(" + y + "deg)";
});

container.addEventListener("mouseover", () => {
    cardTitle.style.transform = "translate3d(0, 0, 160px)";
    santa.style.transform = "translate3d(0, 0, 220px)";
    tree.style.transform = "translate3d(0, 0, 120px)";
    card.style.transition = "all 0.1s ease";
});





document.addEventListener("DOMContentLoaded", function () {
    createChristmasLights();
});

function createChristmasLights() {
    for (let i = 0; i < 5; i++) {
        const light = document.createElement("div");
        light.className = "christmas-light";
        light.style.top = getRandomPosition() + "px";
        light.style.left = getRandomPosition() + "px";
        light.style.right = getRandomPosition() + "px";
        container.appendChild(light);
    }
}

function getRandomPosition() {
    return Math.floor(Math.random() * 200);
}

const snowfallContainer = document.getElementById('snowfall');

for (let i = 0; i < 50; i++) {
    const snowflake = document.createElement('div');
    snowflake.className = 'snowflake';
    snowflake.style.width = `${Math.random() * 10}px`;
    snowflake.style.height = `${Math.random() * 10}px`;
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 2 + 1}s`;

    snowfallContainer.appendChild(snowflake);
}
