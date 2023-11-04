let wheel = document.querySelector(".wheel");
let spinButton = document.querySelector("button");

function spinWheel() {
    let randomDegree = Math.floor(Math.random() * 360);
    wheel.style.transform = `rotate(${randomDegree}deg)`;
}

spinButton.addEventListener("click", spinWheel);
