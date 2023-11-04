let wheel = document.querySelector(".wheel");
let spinButton = document.querySelector("button");

function spinWheel() {
    let randomAngle = 360 * (4 + Math.floor(Math.random() * 4)); // Rotate multiple times
    wheel.style.transform = `rotate(${randomAngle}deg)`;
}

spinButton.addEventListener("click", spinWheel);
